import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Residenza Sardagna",
  description: "Informativa sulla privacy per Residenza Sardagna",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="w-full py-16 lg:py-5 xl:py-20 1.5xl:py-28 2.5xl:py-32 min-h-screen xl:flex transition-all">
      <div className="w-full max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto text-white relative">
        <div className="flex flex-col w-full">
          <h1 className="text-black text-4xl sm:text-4.5xl md:text-5xl xl:text-6xl text-center lg:max-w-[35ch] mx-auto font-semibold tracking-[0.15rem] !leading-[1.05] mb-8">
            Privacy Policy
          </h1>

          <div className="text-base tracking-[0.07rem] text-black mx-auto w-full mb-10 font-normal pt-3">
            <p className="text-black mb-6">
              Ai sensi dell&apos;art. 13 e 14 del Regolamento europeo (UE)
              2016/679 (di seguito GDPR), e in relazione ai dati personali di
              cui il Titolare del Trattamento entrerà nella disponibilità,
              comunichiamo quanto segue:
            </p>

            <h2 className="text-primary mb-2">
              <b>Titolare del Trattamento è:</b>
            </h2>
            <p className="text-black mb-6">
              <b>COSTRUZIONI PISETTA LUIGI & C. SRL</b>
            </p>

            <h2 className="text-primary mb-2">
              <b>Tipologia dei dati raccolti</b>
            </h2>
            <p className="text-black mb-6">
              Quando usi i nostri servizi, accetti che la nostra azienda
              raccolga alcuni tuoi dati personali.
              <br />
              Tipi di dati raccolti:
            </p>

            <h3>
              <b>Dati forniti dall&apos;utente</b>
            </h3>
            <p className="text-black mb-6">
              Tutti i dati utili all&apos;utilizzo del servizio che offriamo.
              <br />
              Di seguito alcuni esempi di possibili dati richiesti:
            </p>
            <ul className="mb-6">
              <li>Nome</li>
              <li>Numero di telefono</li>
              <li>Indirizzo</li>
              <li>Email</li>
            </ul>

            <p className="text-black mb-6">
              <b>Dati di terzi</b>
              <br />
              Fornendo dati personali di terzi, ad esempio dei tuoi familiari o
              amici, devi assicurarti che questi soggetti siano stati
              adeguatamente informati e abbiano acconsentito al relativo
              trattamento nelle modalità descritte dalla presente informativa.
              <br />
              &nbsp;
              <br />
              <b>Dati di soggetti minori di 16 anni</b>
              <br />
              Se hai meno di 16 anni non puoi fornirci alcun dato, ed in ogni
              caso non assumiamo responsabilità per eventuali dichiarazioni da
              te fornite. Qualora ci accorgessimo dell&apos;esistenza di
              dichiarazioni non veritiere procederemo con la cancellazione
              immediata di ogni dato personale acquisito.
            </p>

            <h3>
              <b>Dati raccolti automaticamente</b>
            </h3>
            <p className="text-black mb-6">
              Raccogliamo i seguenti dati mediante i servizi che utilizzi:
            </p>
            <ul className="mb-6">
              <li>
                dati tecnici: ad esempio indirizzo IP, tipo di browser,
                informazioni sul tuo computer, dati relativi alla posizione
                attuale (approssimativa) dello strumento che stai utilizzando;
              </li>
            </ul>
            <ul className="mb-6">
              <li>
                dati raccolti utilizzando i cookie o tecnologie similari (vedi
                sezione Cookie)
              </li>
            </ul>

            <h2 className="text-primary mb-2">
              <b>Utilizzo dei dati raccolti</b>
            </h2>
            <p className="text-black mb-6">
              Utilizziamo i dati raccolti per offrirti ogni giorno il nostro
              servizio, per informarti sulle nostre attività commerciali o per
              proporti un servizio più personalizzato ed in linea con i tuoi
              interessi. Di seguito alcune casistiche:
            </p>
            <ul className="mb-6">
              <li>registrazione e creazione dell&apos;area riservata</li>
              <li>comunicazioni connesse all&apos;erogazione del servizio</li>
              <li>rilevamento della tua posizione attuale (approssimativa)</li>
              <li>ricerche di mercato</li>
              <li>interazione con social network</li>
            </ul>

            <h3>
              <b>Informazioni sulle nostre attività commerciali</b>
            </h3>
            <p className="text-black mb-6">
              Utilizziamo i dati raccolti, qualora tu ci abbia fornito
              espressamente il consenso, per informarti riguardo ad attività
              promozionali che potrebbero interessarti.
              <br />
              In particolare li utilizziamo per:
            </p>
            <ul className="mb-6">
              <li>
                comunicarti attività promozionali, commerciali e pubblicitarie
                su eventi o iniziative, tramite posta elettronica, invio SMS o
                notifiche push;
              </li>
            </ul>
            <ul className="mb-6">
              <li>
                per attività di analisi e di reportistica connessa ai sistemi di
                comunicazione promozionale, come ad esempio il rilevamento del
                numero delle e-mail aperte, dei click effettuati sui link
                presenti all&apos;interno della comunicazione, la tipologia del
                dispositivo utilizzato per leggere la comunicazione ed il
                relativo sistema operativo o l&apos;elenco dei disiscritti alla
                newsletter.
              </li>
            </ul>
            <p className="text-black mb-6">
              Inoltre elaboriamo i dati raccolti, qualora tu ci abbia fornito
              espressamente il consenso, per analizzare le tue abitudini o
              scelte di consumo al fine di proporti un servizio sempre più
              personalizzato ed in linea con i tuoi interessi e di migliorare la
              nostra offerta commerciale.
            </p>

            <h2 className="text-primary mb-2">
              <b>Conferimento dei dati</b>
            </h2>
            <p className="text-black mb-6">
              Il conferimento dei dati personali è obbligatorio esclusivamente
              per i trattamenti necessari all&apos;erogazione dei servizi
              offerti; è invece facoltativo per le finalità promozionali e di
              profilazione e l&apos;eventuale rifiuto di prestare il consenso
              non ha conseguenze negative sull&apos;erogazione del servizio
              offerto nell&apos;ambito del sito e relative applicazioni.
            </p>

            <h2 className="text-primary mb-2">
              <b>Soggetto del trattamento</b>
            </h2>
            <p className="text-black mb-6">
              Il Titolare del Trattamento si avvale di responsabili del
              trattamento per il raggiungimento delle finalità specificate
              sopra.
              <br />
              I Suoi dati personali – che non saranno oggetto di diffusione –
              potranno essere comunicati a: dipendenti o collaboratori del
              Titolare, soggetti che prestano attività di assistenza e
              consulenza in materia informatica, contabile, amministrativa,
              legale, tributaria e finanziaria; soggetti, enti od autorità a cui
              la comunicazione dei dati personali sia obbligatoria in forza di
              disposizioni di legge o di ordini delle autorità. I soggetti ai
              quali i Suoi dati personali saranno comunicati da parte del
              Titolare, potranno trattarli in qualità di autorizzati al
              trattamento o di responsabili del trattamento.
              <br />
              Non è previsto il trasferimento dei dati in Paesi extra UE. Nel
              caso di rendesse necessario trasferire i suoi dati personali a
              Terze Parti ubicate in Stati non appartenenti all&apos;Unione
              Europea, il Titolare assicura l&apos;adozione di adeguate
              garanzie.
            </p>

            <h2 className="text-primary mb-2">
              <b>Informazioni sui dati – modifica o eliminazione</b>
            </h2>
            <p className="text-black mb-6">
              Qualsiasi persona fisica che utilizzi il nostro servizio può:
            </p>
            <ul className="mb-6">
              <li>
                ottenere dal titolare, in ogni momento, informazioni circa
                l&apos;esistenza dei propri dati personali, l&apos;origine degli
                stessi, le finalità e le modalità di trattamento e, qualora
                presenti, di ottenere l&apos;accesso ai dati personali ed alle
                informazioni di cui all&apos;articolo 15 del GDPR;
              </li>
            </ul>
            <ul className="mb-6">
              <li>
                richiedere l&apos;aggiornamento, la rettifica,
                l&apos;integrazione, la cancellazione, la limitazione del
                trattamento dei dati nel caso ricorra una delle condizioni
                previste all&apos;articolo 18 del GDPR, la trasformazione in
                forma anonima o il blocco dei dati personali, trattati in
                violazione di legge, compresi quelli di cui non è necessaria la
                conservazione in relazione agli scopi per i quali i dati sono
                stati raccolti e/o successivamente trattati;
              </li>
            </ul>
            <ul className="mb-6">
              <li>
                opporsi, in tutto o in parte, per motivi legittimi, al
                trattamento dei dati, ancorché pertinenti allo scopo della
                raccolta ed al trattamento dei dati personali previsti ai fini
                di informazione commerciale o di invio di materiale
                pubblicitario o di vendita diretta ovvero per il compimento di
                ricerche di mercato o di comunicazione commerciale. Ogni utente
                ha altresì il diritto di revocare il consenso in qualsiasi
                momento senza pregiudicare le liceità del trattamento basata sul
                consenso prestato prima della revoca;
              </li>
            </ul>
            <ul className="mb-6">
              <li>
                ricevere i propri dati personali, forniti consapevolmente ed
                attivamente o attraverso la fruizione del servizio.
              </li>
            </ul>
            <p className="text-black mb-6">
              Ti ricordiamo che per qualsiasi domanda o richiesta relativa ai
              tuoi dati personali e al rispetto della tua privacy puoi scriverci
              al nostro indirizzo e-mail.
            </p>

            <h2 className="text-primary mb-2">
              <b>Come proteggiamo i tuoi dati</b>
            </h2>
            <p className="text-black mb-6">
              I dati trattati su questo sito sono salvati dentro database MySql
              e protetti da firewall. Tali dati sono collocati su Webfarm{" "}
              <a href="https://www.digitalocean.com/legal/privacy/">
                Digital Ocean
              </a>
              .
            </p>

            <h2 className="text-primary mb-2">
              <b>Altre informazioni</b>
            </h2>
            <h3>
              <b>Posizione</b>
            </h3>
            <p className="text-black mb-6">
              Quando utilizzi i nostri servizi con il rilevamento della
              posizione attivo, potremmo raccogliere ed elaborare informazioni
              sulla tua posizione attuale (approssimativa). Questi dati vengono
              trattati in forma anonima, in un formato che non consente di
              identificare personalmente l&apos;utente ed utilizzati al solo
              fine di facilitare la fruizione di alcune funzionalità del
              servizio basate sulla posizione. Puoi attivare/disattivare in
              qualsiasi momento i servizi di localizzazione accedendo alle
              impostazioni del tuo browser e/o del tuo dispositivo.
            </p>

            <h3>
              <b>Motori di ricerca</b>
            </h3>
            <p className="text-black mb-6">
              Le informazioni presenti in questo sito saranno visibili nelle
              ricerche effettuate nel motore di ricerca interno e potrebbero
              essere messe a disposizione di motori di ricerca terzi in quanto è
              consentita l&apos;indicizzazione dei contenuti da parte di motori
              terzi. Nel caso in cui un contenuto sia stato rimosso dal sito, è
              possibile che la copia cache permanga tra i risultati di ricerca
              per qualche giorno. I risultati della ricerca non sono gestiti dal
              Titolare del trattamento, ma l&apos;utente può segnalare la
              rimozione della pagina e sollecitare l&apos;aggiornamento della
              copia cache direttamente al motore di ricerca di terzi.
            </p>

            <h3>
              <b>Sezione &quot;Lavora con noi&quot;</b>
            </h3>
            <p className="text-black mb-6">
              Qualora il Titolare del trattamento metta a disposizione la pagina
              &quot;Lavora con noi&quot; per consultare le eventuali posizioni
              professionali aperte, si riserva di valutare le candidature
              pervenute ai fini di selezione e ricerca del personale.
            </p>
            <p className="text-black mb-6">
              I curricula ricevuti potranno essere conservati e rivalutati per
              successive ricerche per posizioni professionali compatibili con
              profilo del candidato. Il candidato potrà opporsi al trattamento
              dei suoi dati personali in qualsiasi momento scrivendo alla
              casella email del Titolare del trattamento.
            </p>
            <p className="text-black mb-6">
              Il candidato dovrà aver cura di inserire nella candidatura
              (curriculum vitae) la dichiarazione con cui acconsente al
              trattamento dei dati personali per la finalità di selezione,
              evitando di inserire dati personali sensibili non pertinenti
              all&apos;offerta di lavoro.
            </p>

            <h3>
              <b>Informazioni non contenute in questa policy</b>
            </h3>
            <p className="text-black mb-6">
              Eventuali ulteriori informazioni, in relazione al trattamento dei
              Dati Personali, potranno essere richieste in qualsiasi momento al
              Titolare del Trattamento utilizzando gli estremi di contatto.
            </p>

            <h3>
              <b>Aggiornamenti dell&apos;informativa</b>
            </h3>
            <p className="text-black mb-6">
              Il Titolare si riserva il diritto di modificare, aggiornare,
              aggiungere o rimuovere parti della presente informativa sulla
              privacy a propria discrezione e in qualsiasi momento. La persona
              interessata è tenuta a verificare periodicamente le eventuali
              modifiche alla presente pagina. L&apos;utilizzo del sito dopo la
              pubblicazione delle eventuali modifiche costituirà accettazione
              delle stesse.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/"
              className="bg-primary hover:opacity-80 transition-all py-2.5 h-[50px] px-12 inline-flex items-center text-white font-medium space-x-2 mx-auto"
            >
              <span className="text-lg xl:text-base text-white tracking-[3.2px] whitespace-nowrap flex items-center uppercase">
                Torna alla home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
