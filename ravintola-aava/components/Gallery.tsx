import React from "react";
import Image from "next/image";
import { galleryImages } from "../data/galleryData"; 

const Gallery = () => {
  return (
    <section id="Galleria" className="bg-off-navy py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl italic text-pale">
            Visuaalinen harmonia
          </h2>
          <p className="font-poppins text-lg text-pale/80 mt-2">
            Elämys silmille, johdatus makujen maailmaan.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4 md:grid-flow-dense">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group ${
                image.colSpan || "col-span-1"
              } ${image.rowSpan || "row-span-1"}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
