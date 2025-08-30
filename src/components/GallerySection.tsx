const GallerySection = () => {
  // Placeholder award images - replace with actual award photos
  const awards = [
    { id: 1, title: "Best Actor Award 2023", image: "/placeholder.svg" },
    { id: 2, title: "Excellence in Theatre 2022", image: "/placeholder.svg" },
    { id: 3, title: "Director's Choice Award 2021", image: "/placeholder.svg" },
    { id: 4, title: "Audience Favorite 2020", image: "/placeholder.svg" },
    { id: 5, title: "Critics Choice Award 2019", image: "/placeholder.svg" },
    { id: 6, title: "Lifetime Achievement 2018", image: "/placeholder.svg" },
    { id: 7, title: "Outstanding Performance 2017", image: "/placeholder.svg" },
    { id: 8, title: "Rising Star Award 2016", image: "/placeholder.svg" },
  ];

  return (
    <section className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Awards & <span className="text-navy-light">Recognition</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Over 50 awards for exceptional performances across 25 years in the industry
          </p>
        </div>

        {/* First Row - Moving Right to Left */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-scroll-right-to-left">
            {[...awards, ...awards].map((award, index) => (
              <div
                key={`row1-${index}`}
                className="flex-shrink-0 mx-4 glow-border bg-white/10 backdrop-blur-sm p-4 rounded-xl hover-lift"
              >
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-48 h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-white text-sm text-center font-medium">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left-to-right">
            {[...awards.reverse(), ...awards].map((award, index) => (
              <div
                key={`row2-${index}`}
                className="flex-shrink-0 mx-4 glow-border bg-white/10 backdrop-blur-sm p-4 rounded-xl hover-lift"
              >
                <img 
                  src={award.image} 
                  alt={award.title}
                  className="w-48 h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-white text-sm text-center font-medium">
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