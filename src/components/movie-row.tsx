import { ChevronLeft, ChevronRight } from "lucide-react";
import { Movie } from "@/data/movies";
import { MovieCard } from "./movie-card";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";

interface MovieRowProps {
  title: string;
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

export function MovieRow({ title, movies, onMovieClick }: MovieRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const scroll = (direction: 'left' | 'right') => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.8; // 80% of visible width
      
      const newScrollLeft = direction === 'left' 
        ? scrollLeft - scrollAmount 
        : scrollLeft + scrollAmount;
        
      rowRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
      
      // Update arrow visibility after scrolling
      setTimeout(() => {
        if (rowRef.current) {
          setShowLeftArrow(rowRef.current.scrollLeft > 0);
          setShowRightArrow(
            rowRef.current.scrollLeft < rowRef.current.scrollWidth - rowRef.current.clientWidth - 10
          );
        }
      }, 300);
    }
  };

  return (
    <div className="relative px-4 pb-8 group">
      <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
      
      {showLeftArrow && (
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      )}
      
      <div 
        className="flex space-x-4 overflow-x-scroll scrollbar-hide pb-2"
        ref={rowRef}
        onScroll={() => {
          if (rowRef.current) {
            setShowLeftArrow(rowRef.current.scrollLeft > 0);
            setShowRightArrow(
              rowRef.current.scrollLeft < rowRef.current.scrollWidth - rowRef.current.clientWidth - 10
            );
          }
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} className="flex-shrink-0" style={{ width: '150px' }}>
            <MovieCard movie={movie} onClick={onMovieClick} />
          </div>
        ))}
      </div>
      
      {showRightArrow && (
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full h-10 w-10 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}