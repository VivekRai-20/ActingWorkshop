'use client';

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Play, MessageSquare } from "lucide-react";

// Import chat screenshots
// Note: Using public asset paths for Next.js

const TestimonialsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoTestimonials = [
    { name: "Alka Amin", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100098/AlkaAmin_rwmhop.mov" },
    { name: "Alka Kaushal", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100145/AlkaKaushal_jitryi.mov" },
    { name: "Amardeep Jha", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100188/AmardeepJha_a5ewsz.mov" },
    { name: "Ashmita Sharma", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100108/AshmitaSharma_nfhdvu.mov" },
    { name: "Bhuvnesh Maan", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100218/Bhuvneshmaan_wlodil.mov" },
    { name: "Gyaan Prakash", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100109/GyaanPrakash_ghz7o1.mov" },
    { name: "Paritosh Tripathi", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100207/Paritoshtripathi_pbo5yp.mov" },
    { name: "Rajesh Sharma", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100134/RajeshSharma_l8lumr.mov" },
    { name: "Revti Pillai", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100197/Revtipillai_jwsedw.mov" },
    { name: "Rohit Chaudhary", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100186/Rohitchaudhary_asex7h.mov" },
    { name: "Ruhana Khanna", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100196/RuhanaKhanna_ermnuh.mov" },
    { name: "Sanjay Swaraj", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100155/Sanjayswaraj_q1ug2z.mov" },
    { name: "Sheeba Chadda", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100154/Sheebachadda_ginagf.mov" },
    { name: "Shreya Jha", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100204/Shreyajha_biznll.mov" },
    { name: "Shrikant Verma", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100439/ShrikantVerma_sy0spd.mov" },
    { name: "Sunita Rajwar", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100162/SunitaRAJWAR_ckolum.mov" },
    { name: "Dayanand Shetty", file: "https://res.cloudinary.com/dm5syomje/video/upload/v1757100128/DayanandShetty_xtwo5t.mp4" },
  ];

  // Function to generate thumbnail URL from Cloudinary video URL
  const generateThumbnailUrl = (videoUrl: string) => {
    try {
      // Extract the public ID (filename without extension and version)
      const urlParts = videoUrl.split('/');
      const filename = urlParts[urlParts.length - 1];
      const publicId = filename.split('.')[0]; // Remove extension
      
      // Create thumbnail URL
      const baseUrl = videoUrl.substring(0, videoUrl.indexOf('/video/upload/') + 14);
      return `${baseUrl}f_auto,q_auto,w_600,h_400,c_fill/${publicId}.jpg`;
    } catch (error) {
      // Fallback to empty poster if URL generation fails
      return "";
    }
  };

  const chatTestimonials = [
    "/assets/testimonials/chat1.jpg",
    "/assets/testimonials/chat2.jpg",
    "/assets/testimonials/chat3.jpg",
    "/assets/testimonials/chat4.jpg",
    
  ];

  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What <span className="text-blue-500">Actors</span> Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from real actors about Praveen Hingonia
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative group cursor-pointer bg-neutral-900 border border-gray-700 overflow-hidden rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
              onClick={() => setSelectedVideo(testimonial.file)}
            >
              {/* Video with attributes optimized for all devices including iOS */}
              <div className="aspect-video w-full overflow-hidden">
                <video
                  src={testimonial.file}
                  className="w-full h-full object-cover"
                  preload="metadata"
                  playsInline
                  muted
                  loop
                  poster={generateThumbnailUrl(testimonial.file)}
                />
              </div>
              {/* Play icon overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-blue-500 rounded-full p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-4 text-center text-white font-semibold">
                {testimonial.name}
              </div>
            </Card>
          ))}
        </div>

        {/* Chat Screenshots Section */}
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="h-6 w-6 text-blue-500 mr-2" />
            <h3 className="text-2xl font-bold text-white">Chat Testimonials</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {chatTestimonials.map((chat, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-neutral-900 border border-gray-700 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={chat}
                    alt={`Chat testimonial ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl bg-neutral-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Video inside container */}
            <div className="aspect-video w-full">
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
                poster={selectedVideo ? generateThumbnailUrl(selectedVideo) : ""}
              >
                <source src={selectedVideo} type="video/mp4" />
              </video>
            </div>

            {/* Close button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 bg-white/10 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-md hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;