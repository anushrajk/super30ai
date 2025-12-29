import { useRef, useState, useEffect, useCallback, RefObject } from "react";
import { Play, Volume2, VolumeX, X, ChevronLeft, ChevronRight, Pause, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import gallery images
import studentsStudying from "@/assets/gallery/students-studying.jpg";
import studentsProject from "@/assets/gallery/students-project.jpg";
import studentsGroupPhoto from "@/assets/gallery/students-group-photo.jpg";
import studentsSeminar from "@/assets/gallery/students-seminar.jpg";
import campusAmbassadors from "@/assets/gallery/campus-ambassadors.jpg";
import graduationCeremony from "@/assets/gallery/graduation-ceremony.jpg";
import studentsSports from "@/assets/gallery/students-sports.jpg";
import studentsHackathon from "@/assets/gallery/students-hackathon.jpg";

// Import alumni images for variety
import priyaSharma from "@/assets/alumni/priya-sharma.jpg";
import rahulVerma from "@/assets/alumni/rahul-verma.jpg";
import ananyaIyer from "@/assets/alumni/ananya-iyer.jpg";
import vikashKumar from "@/assets/alumni/vikash-kumar.jpg";

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
  { id: 1, type: 'image', src: studentsStudying, size: 'large', caption: 'Study Session' },
  { id: 2, type: 'video', src: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4', thumbnail: studentsProject, size: 'medium', caption: 'Live Project Review' },
  { id: 3, type: 'image', src: studentsGroupPhoto, size: 'large', caption: 'Batch 2024 Team' },
  { id: 4, type: 'image', src: studentsSeminar, size: 'medium', caption: 'Industry Seminar' },
  { id: 5, type: 'video', src: 'https://videos.pexels.com/video-files/5927673/5927673-uhd_2732_1440_25fps.mp4', thumbnail: priyaSharma, size: 'small', caption: 'Success Story', name: 'Priya S.' },
  { id: 6, type: 'image', src: campusAmbassadors, size: 'medium', caption: 'Campus Ambassadors' },
  { id: 7, type: 'image', src: graduationCeremony, size: 'large', caption: 'Graduation Day 2024' },
  { id: 8, type: 'video', src: 'https://videos.pexels.com/video-files/7989582/7989582-uhd_2560_1440_25fps.mp4', thumbnail: rahulVerma, size: 'small', caption: 'Placement Call', name: 'Rahul V.' },
  { id: 9, type: 'image', src: studentsSports, size: 'medium', caption: 'Sports Day' },
  { id: 10, type: 'image', src: studentsHackathon, size: 'large', caption: 'Hackathon 2024' },
  { id: 11, type: 'video', src: 'https://videos.pexels.com/video-files/4065388/4065388-uhd_2560_1440_30fps.mp4', thumbnail: vikashKumar, size: 'small', caption: 'My Journey', name: 'Vikash K.' },
  { id: 12, type: 'image', src: studentsProject, size: 'medium', caption: 'Team Collaboration' },
  { id: 13, type: 'image', src: ananyaIyer, size: 'small', caption: 'Mentoring Session', name: 'Ananya I.' },
  { id: 14, type: 'video', src: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4', thumbnail: studentsGroupPhoto, size: 'medium', caption: 'Alumni Meetup' },
];

interface LightboxProps {
  item: GalleryItem;
  currentIndex: number;
  totalItems: number;
  allItems: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (index: number) => void;
}

const Lightbox = ({ item, currentIndex, totalItems, allItems, onClose, onPrev, onNext, onGoTo }: LightboxProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Auto-play video when lightbox opens
  useEffect(() => {
    setIsLoading(true);
    if (item.type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [item]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (diff > 50) onNext();
    if (diff < -50) onPrev();
    setTouchStart(null);
  };

  const handleMediaLoad = () => {
    setIsLoading(false);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Counter indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-muted/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground z-50">
        {currentIndex + 1} / {totalItems}
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-muted/80 backdrop-blur-sm flex items-center justify-center hover:bg-muted transition-colors"
      >
        <X className="w-6 h-6 text-foreground" />
      </button>

      {/* Previous button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full bg-muted/80 backdrop-blur-sm flex items-center justify-center hover:bg-muted transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full bg-muted/80 backdrop-blur-sm flex items-center justify-center hover:bg-muted transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      {/* Content */}
      <div 
        className="relative max-w-5xl max-h-[70vh] w-full mx-4 md:mx-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
          </div>
        )}

        {item.type === 'image' ? (
          <img
            src={item.src}
            alt={item.caption}
            className={`w-full h-auto max-h-[60vh] object-contain rounded-xl transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
            onLoad={handleMediaLoad}
          />
        ) : (
          <div className="relative">
            <video
              ref={videoRef}
              src={item.src}
              muted={isMuted}
              controls
              loop
              playsInline
              className={`w-full h-auto max-h-[60vh] object-contain rounded-xl transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoadedData={handleMediaLoad}
            />
            {/* Mute toggle */}
            <button
              onClick={() => {
                setIsMuted(!isMuted);
                if (videoRef.current) videoRef.current.muted = !isMuted;
              }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-foreground" />
              ) : (
                <Volume2 className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        )}

        {/* Caption */}
        <div className="mt-4 text-center">
          {item.name && (
            <p className="text-sm font-medium text-primary mb-1">{item.name}</p>
          )}
          <p className="text-lg font-medium text-foreground">{item.caption}</p>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 overflow-x-auto max-w-[90%] md:max-w-[70%] p-2 bg-muted/50 backdrop-blur-sm rounded-lg scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {allItems.map((thumbItem, idx) => (
          <button
            key={thumbItem.id}
            onClick={() => onGoTo(idx)}
            className={`w-12 h-12 md:w-14 md:h-14 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
              idx === currentIndex 
                ? 'border-primary scale-110 shadow-lg' 
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img 
              src={thumbItem.type === 'video' ? thumbItem.thumbnail : thumbItem.src} 
              alt={thumbItem.caption}
              className="w-full h-full object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  );
};

interface GalleryTileProps {
  item: GalleryItem;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  onClick: () => void;
}

const GalleryTile = ({ item, isHovered, onHover, onClick }: GalleryTileProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const sizeClasses = {
    small: 'w-56 h-56 md:w-64 md:h-64',
    medium: 'w-64 h-56 md:w-80 md:h-64',
    large: 'w-80 h-56 md:w-[26rem] md:h-64',
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
      onClick={onClick}
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Caption & Name */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        {item.name && (
          <p className="text-xs font-medium text-primary mb-0.5">{item.name}</p>
        )}
        <p className="text-sm font-medium text-white">{item.caption}</p>
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
  const [isPausedRow1, setIsPausedRow1] = useState(false);
  const [isPausedRow2, setIsPausedRow2] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  // Drag state for row 1
  const [isDraggingRow1, setIsDraggingRow1] = useState(false);
  const [startXRow1, setStartXRow1] = useState(0);
  const [scrollLeftRow1, setScrollLeftRow1] = useState(0);
  const row1Ref = useRef<HTMLDivElement>(null);
  
  // Drag state for row 2
  const [isDraggingRow2, setIsDraggingRow2] = useState(false);
  const [startXRow2, setStartXRow2] = useState(0);
  const [scrollLeftRow2, setScrollLeftRow2] = useState(0);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Duplicate items for seamless loop
  const duplicatedItems = [...galleryItems, ...galleryItems];

  // Drag handlers
  const handleMouseDown = (
    e: React.MouseEvent,
    rowRef: RefObject<HTMLDivElement>,
    setIsDragging: (v: boolean) => void,
    setStartX: (v: number) => void,
    setScrollLeft: (v: number) => void
  ) => {
    if (!rowRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - rowRef.current.offsetLeft);
    setScrollLeft(rowRef.current.scrollLeft);
  };

  const handleMouseMove = (
    e: React.MouseEvent,
    rowRef: RefObject<HTMLDivElement>,
    isDragging: boolean,
    startX: number,
    scrollLeft: number
  ) => {
    if (!isDragging || !rowRef.current) return;
    e.preventDefault();
    const x = e.pageX - rowRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    rowRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = (setIsDragging: (v: boolean) => void) => {
    setIsDragging(false);
  };

  const openLightbox = useCallback((itemId: number) => {
    const index = galleryItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
      setLightboxIndex(index);
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goToPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [lightboxIndex]);

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  }, [lightboxIndex]);

  const goToIndex = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

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
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Row 1 - scrolls left */}
        <div 
          className="mb-4 relative"
          onMouseEnter={() => setIsPausedRow1(true)}
          onMouseLeave={() => {
            setIsPausedRow1(false);
            setIsDraggingRow1(false);
          }}
        >
          {/* Pause indicator */}
          {isPausedRow1 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 animate-fade-in pointer-events-none shadow-lg">
              <Pause className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Drag to explore</span>
            </div>
          )}
          <div 
            ref={row1Ref}
            className={`flex gap-4 overflow-x-auto scrollbar-hide ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } ${isDraggingRow1 ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              animation: 'scrollLeft 60s linear infinite',
              animationPlayState: isPausedRow1 ? 'paused' : 'running',
            }}
            onMouseDown={(e) => handleMouseDown(e, row1Ref, setIsDraggingRow1, setStartXRow1, setScrollLeftRow1)}
            onMouseMove={(e) => handleMouseMove(e, row1Ref, isDraggingRow1, startXRow1, scrollLeftRow1)}
            onMouseUp={() => handleMouseUp(setIsDraggingRow1)}
            onMouseLeave={() => handleMouseUp(setIsDraggingRow1)}
          >
            {duplicatedItems.filter((_, i) => i % 2 === 0).map((item, index) => (
              <GalleryTile
                key={`row1-${item.id}-${index}`}
                item={item}
                isHovered={hoveredId === item.id}
                onHover={setHoveredId}
                onClick={() => !isDraggingRow1 && openLightbox(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - scrolls right */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPausedRow2(true)}
          onMouseLeave={() => {
            setIsPausedRow2(false);
            setIsDraggingRow2(false);
          }}
        >
          {/* Pause indicator */}
          {isPausedRow2 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 animate-fade-in pointer-events-none shadow-lg">
              <Pause className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Drag to explore</span>
            </div>
          )}
          <div 
            ref={row2Ref}
            className={`flex gap-4 overflow-x-auto scrollbar-hide ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } ${isDraggingRow2 ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              animation: 'scrollRight 55s linear infinite',
              animationPlayState: isPausedRow2 ? 'paused' : 'running',
            }}
            onMouseDown={(e) => handleMouseDown(e, row2Ref, setIsDraggingRow2, setStartXRow2, setScrollLeftRow2)}
            onMouseMove={(e) => handleMouseMove(e, row2Ref, isDraggingRow2, startXRow2, scrollLeftRow2)}
            onMouseUp={() => handleMouseUp(setIsDraggingRow2)}
            onMouseLeave={() => handleMouseUp(setIsDraggingRow2)}
          >
            {duplicatedItems.filter((_, i) => i % 2 === 1).map((item, index) => (
              <GalleryTile
                key={`row2-${item.id}-${index}`}
                item={item}
                isHovered={hoveredId === item.id}
                onHover={setHoveredId}
                onClick={() => !isDraggingRow2 && openLightbox(item.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          item={galleryItems[lightboxIndex]}
          currentIndex={lightboxIndex}
          totalItems={galleryItems.length}
          allItems={galleryItems}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          onGoTo={goToIndex}
        />
      )}

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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
