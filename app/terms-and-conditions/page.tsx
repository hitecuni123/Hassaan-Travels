export default function Terms() {
  return (
    <main className="w-full text-gray-800">

      {/* HERO */}
      <section
        className="py-20 text-center text-black bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >
        <h1 className="mt-10 text-4xl md:text-4xl font-bold">
          Terms & Conditions
        </h1>
      </section>

      {/* CONTENT */}
      <section
        className="relative py-16 px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#cfeaf6]/70"></div>

        {/* CARD */}
        <div className="relative z-10 max-w-6xl mx-auto bg-white/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/40">

          {/* TOP SECTION: Only Points 1 and 2 stay next to the image */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT SIDE (Points 1-2) */}
            <div>
              <h2 className="text-4xl font-bold mb-3">
                Privacy Statement <span className="text-blue-600">Hassaan Travel</span>
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                De bescherming van uw persoonsgegevens is van groot belang voor Hassaan Travel (hierna 'HT'). 
                Op deze pagina leggen wij u uit, hoe wij omgaan met uw gegevens. 
                Het privacy statement van HT is opgesteld volgens de Algemene Verordening Gegevensbescherming 
                (hierna 'AVG') en is voor alle personen die een dienst of product afnemen van HT.
              </p>

              {/* 1 */}
              <h3 className="text-blue-600 font-bold mt-4">1. AVG</h3>
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

            {/* RIGHT SIDE (Image) */}
            <div className="flex justify-center items-start">
              <img
                src="/assets/terms-and-conditions/terms.webp"
                alt="Terms"
                className="w-full max-w-sm rounded-2xl shadow-lg"
              />
            </div>
          </div> 
          {/* END OF GRID - From here on, everything is FULL WIDTH */}

          <div className="mt-10 space-y-8">
            
            {/* 3 - NOW FULL WIDTH */}
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

            {/* 4 - NOW FULL WIDTH */}
            <section>
              <h3 className="text-blue-600 font-bold text-lg">4. Inzage</h3>
              <p className="text-sm text-gray-700 mt-1">4.1. Klanten hebben altijd recht op inzage van hun persoonsgegevens.</p>
            </section>

            {/* 5 */}
            <section>
              <h3 className="text-blue-600 font-bold text-lg">5. Correctie</h3>
              <p className="text-sm text-gray-700 mt-1">5.1. Op verzoek van de klant kan HT de persoonsgegevens wijzigen.</p>
            </section>

            {/* 6 */}
            <section>
              <h3 className="text-blue-600 font-bold text-lg">6. Verwijdering</h3>
              <p className="text-sm text-gray-700 mt-1">6.1. Op verzoek van de klant kan HT de persoonsgegevens verwijderen.</p>
            </section>

            {/* 7 */}
            <section>
              <h3 className="text-blue-600 font-bold text-lg">7. Bewaartermijn</h3>
              <p className="text-sm text-gray-700 mt-1">
                7.1. HT bewaart de persoonsgegevens voor een termijn van drie kalenderjaren vanaf het moment van de boeking. 
                Hierna worden de gegevens automatisch verwijderd.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h3 className="text-blue-600 font-bold text-lg">8. Wijzigingen</h3>
              <p className="text-sm text-gray-700 leading-relaxed mt-1">
                8.1. HT is gerechtigd de gebruiksvoorwaarden van haar privacy statement te allen tijde te wijzigen 
                of te vernieuwen zonder een verplichting tot mededeling aan de gebruikers. 
                De klant is te allen tijde gehouden aan de op dat moment geldende gebruiksvoorwaarden.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h3 className="text-blue-600 font-bold text-lg">9. Website</h3>
              <p className="text-sm text-gray-700 leading-relaxed mt-1">
                9.1. Indien u gebruik maakt van onze website dan worden de volgende gegevens verwerkt: 
                Uw IP-adres, het type en de taal van uw browser, de tijd van uw bezoek en het webadres van waaruit 
                u onze website bereikte, de pagina's die u daarop bekijkt, de koppelingen (links) waarop u klikt en 
                de andere acties die u onderneemt. Hiervoor gebruiken we cookies.
              </p>
            </section>

            {/* 10 */}
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

            {/* 11 */}
            <section>
              <h3 className="text-blue-600 font-bold text-lg">11. Verstrekking van gegevens aan bevoegde autoriteiten</h3>
              <p className="text-sm text-gray-700 leading-relaxed mt-1">
                11.1. HT is wettelijk verplicht om uw gegevens in sommige gevallen met derden te delen. 
                U kunt daarbij denken aan de verstrekking van gegevens aan bevoegde autoriteiten voor opsporing 
                en een strafrechtelijk onderzoek.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h3 className="text-blue-600 font-bold text-lg">12. Contact</h3>
              <p className="text-sm text-gray-700 mt-1">
                12.1. Heeft u vragen en/of opmerkingen over ons privacy statement? 
                Mail ons dan op <span className="font-semibold text-blue-600 underline cursor-pointer">info@hassaantravel.nl</span>
              </p>
            </section>

          </div>
        </div>
      </section>
    </main>
  );
}