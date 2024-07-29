import './App.css';
import { useState, useEffect } from 'react';
import { getMovieById } from './services/TMDBService.js';
import selectedMovies from './data/featuredMovies.json';

function App() {
  const [featuredMovies, setFeaturedMovies] = useState<TMDBMovie[] | null>(
    null
  );

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      const selectedMoviesPromises = selectedMovies.map((selectedMovie) =>
        getMovieById(selectedMovie.id)
      );
      return Promise.all(selectedMoviesPromises);
    };
    fetchFeaturedMovies().then((res) => setFeaturedMovies(res));
  });

  return (
    <>
      <h1>Hello world!</h1>
      <button onClick={() => console.log(featuredMovies)}>
        Get movie details
      </button>
    </>
  );
}

export default App;
