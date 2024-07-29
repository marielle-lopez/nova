import axios from 'axios';

export const TMDBClient = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_BEARER_TOKEN}`,
  },
});
