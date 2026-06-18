export const metadata = {
  title: "Politica de Confidențialitate | Joy Detailing",
  description:
    "Află cum colectează și protejează SC Joy Car Wash SRL datele tale personale atunci când completezi formularul de contact.",
};

export default function PoliticaDeConfidentialitate() {
  return (
    <main className="legalPage">
      <a href="/" className="legalBack">
        ← Înapoi la formular
      </a>

      <h1 style={{lineHeight:"1.15"}}>
        Politica de <span>Confidențialitate</span>
      </h1>
      <p className="legalUpdated">Ultima actualizare: 18 iunie 2026</p>

      <section>
        <p>
          Confidențialitatea ta contează pentru noi. Acest document îți explică,
          pe scurt și fără termeni complicați, ce date personale colectăm atunci
          când ne contactezi prin formularul de pe acest site, de ce avem nevoie
          de ele și ce drepturi ai în legătură cu acestea.
        </p>
      </section>

      <section>
        <h2>1. Cine suntem</h2>
        <p>
          Site-ul este administrat de <strong>SC Joy Car Wash SRL</strong>, cu
          sediul în Șoseaua Alexandriei nr. 17, Bragadiru, județul Ilfov, în
          calitate de operator de date cu caracter personal.
        </p>
        <p>
          Pentru orice întrebare legată de datele tale sau pentru a-ți exercita
          drepturile descrise mai jos, ne poți scrie la adresa de e-mail:{" "}
          <strong>[completați adresa de e-mail de contact]</strong>.
        </p>
      </section>

      <section>
        <h2>2. Ce date colectăm</h2>
        <p>
          Colectăm doar datele de care avem nevoie pentru a te putea contacta.
          Concret, prin formular ne transmiți:
        </p>
        <ul>
          <li>
            <strong>Numele</strong> tău;
          </li>
          <li>
            <strong>Numărul de telefon</strong> la care dorești să fii sunat.
          </li>
        </ul>
        <p>
          În plus, din motive de securitate și pentru a preveni abuzurile,
          sistemul nostru reține în mod automat:
        </p>
        <ul>
          <li>
            <strong>Adresa IP</strong> de la care este trimis formularul;
          </li>
          <li>
            <strong>Data și ora</strong> la care ne-ai trimis solicitarea.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Colectăm datele doar cu acordul tău</h2>
        <p>
          Nu colectăm nimic „pe ascuns”. Înainte de a trimite formularul, îți
          cerem să bifezi în mod explicit căsuța prin care confirmi că ești de
          acord cu prelucrarea datelor tale, conform acestei politici.{" "}
          <strong>
            Fără bifarea acestei căsuțe, formularul nu poate fi trimis
          </strong>
          , iar noi nu primim niciun fel de date despre tine.
        </p>
        <p>
          Această bifă reprezintă consimțământul tău (temeiul legal al
          prelucrării, conform art. 6 alin. (1) lit. (a) din Regulamentul GDPR)
          și ți-l poți retrage oricând, așa cum explicăm în secțiunea
          „Drepturile tale”.
        </p>
      </section>

      <section>
        <h2>4. De ce avem nevoie de aceste date</h2>
        <p>Folosim datele tale exclusiv pentru a:</p>
        <ul>
          <li>
            te contacta telefonic și a-ți răspunde la solicitarea trimisă prin
            formular;
          </li>
          <li>
            stabili împreună detaliile unei programări pentru serviciile noastre
            de detailing;
          </li>
          <li>
            proteja site-ul împotriva mesajelor automate (spam) și a folosirii
            abuzive a formularului.
          </li>
        </ul>
        <p>
          Nu folosim datele tale pentru a-ți trimite mesaje de marketing
          nesolicitate și nu le vindem niciodată către terți.
        </p>
      </section>

      <section>
        <h2>5. Verificarea anti-spam (Cloudflare Turnstile)</h2>
        <p>
          Pentru a ne asigura că formularul este completat de o persoană reală,
          și nu de un program automat, folosim serviciul{" "}
          <strong>Cloudflare Turnstile</strong>. Acesta este un sistem de
          verificare care înlocuiește clasicele teste „demonstrează că nu ești
          robot”.
        </p>
        <p>
          În acest scop, Cloudflare poate analiza informații tehnice precum
          adresa IP și modul în care interacționezi cu pagina. Verificarea se
          face în fundal, fără să îți cerem informații suplimentare. Aceste date
          sunt prelucrate de Cloudflare în calitate de furnizor al serviciului,
          conform politicii proprii de confidențialitate, disponibilă la{" "}
          <a
            href="https://www.cloudflare.com/privacypolicy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            cloudflare.com/privacypolicy
          </a>
          .
        </p>
      </section>

      <section>
        <h2>6. Cui transmitem datele</h2>
        <p>
          Pentru a putea funcționa, formularul nostru se bazează pe câțiva
          furnizori de servicii de încredere, care prelucrează datele strict la
          instrucțiunile noastre:
        </p>
        <ul>
          <li>
            <strong>Telegram</strong> – atunci când trimiți formularul, numele,
            numărul de telefon și ora solicitării ne sunt transmise sub forma
            unei notificări, pentru ca echipa noastră să te poată contacta
            rapid;
          </li>
          <li>
            <strong>Upstash</strong> – ne ajută să limităm numărul de trimiteri
            dintr-o perioadă scurtă, păstrând temporar adresa IP pentru a
            preveni spam-ul;
          </li>
          <li>
            <strong>Cloudflare</strong> – asigură verificarea anti-spam descrisă
            mai sus.
          </li>
        </ul>
        <p>
          Unii dintre acești furnizori pot stoca datele pe servere aflate în
          afara Uniunii Europene, cu respectarea garanțiilor prevăzute de
          legislația privind protecția datelor.
        </p>
      </section>

      <section>
        <h2>7. Cât timp păstrăm datele</h2>
        <p>
          Păstrăm datele tale doar atât timp cât este necesar pentru a-ți
          răspunde la solicitare și pentru a gestiona eventuala programare.
          Datele tehnice folosite pentru limitarea spam-ului (adresa IP) sunt
          păstrate doar pentru o perioadă foarte scurtă, după care sunt șterse
          automat. Atunci când nu mai există un motiv pentru a le păstra, datele
          tale sunt eliminate.
        </p>
      </section>

      <section>
        <h2>8. Drepturile tale</h2>
        <p>
          Conform Regulamentului General privind Protecția Datelor (GDPR), ai
          dreptul:
        </p>
        <ul>
          <li>să ne ceri să afli ce date deținem despre tine;</li>
          <li>să ceri corectarea datelor incorecte sau incomplete;</li>
          <li>să ceri ștergerea datelor tale („dreptul de a fi uitat”);</li>
          <li>să restricționezi sau să te opui prelucrării datelor;</li>
          <li>
            să îți retragi oricând consimțământul, fără ca acest lucru să
            afecteze prelucrările făcute până în acel moment;
          </li>
          <li>
            să depui o plângere la Autoritatea Națională de Supraveghere a
            Prelucrării Datelor cu Caracter Personal (ANSPDCP).
          </li>
        </ul>
        <p>
          Pentru a-ți exercita oricare dintre aceste drepturi, scrie-ne la{" "}
          <strong>[completați adresa de e-mail de contact]</strong> și îți vom
          răspunde în cel mai scurt timp.
        </p>
      </section>

      <section>
        <h2>9. Modificări ale acestei politici</h2>
        <p>
          Este posibil să actualizăm din când în când această politică, de
          exemplu atunci când apar modificări în modul în care funcționează
          site-ul. Versiunea actualizată va fi mereu disponibilă pe această
          pagină, împreună cu data ultimei modificări.
        </p>
      </section>
    </main>
  );
}
