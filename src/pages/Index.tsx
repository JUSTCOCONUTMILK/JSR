import { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { HeroBanner } from '@/components/hero-banner';
import { MovieRow } from '@/components/movie-row';
import { MovieDetail } from '@/components/movie-detail';
import { Movie, movies } from '@/data/movies';

export default function NetflixClone() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [featuredMovie, setFeaturedMovie] = useState<Movie>(movies[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  // Set a random featured movie on load
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    setFeaturedMovie(movies[randomIndex]);
  }, []);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsDetailOpen(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase()))
      );
      setFilteredMovies(filtered);
    }
  };

  // Group movies by genre for row display
  const getMoviesByGenre = () => {
    const genreMap = new Map<string, Movie[]>();
    
    filteredMovies.forEach(movie => {
      movie.genres.forEach(genre => {
        if (!genreMap.has(genre)) {
          genreMap.set(genre, []);
        }
        if (!genreMap.get(genre)?.find(m => m.id === movie.id)) {
          genreMap.get(genre)?.push(movie);
        }
      });
    });
    
    // Convert map to array and sort by number of movies in each genre
    return Array.from(genreMap.entries())
      .filter(([_, movies]) => movies.length >= 4) // Only show genres with at least 4 movies
      .sort((a, b) => b[1].length - a[1].length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onSearch={handleSearch} />
      
      {searchQuery.trim() === '' ? (
        <HeroBanner movie={featuredMovie} onInfoClick={handleMovieClick} />
      ) : null}
      
      {filteredMovies.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-96">
          <h2 className="text-2xl font-medium">No movies found for "{searchQuery}"</h2>
          <p className="mt-2 text-gray-400">Try searching for a different title or genre.</p>
        </div>
      ) : (
        <div className="container mx-auto pt-8">
          {searchQuery.trim() !== '' && (
            <MovieRow 
              title={`Results for "${searchQuery}"`} 
              movies={filteredMovies} 
              onMovieClick={handleMovieClick} 
            />
          )}
          
          {/* Show top rated movies row for all searches */}
          <MovieRow 
            title="Top Rated" 
            movies={filteredMovies.slice().sort((a, b) => b.rating - a.rating).slice(0, 10)} 
            onMovieClick={handleMovieClick} 
          />
          
          {/* Show movies grouped by genre */}
          {getMoviesByGenre().map(([genre, movies]) => (
            <MovieRow key={genre} title={genre} movies={movies} onMovieClick={handleMovieClick} />
          ))}
        </div>
      )}
      
      <MovieDetail 
        movie={selectedMovie} 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)}
      />
    </div>
  );
}