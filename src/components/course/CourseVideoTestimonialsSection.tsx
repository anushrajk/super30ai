import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoTestimonial {
  id: number;
  thumbnail: string;
  video: string;
  name: string;
  role: string;
  transformation: string;
  duration: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    name: "Rahul Sharma",
    role: "SEO Lead at TCS",
    transformation: "₹12L → ₹28L",
    duration: "2:34"
  },
  {
    id: 2,
    thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4",
    name: "Priya Verma",
    role: "Founder, GrowthFirst Agency",
    transformation: "Employee → Agency Owner",
    duration: "1:58"
  },
  {
    id: 3,
    thumbnail: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://videos.pexels.com/video-files/3130284/3130284-uhd_2560_1440_30fps.mp4",
    name: "Amit Patel",
    role: "Digital Lead at Flipkart",
    transformation: "₹8L → ₹22L",
    duration: "2:15"
  },
  {
    id: 4,
    thumbnail: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4",
    name: "Sneha Gupta",
    role: "Head of SEO at Zomato",
    transformation: "₹10L → ₹32L",
    duration: "2:42"
  },
  {
    id: 5,
    thumbnail: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://videos.pexels.com/video-files/3130182/3130182-uhd_2560_1440_30fps.mp4",
    name: "Vikram Singh",
    role: "SEO Consultant, Freelance",
    transformation: "₹6L → ₹45L/year",
    duration: "1:48"
  },
  {
    id: 6,
    thumbnail: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://videos.pexels.com/video-files/3129577/3129577-uhd_2560_1440_30fps.mp4",
    name: "Ananya Krishnan",
    role: "Growth Manager at Swiggy",
    transformation: "₹7L → ₹18L",
    duration: "2:21"
  },
  {
    id: 7,
    thumbnail: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://videos.pexels.com/video-files/3130088/3130088-uhd_2560_1440_30fps.mp4",
    name: "Deepak Mehta",
    role: "Co-founder, RankBoost",
    transformation: "Job → ₹2Cr Agency",
    duration: "3:05"
  },
  {
    id: 8,
    thumbnail: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600",
    video: "https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4",
    name: "Kavita Reddy",
    role: "SEO Director at OYO",
    transformation: "₹15L → ₹40L",
    duration: "2:18"
  }
];

interface VideoCardProps {
  testimonial: VideoTestimonial;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

const VideoCard = ({ testimonial, isHovered, onHover }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleMouseEnter = () => {
    onHover(testimonial.id);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    onHover(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div
      className="relative flex-shrink-0 w-[280px] md:w-[320px] rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-[hsl(var(--brand-orange))]/50 hover:shadow-lg group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video/Thumbnail Container */}
      <div className="relative aspect-[9/12] overflow-hidden">
        {/* Thumbnail */}
        <img
          src={testimonial.thumbnail}
          alt={testimonial.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />
        
        {/* Video */}
        <video
          ref={videoRef}
          src={testimonial.video}
          muted={isMuted}
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Play Icon Overlay */}
        {!isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-14 h-14 rounded-full bg-[hsl(var(--brand-orange))]/90 flex items-center justify-center">
              <Play className="w-6 h-6 text-white fill-white ml-1" />
            </div>
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs text-white font-medium">
          {testimonial.duration}
        </div>

        {/* Mute Toggle on Hover */}
        {isHovered && (
          <button
            onClick={toggleMute}
            className="absolute bottom-3 left-3 p-2 bg-black/70 rounded-full transition-colors hover:bg-black/90"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-white" />
            ) : (
              <Volume2 className="w-4 h-4 text-white" />
            )}
          </button>
        )}

        {/* Gradient Overlay for Text */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Info Section */}
      <div className="p-4 bg-white/5">
        <h4 className="font-semibold text-white">{testimonial.name}</h4>
        <p className="text-sm text-gray-400">{testimonial.role}</p>
        <div className="mt-2 inline-block px-3 py-1 bg-[hsl(var(--brand-orange))]/20 rounded-full">
          <span className="text-sm font-medium text-[hsl(var(--brand-orange))]">{testimonial.transformation}</span>
        </div>
      </div>
    </div>
  );
};

export const CourseVideoTestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[hsl(var(--brand-orange))]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[hsl(var(--brand-orange))]/20 rounded-full text-[hsl(var(--brand-orange))] font-medium text-sm mb-4 border border-[hsl(var(--brand-orange))]/30">
            Video Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hear From Our Alumni
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real stories from real graduates who transformed their careers with The Super 30
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-8 md:px-16 py-4 scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {videoTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="snap-center">
                <VideoCard
                  testimonial={testimonial}
                  isHovered={hoveredVideo === testimonial.id}
                  onHover={setHoveredVideo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
