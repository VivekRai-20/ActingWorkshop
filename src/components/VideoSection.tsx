import { useState } from "react";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: "Acting Workshop Preview",
      url: "https://youtu.be/jSRBK1ZS4Ko?si=QzvTAMbPvzj4oHCI",
      embedUrl: "https://www.youtube.com/embed/jSRBK1ZS4Ko",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Character Decoding Method",
      url: "https://youtu.be/0Eh35fv79SE?si=CAcmPVP_kQhagB1p",
      embedUrl: "https://www.youtube.com/embed/0Eh35fv79SE",
      thumbnail: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 dark-section relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Watch & <span className="text-navy-light">Learn</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get a glimpse of what you'll learn in this transformative acting workshop
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="glow-border bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-video">
                {activeVideo === video.id ? (
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full bg-navy-primary/30 flex items-center justify-center cursor-pointer group"
                       onClick={() => setActiveVideo(video.id)}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="relative z-10 text-center">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                        <Play className="h-12 w-12 text-white" />
                      </div>
                      <p className="text-white text-lg font-semibold">{video.title}</p>
                      <p className="text-navy-light text-sm mt-2">Click to play</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-white/80 text-sm">
                  {video.id === 1 
                    ? "See how our unique Character Decoding method transforms aspiring actors"
                    : "Learn the secrets behind natural, authentic acting performances"
                  }
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