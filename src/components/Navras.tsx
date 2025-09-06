// src/components/Navras.jsx
import React from "react";
import n1 from "../assets/navras/n1.png";
import n2 from "../assets/navras/n2.png";
import n3 from "../assets/navras/n3.png";
import n4 from "../assets/navras/n4.png";
import n5 from "../assets/navras/n5.png";
import n6 from "../assets/navras/n6.png";
import n7 from "../assets/navras/n7.png";
import n8 from "../assets/navras/n8.png";
import n9 from "../assets/navras/n9.png";

const images = [n1, n2, n3, n4, n5, n6, n7, n8, n9];

const Navras = () => {
  return (
    <div className="w-full bg-[#0a0a0a] py-12">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center mb-4 text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
        Navras: Emotions in Motion
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-center text-white/90 mb-10 font-medium">
        9 challenging roles played by Praveen Hingonia
      </p>

      {/* Scrolling Container */}
      <div className="relative overflow-hidden">
        <div className="flex min-w-max animate-marquee whitespace-nowrap">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Navras ${index + 1}`}
              className="h-32 sm:h-40 md:h-52 lg:h-60 w-auto mx-6 rounded-xl 
                         shadow-[0_0_20px_rgba(59,130,246,0.9)] 
                         animate-pulse hover:scale-105 
                         transition-transform duration-300"
            />
          ))}

          {/* Duplicate set for infinite scroll */}
          {images.map((img, index) => (
            <img
              key={`duplicate-${index}`}
              src={img}
              alt={`Navras duplicate ${index + 1}`}
              className="h-32 sm:h-40 md:h-52 lg:h-60 w-auto mx-6 rounded-xl 
                         shadow-[0_0_20px_rgba(59,130,246,0.9)] 
                         animate-pulse hover:scale-105 
                         transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navras;
