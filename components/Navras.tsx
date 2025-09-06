// src/components/Navras.jsx
import React from "react";
// Note: Using public asset paths for Next.js

const images = [
  "/assets/navras/n1.png",
  "/assets/navras/n2.png",
  "/assets/navras/n3.png",
  "/assets/navras/n4.png",
  "/assets/navras/n5.png",
  "/assets/navras/n6.png",
  "/assets/navras/n7.png",
  "/assets/navras/n8.png",
  "/assets/navras/n9.png"
];

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
