import { useState, useEffect } from 'react';
import { getMovieById } from '../../services/TMDBService.js';
import selectedMovies from '../../data/featuredMovies.json';
import { CarouselContainer } from '../../containers/CarouselContainer/CarouselContainer.js';
import { PageContainer } from '../../containers/PageContainer/PageContainer.js';

export const HomePage = () => {
  const [featuredMovies, setFeaturedMovies] = useState<TMDBMovie[] | null>(
    null
  );

  useEffect(() => {
    const fetchFeaturedMovies = async () => {
      const selectedMoviesPromises = selectedMovies.map(
        (selectedMovie: FeaturedMovie) => getMovieById(selectedMovie.id)
      );
      return Promise.all(selectedMoviesPromises);
    };
    fetchFeaturedMovies().then((res) => setFeaturedMovies(res));
  }, []);

  return (
    <PageContainer>
      {featuredMovies && <CarouselContainer featuredMovies={featuredMovies} />}
      <button onClick={() => console.log(featuredMovies)}>
        Get movie details
      </button>
    </PageContainer>
  );
};
