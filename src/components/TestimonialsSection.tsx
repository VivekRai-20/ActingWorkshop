import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Play, MessageSquare } from "lucide-react";

// Import chat screenshots
import chat1 from "@/assets/testimonials/chat1.jpg";
import chat2 from "@/assets/testimonials/chat2.jpg";
import chat3 from "@/assets/testimonials/chat3.jpg";
import chat4 from "@/assets/testimonials/chat4.jpg";
import chat5 from "@/assets/testimonials/chat5.jpg";
import chat6 from "@/assets/testimonials/chat6.jpg";
import chat7 from "@/assets/testimonials/chat7.jpg";
import chat8 from "@/assets/testimonials/chat8.jpg";
import chat9 from "@/assets/testimonials/chat9.jpg";
import chat10 from "@/assets/testimonials/chat10.jpg";

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

  const chatTestimonials = [
    chat1, chat2, chat3, chat4, chat5, chat6, 
  ];

  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            What <span className="text-blue-500">Actors</span> Say
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hear from real actors about Praveen Hingonia
          </p>
        </div>

        {/* Videos Grid */}
<div className="grid md:grid-cols-3 gap-8 mb-16">
  {videoTestimonials.map((testimonial, index) => (
    <Card
      key={index}
      className="relative group cursor-pointer bg-neutral-900 border border-gray-700 overflow-hidden"
      onClick={() => setSelectedVideo(testimonial.file)}
    >
      <video
        src={testimonial.file}
        className="aspect-video w-full object-cover"
        preload="metadata"
      />
      {/* Play icon overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
        <Play className="h-14 w-14 text-white drop-shadow-lg" />
      </div>
      <div className="p-4 text-center text-white font-semibold">
        {testimonial.name}
      </div>
    </Card>
  ))}
</div>


        {/* Chat Screenshots Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {chatTestimonials.map((chat, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-neutral-900 border border-gray-700"
            >
              <img
                src={chat}
                alt={`Chat testimonial ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </Card>
          ))}
        </div>
      </div>

{/* Video Modal */}
{selectedVideo && (
  <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
    <div className="relative w-full max-w-3xl bg-black rounded-lg overflow-hidden shadow-xl">
      {/* Video inside container */}
      <video
        controls
        autoPlay
        className="w-full max-h-[80vh] mx-auto block object-contain"
      >
        <source src={selectedVideo} type="video/mp4" />
      </video>

      {/* Close button */}
      <button
        onClick={() => setSelectedVideo(null)}
        className="absolute top-3 right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md hover:bg-gray-200"
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
