import HeroSection from "../components/ui/HeroSection";

export default function Terms() {
  return (
    <main className="w-full text-gray-800">

       <HeroSection
  title="Terms and Conditions"
  
/>

      {/* CONTENT */}
    <section
  className="relative py-16 px-6 bg-cover bg-center"
  style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
>
  {/* OVERLAY */}
  <div className="absolute inset-0 bg-[#cfeaf6]/70"></div>

  {/* CARD */}
  <div className="relative z-10 max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">

    {/* HEADING */}
    <h2 className="text-4xl font-bold mb-3">
  Privacy Statement Hassaan <br />
  <span className="text-blue-600">Travel</span>
</h2>

    {/* ✅ FULL WIDTH PARAGRAPH */}
    <p className="text-sm text-gray-700 leading-relaxed mb-6">
      De bescherming van uw persoonsgegevens is van groot belang voor Hassaan Travel (hierna 'HT').
      Op deze pagina leggen wij u uit, hoe wij omgaan met uw gegevens.
      Het privacy statement van HT is opgesteld volgens de Algemene Verordening Gegevensbescherming
      (hierna 'AVG') en is voor alle personen die een dienst of product afnemen van HT.
    </p>

    {/* ✅ GRID STARTS FROM HERE */}
    <div className="grid md:grid-cols-2 gap-10 items-start">

      {/* LEFT CONTENT */}
      <div>

        {/* 1 */}
        <h3 className="text-blue-600 font-bold">1. AVG</h3>
        <p className="text-sm text-gray-700">
          1.1. Alle gegevens die worden verstrekt aan HT vallen onder de AVG.
        </p>

        {/* 2 */}
        <h3 className="text-blue-600 font-bold mt-4">2. Persoonsgegevens</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          2.1. HT vraagt om persoonsgegevens bij het maken van een boeking.
          De persoonlijke gegevens die HT ontvangt gebruikt zij uitsluitend om de service te verlenen
          of het betreffende reisproduct te leveren. HT vraagt om persoonsgegevens die toereikend, ter zake
          dienend zijn en geen bovenmatige informatie bevatten. Onder persoonsgegevens wordt verstaan:
        </p>

        <ul className="list-disc ml-5 text-sm text-gray-700 mt-2 space-y-1">
          <li>Naam-, adres- en woongegevens</li>
          <li>Geslacht</li>
          <li>Geboortedatum</li>
          <li>Telefoonnummer</li>
          <li>E-mailadres</li>
          <li>Betalingsgegevens</li>
          <li>Kopie van het paspoort</li>
        </ul>
      </div>

      {/* ✅ IMAGE PERFECTLY ALIGNED WITH THIS BLOCK */}
     <div className="flex justify-center items-start pt-4">
  <img
    src="/assets/terms-and-conditions/terms.webp"
    alt="Terms"
    className="w-full max-w-md max-h-[360px] object-contain rounded-2xl "
  />
</div>

    </div>

    {/* FULL WIDTH REST */}
    <div className="mt-10 space-y-8">

      <section>
        <h3 className="text-blue-600 font-bold text-lg">
          3. Verstrekking van gegevens aan derden
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mt-2">
          3.1. Om de goede service te verlenen waar HT naar streeft, is het noodzakelijk om persoonsgegevens
          te delen met derden die de geboekte diensten en producten leveren. Door deze diensten en producten
          schakelt HT derde partijen in. HT heeft contractuele en organisatorische maatregelen genomen om ervoor
          te zorgen dat de persoonsgegevens enkel worden gebruikt voor de eerder benoemde doeleinden.
        </p>
        <p className="text-sm text-gray-700 mt-2 italic">
          HT zal persoonsgegevens van de klant nooit verstrekken aan personen of bedrijven voor commerciële exploitatie.
        </p>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">4. Inzage</h3>
        <p className="text-sm text-gray-700 mt-1">
          4.1. Klanten hebben altijd recht op inzage van hun persoonsgegevens.
        </p>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">5. Correctie</h3>
        <p className="text-sm text-gray-700 mt-1">
          5.1. Op verzoek van de klant kan HT de persoonsgegevens wijzigen.
        </p>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">6. Verwijdering</h3>
        <p className="text-sm text-gray-700 mt-1">
          6.1. Op verzoek van de klant kan HT de persoonsgegevens verwijderen.
        </p>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">7. Bewaartermijn</h3>
        <p className="text-sm text-gray-700 mt-1">
          7.1. HT bewaart de persoonsgegevens voor een termijn van drie kalenderjaren vanaf het moment van de boeking.
          Hierna worden de gegevens automatisch verwijderd.
        </p>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">8. Wijzigingen</h3>
        <p className="text-sm text-gray-700 leading-relaxed mt-1">
          8.1. HT is gerechtigd de gebruiksvoorwaarden van haar privacy statement te allen tijde te wijzigen
          of te vernieuwen zonder een verplichting tot mededeling aan de gebruikers.
          De klant is te allen tijde gehouden aan de op dat moment geldende gebruiksvoorwaarden.
        </p>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">9. Website</h3>
        <p className="text-sm text-gray-700 leading-relaxed mt-1">
          9.1. Indien u gebruik maakt van onze website dan worden de volgende gegevens verwerkt:
          Uw IP-adres, het type en de taal van uw browser, de tijd van uw bezoek en het webadres van waaruit
          u onze website bereikte, de pagina's die u daarop bekijkt, de koppelingen (links) waarop u klikt en
          de andere acties die u onderneemt. Hiervoor gebruiken we cookies.
        </p>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">10. Cookies</h3>
        <div className="text-sm text-gray-700 space-y-2 mt-1">
          <p>
            10.1. HT maakt op haar website gebruik van cookies. Bij het accepteren van cookies kun je kiezen uit twee instellingen:
            ‘Functionele en analytische cookies’ en ‘Persoonlijk binnen en buiten de website’.
          </p>
          <p>
            10.2. U kunt kiezen voor ‘Nee, zelf instellen’ of ‘Ja, dat is prima’.
            ‘Nee, zelf instellen’, houdt in dat u kiest voor functionele en analytische cookies.
          </p>
          <p>
            10.3. Wanneer u kiest voor ‘Ja, dat is prima’, dan betekent dit dat u kiest voor persoonlijke cookies
            voor zowel binnen als buiten de website.
          </p>
        </div>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">
          11. Verstrekking van gegevens aan bevoegde autoriteiten
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed mt-1">
          11.1. HT is wettelijk verplicht om uw gegevens in sommige gevallen met derden te delen.
          U kunt daarbij denken aan de verstrekking van gegevens aan bevoegde autoriteiten voor opsporing
          en een strafrechtelijk onderzoek.
        </p>
      </section>

      <section>
        <h3 className="text-blue-600 font-bold text-lg">12. Contact</h3>
        <p className="text-sm text-gray-700 mt-1">
          12.1. Heeft u vragen en/of opmerkingen over ons privacy statement?
          Mail ons dan op{" "}
          <span className="font-semibold text-blue-600 underline cursor-pointer">
            info@hassaantravel.nl
          </span>
        </p>
      </section>

    </div>
  </div>
</section>
    </main>
  );
}