import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Movie } from "@/data/movies";
import { useState } from "react";
import { Heart, Info, Play, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MovieCardProps {
  movie: Movie;
  onClick: (movie: Movie) => void;
}

export function MovieCard({ movie, onClick }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 border-0 rounded-md group relative"
      style={{ width: '100%', aspectRatio: '2/3' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(movie)}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img 
          src={movie.imageUrl} 
          alt={movie.title} 
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end p-3">
            <h3 className="mb-1 text-lg font-bold text-white truncate">{movie.title}</h3>
            
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <Badge className="bg-red-600 hover:bg-red-700 text-xs py-0">
                  {movie.year}
                </Badge>
                <Badge variant="outline" className="text-xs border-gray-500 text-gray-300 py-0">
                  {movie.duration}
                </Badge>
              </div>
              
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-xs font-medium text-white">{movie.rating}</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-medium text-green-400">${movie.price.toFixed(2)}</span>
              <div className="flex space-x-1">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" className="w-7 h-7 rounded-full bg-gray-800/80 hover:bg-gray-700">
                        <Play className="w-3 h-3 text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Play</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" className="w-7 h-7 rounded-full bg-gray-800/80 hover:bg-gray-700">
                        <Plus className="w-3 h-3 text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to My List</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" className="w-7 h-7 rounded-full bg-gray-800/80 hover:bg-gray-700">
                        <Heart className="w-3 h-3 text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Like</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button size="icon" variant="ghost" className="w-7 h-7 rounded-full bg-gray-800/80 hover:bg-gray-700">
                        <Info className="w-3 h-3 text-white" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>More Info</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-1 mt-1">
              {movie.genres.slice(0, 3).map((genre, index) => (
                <span key={index} className="px-1.5 py-0.5 text-[10px] bg-gray-800 rounded text-gray-300">
                  {genre}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}