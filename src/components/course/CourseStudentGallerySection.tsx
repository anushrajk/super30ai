import { useRef, useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import alumni images for variety
import priyaSharma from "@/assets/alumni/priya-sharma.jpg";
import rahulVerma from "@/assets/alumni/rahul-verma.jpg";
import ananyaIyer from "@/assets/alumni/ananya-iyer.jpg";
import vikashKumar from "@/assets/alumni/vikash-kumar.jpg";
import arjunNair from "@/assets/alumni/arjun-nair.jpg";
import snehaPatel from "@/assets/alumni/sneha-patel.jpg";
import deepakKumar from "@/assets/alumni/deepak-kumar.jpg";
import arjunVerma from "@/assets/alumni/arjun-verma.jpg";
import rahulDesai from "@/assets/alumni/rahul-desai.jpg";

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  size: 'small' | 'medium' | 'large';
  caption: string;
  name?: string;
}

const galleryItems: GalleryItem[] = [
  { id: 1, type: 'image', src: priyaSharma, size: 'small', caption: 'Workshop Day 1', name: 'Priya S.' },
  { id: 2, type: 'video', src: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4', thumbnail: rahulVerma, size: 'large', caption: 'Live Project Review' },
  { id: 3, type: 'image', src: ananyaIyer, size: 'medium', caption: 'Group Discussion', name: 'Ananya I.' },
  { id: 4, type: 'image', src: vikashKumar, size: 'small', caption: 'Certification Day', name: 'Vikash K.' },
  { id: 5, type: 'video', src: 'https://videos.pexels.com/video-files/5927673/5927673-uhd_2732_1440_25fps.mp4', thumbnail: arjunNair, size: 'small', caption: 'Success Story' },
  { id: 6, type: 'image', src: snehaPatel, size: 'large', caption: 'Mumbai Cohort 2024', name: 'Sneha P.' },
  { id: 7, type: 'image', src: deepakKumar, size: 'small', caption: '1:1 Mentoring', name: 'Deepak K.' },
  { id: 8, type: 'video', src: 'https://videos.pexels.com/video-files/7989582/7989582-uhd_2560_1440_25fps.mp4', thumbnail: arjunVerma, size: 'medium', caption: 'First Placement Call' },
  { id: 9, type: 'image', src: rahulDesai, size: 'small', caption: 'Weekend Workshop', name: 'Rahul D.' },
  { id: 10, type: 'image', src: priyaSharma, size: 'medium', caption: 'Team Collaboration' },
  { id: 11, type: 'video', src: 'https://videos.pexels.com/video-files/4065388/4065388-uhd_2560_1440_30fps.mp4', thumbnail: vikashKumar, size: 'small', caption: 'Student Testimonial' },
  { id: 12, type: 'image', src: ananyaIyer, size: 'large', caption: 'Graduation Ceremony' },
  { id: 13, type: 'image', src: arjunNair, size: 'small', caption: 'Hackathon Winners', name: 'Arjun N.' },
  { id: 14, type: 'video', src: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4', thumbnail: snehaPatel, size: 'medium', caption: 'Career Transition' },
];

interface GalleryTileProps {
  item: GalleryItem;
  isHovered: boolean;
  onHover: (id: number | null) => void;
}

const GalleryTile = ({ item, isHovered, onHover }: GalleryTileProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const sizeClasses = {
    small: 'w-48 h-48 md:w-56 md:h-56',
    medium: 'w-56 h-48 md:w-72 md:h-56',
    large: 'w-72 h-48 md:w-96 md:h-56',
  };

  const handleMouseEnter = () => {
    onHover(item.id);
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    onHover(null);
    if (item.type === 'video' && videoRef.current) {
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
      className={`relative ${sizeClasses[item.size]} flex-shrink-0 rounded-xl overflow-hidden group cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image/Thumbnail */}
      <img
        src={item.type === 'video' ? item.thumbnail : item.src}
        alt={item.caption}
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
      />

      {/* Video (hidden until hover) */}
      {item.type === 'video' && (
        <video
          ref={videoRef}
          src={item.src}
          muted={isMuted}
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Play icon for videos (when not hovering) */}
      {item.type === 'video' && !isHovered && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <Play className="w-5 h-5 text-primary fill-primary ml-0.5" />
          </div>
        </div>
      )}

      {/* Mute toggle for videos */}
      {item.type === 'video' && isHovered && (
        <button
          onClick={toggleMute}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center z-10 hover:bg-background transition-colors"
        >
          {isMuted ? (
            <VolumeX className="w-4 h-4 text-foreground" />
          ) : (
            <Volume2 className="w-4 h-4 text-foreground" />
          )}
        </button>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

      {/* Caption & Name */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        {item.name && (
          <p className="text-xs font-medium text-primary mb-0.5">{item.name}</p>
        )}
        <p className="text-sm font-medium text-foreground">{item.caption}</p>
      </div>

      {/* Hover border effect */}
      <div className={`absolute inset-0 rounded-xl border-2 transition-colors duration-300 ${
        isHovered ? 'border-primary/50' : 'border-transparent'
      }`} />
    </div>
  );
};

export const CourseStudentGallerySection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate items for seamless loop
  const duplicatedItems = [...galleryItems, ...galleryItems];

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-muted/30 overflow-hidden"
    >
      {/* Section Header */}
      <div className={`container mx-auto px-4 mb-12 text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
          Student Stories
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          They Were Exactly Where You Are Today
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Real students, real moments, real transformations — see the journey through their eyes
        </p>
      </div>

      {/* Mosaic Gallery Marquee */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Row 1 - scrolls left */}
        <div 
          className={`flex gap-4 mb-4 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: isPaused ? 'none' : 'scrollLeft 60s linear infinite',
          }}
        >
          {duplicatedItems.filter((_, i) => i % 2 === 0).map((item, index) => (
            <GalleryTile
              key={`row1-${item.id}-${index}`}
              item={item}
              isHovered={hoveredId === item.id}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Row 2 - scrolls right */}
        <div 
          className={`flex gap-4 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            animation: isPaused ? 'none' : 'scrollRight 55s linear infinite',
          }}
        >
          {duplicatedItems.filter((_, i) => i % 2 === 1).map((item, index) => (
            <GalleryTile
              key={`row2-${item.id}-${index}`}
              item={item}
              isHovered={hoveredId === item.id}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};
