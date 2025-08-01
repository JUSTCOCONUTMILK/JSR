import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Movie } from "@/data/movies";
import { Star, Clock, X, Play, Plus, ThumbsUp } from "lucide-react";

interface MovieDetailProps {
  movie: Movie | null;
  isOpen: boolean;
  onClose: () => void;
}

export function MovieDetail({ movie, isOpen, onClose }: MovieDetailProps) {
  if (!movie) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl bg-gray-900 text-white border-gray-800 p-0 overflow-hidden">
        <div className="relative">
          {/* Header Image with Overlay */}
          <div className="relative h-[320px] w-full overflow-hidden">
            <img 
              src={movie.imageUrl} 
              alt={movie.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            
            {/* Close Button */}
            <Button 
              variant="ghost" 
              size="icon"
              className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 rounded-full z-10"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Content */}
          <div className="p-6 pt-3">
            <DialogHeader className="pb-2">
              <DialogTitle className="text-2xl font-bold">{movie.title}</DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge className="bg-red-600 hover:bg-red-700">
                {movie.year}
              </Badge>
              
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4 text-gray-400" />
                <span className="text-gray-300 text-sm">{movie.duration}</span>
              </div>
              
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-gray-300 text-sm">{movie.rating.toFixed(1)}</span>
              </div>
              
              <div className="flex items-center">
                <span className="text-green-400 font-medium">${movie.price.toFixed(2)}</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">{movie.description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm text-gray-400 mb-1">Genres</h4>
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre, index) => (
                  <Badge key={index} variant="outline" className="border-gray-700">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button className="bg-white hover:bg-gray-200 text-black flex gap-2">
                <Play className="h-4 w-4" />
                Play
              </Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-800 flex gap-2">
                <Plus className="h-4 w-4" />
                My List
              </Button>
              <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
                <ThumbsUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}