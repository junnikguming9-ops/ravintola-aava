import React from "react";
import Image from "next/image";

const OurStory = () => {
  return (
    <section id="Tarina" className="bg-pale text-rough py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl italic text-gold">
            Tarinamme
          </h2>
          <p className="font-poppins text-lg text-off-navy/80 mt-2">
            Unelmasta luotu, intohimolla jaettu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative h-96 md:h-full w-full">
            <Image
              src="/preview16.jpg" 
              alt="Founder and Head Chef of AAVA"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>

          <div className="font-poppins text-off-navy">
            <h3 className="font-playfair text-4xl text-gold mb-4">
              Visio eleganssista
            </h3>
            <div className="w-24 h-px bg-gold mb-6"></div>
            <p className="mb-4 text-lg leading-relaxed">
              AAVA syntyi yksinkertaisesta mutta syvällisestä toiveesta: luoda
              ruokailuelämys, joka ylittää arjen. Se ei alkanut
              neuvotteluhuoneessa, vaan visionäärien yhteisestä unelmasta, jonka
              ytimessä oli intohimo kulinaariseen taiteeseen ja ajattomaan
              vieraanvaraisuuteen.
            </p>
            <p className="mb-4 leading-relaxed">
              Perustajamme Jannik matkusti vuosikymmeniä ympäri maailmaa keräten
              inspiraatiota Marrakechin eloisilta toreilta Pariisin
              Michelin-tähditettyihin keittiöihin. Tavoitteena oli kutoa nämä
              globaalit langat ainutlaatuiseksi makujen kudelmaksi, juuri tänne
              Helsingin sydämeen.
            </p>
            <p className="leading-relaxed">
              Uskomme, että ateria on matka. AAVAssa jokainen annos kertoo
              tarinan perinteestä ja innovaatiosta, ja jokainen yksityiskohta –
              käsin poimituista paikallisista raaka-aineista huolellisesti
              kuratoituun tunnelmaan – on osoitus sitoutumisestamme laatuun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
