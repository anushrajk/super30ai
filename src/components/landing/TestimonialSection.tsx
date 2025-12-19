import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, TrendingUp, ChevronLeft, ChevronRight, Play, Volume2 } from "lucide-react";
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
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=533&fit=crop", name: "John D.", company: "TechCorp", duration: "2:34" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=533&fit=crop", name: "Maria S.", company: "GrowthIQ", duration: "1:45" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=533&fit=crop", name: "Alex R.", company: "ScaleUp", duration: "3:12" },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=533&fit=crop", name: "David K.", company: "NexGen", duration: "2:08" },
];

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

  // Auto-rotate testimonials
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
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-orange-50/30" />
      
      <div className="container mx-auto px-4 relative">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real results from real businesses
          </p>
        </div>

        {/* Text Testimonial Carousel */}
        <div className={`max-w-4xl mx-auto mb-20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-gradient-to-br from-orange-50 via-orange-100/50 to-orange-50 border-orange-200/50 shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden relative group">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-orange-400/10 to-transparent rounded-full blur-3xl" />
            
            <CardContent className="p-8 md:p-12 relative">
              <Quote className="w-14 h-14 text-orange-500 mb-6 opacity-50" />
              
              <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-medium min-h-[100px]">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    {currentTestimonial.initials}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{currentTestimonial.author}</div>
                    <div className="text-muted-foreground">{currentTestimonial.role}</div>
                  </div>
                </div>

                <div className="md:ml-auto flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
              </div>

              {/* Results Badge */}
              <div className="mt-8 pt-8 border-t border-orange-200/50 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-2xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300">
                  <TrendingUp className="w-6 h-6" />
                  <span className="font-bold text-lg">{currentTestimonial.result}</span>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-orange-200 hover:bg-orange-100 hover:border-orange-400"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex 
                          ? 'bg-orange-500 w-6' 
                          : 'bg-orange-200 hover:bg-orange-300'
                      }`}
                    />
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-orange-200 hover:bg-orange-100 hover:border-orange-400"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Testimonials Section */}
        <div className={`text-center mb-8 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Video Stories
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Video Testimonials
          </h3>
          <p className="text-muted-foreground">
            Hear directly from our clients about their AI SEO journey
          </p>
        </div>
        
        <div className={`relative group/carousel transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Left Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollVideos('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Video Grid - Portrait Style */}
          <div 
            ref={videoScrollRef}
            className="flex gap-4 overflow-x-auto pb-4 px-8 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videoTestimonials.map((video) => (
              <div
                key={video.id}
                className="flex-shrink-0 w-[180px] relative rounded-2xl overflow-hidden cursor-pointer group/video snap-start"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
              >
                <div className="aspect-[9/16] relative">
                  <img 
                    src={video.thumbnail} 
                    alt={`${video.name} testimonial`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/video:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${hoveredVideo === video.id ? 'opacity-100' : 'opacity-70'}`} />
                  
                  {/* Play button */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hoveredVideo === video.id ? 'scale-100 opacity-100' : 'scale-90 opacity-70'}`}>
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
                      <Play className="w-6 h-6 text-orange-500 ml-1" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-medium">
                    {video.duration}
                  </div>

                  {/* Controls on hover */}
                  {hoveredVideo === video.id && (
                    <div className="absolute bottom-16 left-3 right-3 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-white/30 rounded-full">
                        <div className="w-0 h-full bg-orange-500 rounded-full" />
                      </div>
                      <Volume2 className="w-4 h-4 text-white" />
                    </div>
                  )}

                  {/* Info */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-sm">{video.name}</p>
                    <p className="text-white/70 text-xs">{video.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollVideos('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 hover:bg-background"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Mobile scroll indicator */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            <div className="w-8 h-1 bg-orange-500 rounded-full" />
            <div className="w-8 h-1 bg-orange-200 rounded-full" />
            <div className="w-8 h-1 bg-orange-200 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
