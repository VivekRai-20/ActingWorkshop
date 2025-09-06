const VideoSection = () => {
  const videos = [
    {
      id: 1,
      title: "Acting Workshop Preview",
      embedUrl: "https://www.youtube.com/embed/jSRBK1ZS4Ko"
    },
    {
      id: 2,
      title: "Character Decoding Method",
      embedUrl: "https://www.youtube.com/embed/0Eh35fv79SE"
    }
  ];

  return (
    <section className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6">
            Watch & <span className="text-blue-700">Learn</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Get a glimpse of what you'll learn in this transformative acting workshop
          </p>
        </div>

        {/* Videos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="glow-border bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-video">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-white/80 text-sm md:text-lg">
                  {video.id === 1 
                    ? "See how our unique Character Decoding method transforms aspiring actors"
                    : "Learn the secrets behind natural, authentic acting performances"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
