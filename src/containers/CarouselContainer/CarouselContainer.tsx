import { useState, useEffect } from 'react';
import { Carousel } from '../../components/Carousel/Carousel';

interface CarouselContainerProps {
  featuredMovies: TMDBMovie[];
}

export const CarouselContainer = ({
  featuredMovies,
}: CarouselContainerProps) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextMovie();
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [index]);

  const previousMovie = () => {
    index === 0 ? setIndex(featuredMovies.length - 1) : setIndex(index - 1);
  };

  const nextMovie = () => {
    index === featuredMovies.length - 1 ? setIndex(0) : setIndex(index + 1);
  };

  // console.log(featuredMovies);

  return (
    <Carousel
      imagePath={`https://image.tmdb.org/t/p/original${featuredMovies[index].backdrop_path}`}
      title={featuredMovies[index].title}
      description={featuredMovies[index].overview}
      previousMovie={previousMovie}
      nextMovie={nextMovie}
    />
  );
};
