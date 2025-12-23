"use client";

import { useState } from "react";
import Image from "next/image";
import logoFormImage from "@/public/landings/tigli/svg/tigli-watermark-2.svg";

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "+39 ",
    email: "",
    privacy: false,
  });
  const [validation, setValidation] = useState({
    name: { state: null as boolean | null, message: "" },
    phone: { state: null as boolean | null, message: "" },
    email: { state: null as boolean | null, message: "" },
    privacy: { state: null as boolean | null, message: "" },
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Always ensure +39 prefix
    if (!value.startsWith('+39')) {
      value = '+39 ';
    }

    // Only allow digits and spaces after +39
    const prefix = '+39 ';
    const afterPrefix = value.substring(4).replace(/[^\d\s]/g, '');

    setForm({ ...form, phone: prefix + afterPrefix });
  };

  const checkForm = async () => {
    let isValid = true;
    const newValidation = { ...validation };

    // Validate name
    if (!form.name.trim()) {
      newValidation.name = { state: false, message: "Campo obbligatorio" };
      isValid = false;
    } else if (form.name.trim().length < 2) {
      newValidation.name = { state: false, message: "Minimo 2 caratteri" };
      isValid = false;
    } else {
      newValidation.name = { state: true, message: "" };
    }

    // Validate phone (excluding the +39 prefix)
    // Italian mobile numbers: 3XX XXXXXXX (10 digits starting with 3)
    const phoneDigits = form.phone.replace(/[^\d]/g, '').substring(2); // Remove country code
    if (phoneDigits.length === 0) {
      newValidation.phone = { state: false, message: "Campo obbligatorio" };
      isValid = false;
    } else if (!phoneDigits.startsWith('3')) {
      newValidation.phone = { state: false, message: "Deve iniziare con 3" };
      isValid = false;
    } else if (phoneDigits.length !== 10) {
      newValidation.phone = { state: false, message: "Deve essere 10 cifre (3XX XXXXXXX)" };
      isValid = false;
    } else {
      newValidation.phone = { state: true, message: "" };
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      newValidation.email = { state: false, message: "Campo obbligatorio" };
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      newValidation.email = { state: false, message: "Formato non valido" };
      isValid = false;
    } else {
      newValidation.email = { state: true, message: "" };
    }

    // Validate privacy
    if (!form.privacy) {
      newValidation.privacy = { state: false, message: "Campo obbligatorio" };
      isValid = false;
    } else {
      newValidation.privacy = { state: true, message: "" };
    }

    setValidation(newValidation);

    if (!isValid) return;

    // Submit form
    setSending(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          phone: form.phone.trim(),
          privacy: form.privacy,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Redirect to thank you page
        window.location.href = "/richiesta-inviata";
      } else {
        // Show error message
        const errorMessage = data.error || "Si è verificato un errore. Riprova.";
        alert(errorMessage);
        setSending(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Errore di connessione. Verifica la tua connessione e riprova.");
      setSending(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="w-full max-w-[calc(100%-3rem)] sm:max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-4xl mx-auto xl:!mt-40"
    >
      <div className="w-full xl:px-12">
        <form className={`w-full ${sending ? "pointer-events-none" : ""}`}>
          <div className="w-full text-center">
            <Image
              alt="logo"
              src={logoFormImage}
              className="h-16 w-auto mx-auto mb-9"
            />
          </div>

          <h2 className="text-primary text-4xl sm:text-4.5xl font-semibold !leading-tight mb-6 text-center w-full">
            Richiedi informazioni
          </h2>
          <p className="text-black text-lg mb-16 max-w-[40ch] !leading-relaxed text-center mx-auto">
            Desideri altre informazioni su queste case? Compila il form qui
            sotto. Ti risponderemo al più presto!
          </p>

          <div className="w-full grid grid-cols-1 space-y-4">
            {/* Name field */}
            <div className="relative w-full block">
              <div className="w-full flex flex-col relative bg-white rounded-md">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onFocus={() =>
                    setValidation({
                      ...validation,
                      name: { state: null, message: "" },
                    })
                  }
                  name="fullname"
                  className="pt-4 px-4 border !border-gray-300 !border-b-secondary focus:!bg-white focus:!ring-1 text-center focus:!border-secondary focus:!ring-secondary bg-transparent outline-none h-16 text-dark text-lg lg:text-lg peer"
                  placeholder=" "
                  type="text"
                />
                <label className="text-xxs absolute left-0 top-2.5 uppercase pointer-events-none peer-focus:!text-xxs peer-focus:!top-2.5 peer-focus:translate-y-0 peer-focus:uppercase peer-placeholder-shown:normal-case peer-placeholder-shown:text-lg peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 transition-all w-full text-center text-gray-400">
                  Nome e cognome
                </label>
              </div>
              {validation.name.state === false && (
                <span className="text-[#d76565] relative text-xxs uppercase block text-center w-full pt-2">
                  {validation.name.message}
                </span>
              )}
            </div>

            {/* Phone field */}
            <div className="relative w-full block">
              <div className="w-full flex flex-col relative bg-white rounded-md">
                <input
                  value={form.phone}
                  onChange={handlePhoneChange}
                  onFocus={() =>
                    setValidation({
                      ...validation,
                      phone: { state: null, message: "" },
                    })
                  }
                  name="phone"
                  className="pt-4 px-4 border !border-gray-300 !border-b-secondary focus:!bg-white focus:!ring-1 text-center focus:!border-secondary focus:!ring-secondary bg-transparent outline-none h-16 text-dark text-lg lg:text-lg peer"
                  placeholder=" "
                  type="tel"
                />
                <label className="text-xxs absolute left-0 top-2.5 uppercase pointer-events-none peer-focus:!text-xxs peer-focus:!top-2.5 peer-focus:translate-y-0 peer-focus:uppercase peer-placeholder-shown:normal-case peer-placeholder-shown:text-lg peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 transition-all w-full text-center text-gray-400">
                  Telefono
                </label>
              </div>
              {validation.phone.state === false && (
                <span className="text-[#d76565] relative text-xxs uppercase block text-center w-full pt-2">
                  {validation.phone.message}
                </span>
              )}
            </div>

            {/* Email field */}
            <div className="relative w-full block">
              <div className="w-full flex flex-col relative bg-white rounded-md">
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  onFocus={() =>
                    setValidation({
                      ...validation,
                      email: { state: null, message: "" },
                    })
                  }
                  name="email"
                  className="pt-4 px-4 border !border-gray-300 !border-b-secondary focus:!bg-white focus:!ring-1 text-center focus:!border-secondary focus:!ring-secondary bg-transparent outline-none h-16 text-dark text-lg lg:text-lg peer"
                  placeholder=" "
                  type="email"
                />
                <label className="text-xxs absolute left-0 top-2.5 uppercase pointer-events-none peer-focus:!text-xxs peer-focus:!top-2.5 peer-focus:translate-y-0 peer-focus:uppercase peer-placeholder-shown:normal-case peer-placeholder-shown:text-lg peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 transition-all w-full text-center text-gray-400">
                  E-mail
                </label>
              </div>
              {validation.email.state === false && (
                <span className="text-[#d76565] relative text-xxs uppercase block text-center w-full py-2">
                  {validation.email.message}
                </span>
              )}
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-6 gap-x-4 gap-y-6">
            <div className="md:flex-grow flex items-center h-full">
              <div className="w-full relative text-left pt-2">
                <div className="relative w-auto inline-flex justify-center items-center">
                  <span className="flex items-center relative flex-shrink-0">
                    <input
                      checked={form.privacy}
                      onChange={(e) => {
                        setForm({ ...form, privacy: e.target.checked });
                        setValidation({
                          ...validation,
                          privacy: { state: null, message: "" },
                        });
                      }}
                      aria-describedby="privacy"
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      className="focus:ring-black opacity-0 text-secondary border-transparent border-2 cursor-pointer h-7 w-7"
                    />
                    <div
                      className={`absolute w-full h-full top-0 left-0 border border-black bg-transparent pointer-events-none flex justify-center items-center ${
                        form.privacy ? "!bg-transparent !border-secondary" : ""
                      }`}
                    >
                      <div
                        className={`!border-2 p-[2px] md:p-[4px] !border-secondary h-full w-full opacity-0 relative z-10 flex items-center justify-center ${
                          form.privacy ? "!opacity-100 !bg-transparent" : ""
                        }`}
                      >
                        <div className="bg-secondary w-full h-full"></div>
                      </div>
                    </div>
                  </span>
                  <span className="flex ml-3 relative whitespace-nowrap">
                    <label
                      htmlFor="privacy"
                      className="cursor-pointer text-[#000000] text-sm xl:text-xsm font-medium"
                    >
                      Ho letto e accetto la{" "}
                      <a
                        href="/privacy-policy"
                        target="_blank"
                        className="underline text-primary hover:opacity-80 transition-all"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </span>
                </div>

                {validation.privacy.state === false && (
                  <span className="text-[#d76565] -mt-5 mb-2 text-xxs uppercase block w-full py-2 absolute top-[calc(100%+1rem)] left-0">
                    {validation.privacy.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full sm:w-auto flex justify-center">
              <button
                type="button"
                onClick={checkForm}
                className="bg-secondary xl:hover:bg-secondaryHover transition-all py-6.5 px-14 font-medium text-white inline-flex items-center justify-center w-full"
              >
                {sending ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <span className="font-semibold text-base xl:text-lg text-white !leading-none">
                    Invia richiesta
                  </span>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
