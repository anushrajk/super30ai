import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, ChevronLeft, ChevronRight, Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "The Super 30 helped us go from invisible in AI search to being recommended by ChatGPT for our core services. Our qualified leads increased by 340%.",
    author: "Sarah Chen",
    role: "CEO, TechFlow SaaS",
    initials: "SC",
    result: "340% more leads"
  },
  {
    quote: "Finally an SEO agency that understands the AI-first future. Our organic revenue doubled in 6 months with their strategic approach.",
    author: "Rahul Sharma",
    role: "Founder, DataSync",
    initials: "RS",
    result: "2x organic revenue"
  },
  {
    quote: "Their AI visibility tracking showed us exactly where we were losing to competitors. Now we dominate those conversations.",
    author: "Priya Patel",
    role: "CMO, CloudNine",
    initials: "PP",
    result: "Top AI recommendations"
  }
];

const videoTestimonials = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=533&fit=crop", video: "https://videos.pexels.com/video-files/3195440/3195440-uhd_2560_1440_25fps.mp4", name: "John D.", company: "TechCorp", duration: "2:34" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=533&fit=crop", video: "https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_24fps.mp4", name: "Maria S.", company: "GrowthIQ", duration: "1:45" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=533&fit=crop", video: "https://videos.pexels.com/video-files/4065924/4065924-uhd_2560_1440_24fps.mp4", name: "Alex R.", company: "ScaleUp", duration: "3:12" },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=533&fit=crop", video: "https://videos.pexels.com/video-files/4427619/4427619-uhd_2560_1440_25fps.mp4", name: "David K.", company: "NexGen", duration: "2:08" },
  { id: 5, thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=533&fit=crop", video: "https://videos.pexels.com/video-files/3195440/3195440-uhd_2560_1440_25fps.mp4", name: "Emily T.", company: "CloudFirst", duration: "2:15" },
  { id: 6, thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=533&fit=crop", video: "https://videos.pexels.com/video-files/3252118/3252118-uhd_2560_1440_24fps.mp4", name: "Michael P.", company: "DataHub", duration: "1:58" },
];

interface VideoCardProps {
  video: typeof videoTestimonials[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  index: number;
}

const VideoCard = ({ video, isHovered, onHover, onLeave, index }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      className="flex-shrink-0 w-[140px] sm:w-[180px] relative rounded-2xl overflow-hidden cursor-pointer group/video snap-start transition-all duration-500 hover:-translate-y-3 hover:scale-105"
      style={{ 
        animationDelay: `${index * 100}ms`,
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(255, 107, 0, 0.25), 0 0 0 1px rgba(255, 107, 0, 0.1)' 
          : '0 10px 40px -10px rgba(0, 0, 0, 0.5)'
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="aspect-[9/16] relative bg-black/50">
        <img 
          src={video.thumbnail} 
          alt={`${video.name} testimonial`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${isHovered ? 'opacity-0 scale-110' : 'opacity-100 scale-100'}`}
        />
        
        <video
          ref={videoRef}
          src={video.video}
          muted={isMuted}
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-60' : 'opacity-80'}`} />
        
        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-white/20 group-hover/video:scale-110 transition-transform">
            <Play className="w-5 h-5 text-white ml-0.5" />
          </div>
        </div>

        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-xs text-white font-medium border border-white/10">
          {video.duration}
        </div>

        {isHovered && (
          <button
            onClick={toggleMute}
            className="absolute top-2 left-2 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/10"
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
        )}

        {isHovered && (
          <div className="absolute bottom-14 left-2 right-2 flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <div className="w-1/3 h-full bg-brand rounded-full animate-pulse" />
            </div>
          </div>
        )}

        <div className="absolute bottom-2 left-2 right-2 transition-transform duration-300 group-hover/video:translate-y-0">
          <p className="text-white font-bold text-xs">{video.name}</p>
          <p className="text-white/60 text-xs">{video.company}</p>
        </div>
      </div>
    </div>
  );
};

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const videoScrollRef = useRef<HTMLDivElement>(null);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollVideos = (direction: 'left' | 'right') => {
    if (videoScrollRef.current) {
      const scrollAmount = 200;
      videoScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      
      {/* Animated Glowing Orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-brand/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-400">
            Real results from real businesses
          </p>
        </div>

        {/* Text Testimonial Carousel */}
        <div className={`max-w-5xl mx-auto mb-16 md:mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-white/[0.03] backdrop-blur-xl border-white/10 shadow-2xl shadow-black/40 overflow-hidden relative group hover:border-brand/30 transition-all duration-500">
            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand/5 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <CardContent className="p-6 sm:p-8 md:p-12 relative">
              {/* Quote Icon with Hover Effect */}
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                <Quote className="w-12 h-12 md:w-14 md:h-14 text-brand/50 group-hover:text-brand transition-colors duration-500" />
              </div>
              
              <blockquote className="text-xl md:text-2xl lg:text-3xl text-white mb-8 leading-relaxed font-medium min-h-[100px]">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-brand to-orange-600 rounded-2xl flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg md:text-xl">{currentTestimonial.author}</div>
                    <div className="text-gray-400 text-sm md:text-base">{currentTestimonial.role}</div>
                  </div>
                </div>

                {/* Stars with Staggered Animation */}
                <div className="md:ml-auto flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <Star 
                      key={star} 
                      className="w-5 h-5 fill-brand text-brand transition-all duration-300 hover:scale-125"
                      style={{ 
                        animationDelay: `${i * 100}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'scale(1)' : 'scale(0)'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Result Badge */}
              <div className="mt-8 pt-8 border-t border-white/10 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand to-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 hover:-translate-y-1 transition-all duration-500 cursor-default">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-bold text-lg">{currentTestimonial.result}</span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand/50 text-white h-10 w-10 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === currentIndex 
                          ? 'bg-brand w-8' 
                          : 'bg-white/20 w-2 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand/50 text-white h-10 w-10 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Testimonials Section */}
        <div className={`text-center mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-4">
            <Play className="w-3 h-3" />
            Video Stories
          </span>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Video Testimonials
          </h3>
          <p className="text-gray-400 text-sm md:text-base hidden sm:block">
            Hover to preview • Click to watch full video
          </p>
          <p className="text-gray-400 text-sm md:text-base sm:hidden">
            Tap to play • Swipe to browse
          </p>
        </div>
        
        {/* Video Carousel with Edge Fading */}
        <div className={`relative group/carousel transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollVideos('left')}
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/5 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/10 hover:border-brand/50 hover:scale-110 h-10 w-10 text-white"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div 
            ref={videoScrollRef}
            className="flex gap-4 overflow-x-auto pb-4 px-8 sm:px-12 snap-x snap-mandatory custom-scrollbar sm:justify-center"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {videoTestimonials.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                isHovered={hoveredVideo === video.id}
                onHover={() => setHoveredVideo(video.id)}
                onLeave={() => setHoveredVideo(null)}
                index={index}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollVideos('right')}
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/5 backdrop-blur-md rounded-full border border-white/10 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/10 hover:border-brand/50 hover:scale-110 h-10 w-10 text-white"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
