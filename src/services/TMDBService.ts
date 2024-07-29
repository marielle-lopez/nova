import { TMDBClient } from './TMDBClient.ts';

export const getMovieById = async (id: number): Promise<TMDBMovie> => {
  try {
    const response = await TMDBClient.get(`/movie/${id}`);
    const movie: TMDBMovie = response.data;
    return movie;
  } catch (err) {
    throw new Error(`Failed to fetch movie with ID ${id}: ${err}`);
  }
};
