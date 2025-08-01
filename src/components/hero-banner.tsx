import { Button } from "@/components/ui/button";
import { Movie } from "@/data/movies";
import { Info, Play } from "lucide-react";

interface HeroBannerProps {
  movie: Movie;
  onInfoClick: (movie: Movie) => void;
}

export function HeroBanner({ movie, onInfoClick }: HeroBannerProps) {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Banner Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={movie.imageUrl} 
          alt={movie.title}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{movie.title}</h1>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <span className="text-green-400 font-medium">${movie.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-300 text-sm">{movie.duration}</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 font-medium">{movie.rating.toFixed(1)}</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-300 text-sm">{movie.year}</span>
          </div>
        </div>
        
        <p className="text-gray-300 mb-6 text-sm md:text-base line-clamp-3 md:line-clamp-4">{movie.description}</p>
        
        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="bg-white hover:bg-gray-200 text-black flex gap-2">
            <Play className="h-5 w-5" />
            Play
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-600 bg-gray-800/50 hover:bg-gray-700 flex gap-2"
            onClick={() => onInfoClick(movie)}
          >
            <Info className="h-5 w-5" />
            More Info
          </Button>
        </div>
      </div>
    </div>
  );
}