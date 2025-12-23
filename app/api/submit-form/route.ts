import { NextRequest, NextResponse } from 'next/server'

// Input validation schema
interface FormData {
  name: string
  email: string
  phone: string
  privacy: boolean
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Validate and sanitize form data
function validateFormData(body: any): { valid: boolean; data?: FormData; error?: string } {
  // Check required fields
  if (!body.name || !body.email || !body.phone || !body.privacy) {
    return { valid: false, error: 'Tutti i campi sono obbligatori' }
  }

  // Validate name
  const name = String(body.name).trim()
  if (name.length < 2 || name.length > 100) {
    return { valid: false, error: 'Il nome deve essere tra 2 e 100 caratteri' }
  }

  // Validate email
  const email = String(body.email).trim().toLowerCase()
  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: 'Formato email non valido' }
  }

  // Validate and format phone
  let phone = String(body.phone).trim()
  // Remove all spaces, dashes, and other non-numeric characters except +
  const cleanedPhone = phone.replace(/[^\d+]/g, '')

  // Format phone to E.164
  if (!cleanedPhone.startsWith('+')) {
    // Remove leading 0 if present (Italian format)
    let formattedPhone = cleanedPhone.startsWith('0') ? cleanedPhone.substring(1) : cleanedPhone

    // Add country code if not present
    if (!formattedPhone.startsWith('39')) {
      formattedPhone = '39' + formattedPhone
    }

    phone = '+' + formattedPhone
  } else {
    phone = cleanedPhone
  }

  // Validate Italian mobile number format: +39 followed by exactly 10 digits
  // Italian mobile numbers: +39 3XX XXXXXXX (total 12 digits with country code)
  if (!/^\+393\d{9}$/.test(phone)) {
    return { valid: false, error: 'Numero di telefono non valido. Formato richiesto: +39 3XX XXXXXXX' }
  }

  // Validate privacy acceptance
  if (body.privacy !== true) {
    return { valid: false, error: 'Devi accettare la privacy policy' }
  }

  return {
    valid: true,
    data: { name, email, phone, privacy: body.privacy }
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate form data
    const validation = validateFormData(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    const formData = validation.data!

    // Verify required environment variables
    if (!process.env.BREVO_API_KEY) {
      console.error('Missing BREVO_API_KEY in environment variables')
      return NextResponse.json(
        { error: 'Configurazione non disponibile' },
        { status: 500 }
      )
    }

    // Split name into first and last name
    const nameParts = formData.name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // Prepare contact data for Brevo
    const contactData = {
      email: formData.email,
      attributes: {
        FIRSTNAME: firstName,
        LASTNAME: lastName,
        SMS: formData.phone,
      },
      updateEnabled: true, // Update contact if already exists
    }

    // Debug logging
    console.log('Sending to Brevo:', JSON.stringify(contactData, null, 2))

    // Send to Brevo Contacts API
    const brevoResponse = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(contactData),
    })

    // Handle response
    let responseData: { code?: string; message?: string } = {}
    const responseText = await brevoResponse.text()

    // Try to parse JSON if there's content
    if (responseText) {
      try {
        responseData = JSON.parse(responseText)
      } catch {
        console.error('Failed to parse Brevo response:', responseText)
      }
    }

    console.log('Brevo response status:', brevoResponse.status)
    console.log('Brevo response data:', responseData)

    if (!brevoResponse.ok) {
      // Check if it's a duplicate contact error (which is actually OK)
      if (brevoResponse.status === 400 && responseData.code === 'duplicate_parameter') {
        console.log('Contact already exists, will be updated')
        // This is fine - contact already exists
      } else {
        console.error('Brevo API error:', responseData)
        throw new Error(responseData.message || `Brevo API error: ${brevoResponse.status}`)
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Richiesta inviata con successo'
    })

  } catch (error) {
    console.error('Form submission error:', error)

    // Log detailed error for debugging
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }

    return NextResponse.json(
      { error: 'Si è verificato un errore. Riprova più tardi.' },
      { status: 500 }
    )
  }
}
