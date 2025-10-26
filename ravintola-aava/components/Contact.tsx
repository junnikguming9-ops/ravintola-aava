import React from "react";
import { contactDetails, openingHours } from "../data/contactInfo";

const Contact = () => {
  const googleMapsEmbedCode = `
   <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d992.1618726479619!2d24.94663461715154!3d60.17537346135147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfi!2sfi!4v1760109672947!5m2!1sfi!2sfi" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  `;

  return (
    <section id="Ota-Yhteyttä" className="bg-pale text-rough py-20 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl italic text-gold">
            Ota Yhteyttä
          </h2>
          <p className="font-poppins text-lg text-off-navy/80 mt-2">
            Toivotamme teidät lämpimästi tervetulleeksi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div className="font-poppins text-off-navy">
            <div className="mb-12">
              <h3 className="font-playfair text-4xl text-gold mb-4">
                Vieraile meillä
              </h3>
              <div className="w-24 h-px bg-gold mb-6"></div>
              <p className="text-lg mb-2">{contactDetails.address}</p>
              <p className="text-lg mb-2">
                <strong>Puhelin:</strong> {contactDetails.phone}
              </p>
              <p className="text-lg">
                <strong>Sähköposti:</strong> {contactDetails.email}
              </p>
            </div>

            <div>
              <h3 className="font-playfair text-4xl text-gold mb-4">
                Aukiolo Ajat
              </h3>
              <div className="w-24 h-px bg-gold mb-6"></div>
              <ul className="space-y-2 text-lg">
                {openingHours.map((item, index) => (
                  <li key={index} className="flex justify-between">
                    <span>{item.day}</span>
                    <span className="font-semibold">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden">
            <div
              className="w-full h-full"
              dangerouslySetInnerHTML={{ __html: googleMapsEmbedCode }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <h1 className="text-3xl">
          Tämä on demo sivusto, eli ei oikea ravintola!
        </h1>
      </div>
    </section>
  );
};

export default Contact;
