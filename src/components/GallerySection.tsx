const GallerySection = () => {
  // Placeholder award images - replace with actual award photos
  const awards = [
    { id: 1, title: " ", image: "/src/assets/Awards1.jpg" },
    { id: 2, title: " ", image: "/src/assets/Awards2.jpg" },
    { id: 3, title: " ", image: "/src/assets/Awards3.jpg" },
    { id: 4, title: " ", image: "/src/assets/Awards4.jpg" },
    { id: 5, title: " ", image: "/src/assets/Awards5.jpg" },
    { id: 6, title: " ", image: "/src/assets/Awards6.jpg" },
    { id: 7, title: " ", image: "/src/assets/Awards7.jpg" },
    { id: 8, title: " ", image: "/src/assets/Awards8.jpg" },
    { id: 9, title: " ", image: "/src/assets/Awards9.jpg" },
    { id: 10, title: " ", image: "/src/assets/Awards10.jpg" },
  ];

  return (
    <section className="py-16 dark-section relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Awards & <span className="text-blue-700">Recognition</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl sm:max-w-3xl mx-auto px-2">
            Over 50 awards for exceptional performances across 25 years in the industry
          </p>
        </div>

        {/* First Row - Right to Left */}
        <div className="relative overflow-hidden mb-8 sm:mb-10">
          <div className="flex animate-scroll-right-to-left">
            {[...awards, ...awards].map((award, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-3 sm:mx-6 glow-border bg-white/10 backdrop-blur-sm 
                           p-3 sm:p-6 rounded-xl sm:rounded-2xl hover-lift"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-36 h-28 sm:w-64 sm:h-44 object-cover rounded-lg sm:rounded-xl mb-2 sm:mb-4"
                />
                <p className="text-white text-sm sm:text-base text-center font-medium">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left-to-right">
            {[...awards.reverse(), ...awards].map((award, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-3 sm:mx-6 glow-border bg-white/10 backdrop-blur-sm 
                           p-3 sm:p-6 rounded-xl sm:rounded-2xl hover-lift"
              >
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-36 h-28 sm:w-64 sm:h-44 object-cover rounded-lg sm:rounded-xl mb-2 sm:mb-4"
                />
                <p className="text-white text-sm sm:text-base text-center font-medium">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
