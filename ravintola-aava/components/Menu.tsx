import React from 'react';
import Link from 'next/link';
import { menuData } from '../data/menuData'; // Adjust the import path as needed

const Menu = () => {
  return (
    <section id="Menu" className="relative py-20 md:py-32 bg-off-navy">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/menu-background.png')" }}
      >
        <div className="absolute inset-0 bg-rough opacity-80"></div>
      </div>

      {/* Menu Content */}
      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-pale/10 backdrop-blur-md p-8 md:p-12 rounded-lg border border-gold/20">
          
          <h2 className="text-center font-playfair text-5xl md:text-6xl text-pale italic mb-4">
            Meidän Menu
          </h2>
          <p className="text-center text-pale/80 font-poppins mb-12">
            Makujen sinfonia, intohimolla luotu.
          </p>

          {/* Dynamic Menu Sections */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {menuData.map((category, index) => (
              <div key={index}>
                <h3 className="font-playfair text-3xl text-gold mb-4">{category.category}</h3>
                <ul className="space-y-4 text-pale">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex flex-col sm:flex-row justify-between border-b border-gold/20 pb-2">
                      <div>
                        <p className="font-poppins">{item.name}</p>
                        {item.description && (
                          <p className="font-poppins text-sm text-pale/70 pr-2">{item.description}</p>
                        )}
                      </div>
                      <p className="font-poppins text-gold font-semibold mt-1 sm:mt-0">${item.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Download Menu Button */}
          <div className="text-center mt-12">
            <Link 
              href="/restaurant-menu.pdf" // Update this path to your actual PDF file
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-3 text-lg font-poppins bg-transparent text-gold border border-gold hover:bg-gold hover:text-pale transition-colors duration-300"
            >
              Lataa Menu PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;