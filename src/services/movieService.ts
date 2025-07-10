import axios from "axios";
import type { Movie } from "../types/movie";

export interface MovieApiResponse {
  results: Movie[];
  total_pages: number;
}

const myKey = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = "https://api.themoviedb.org/3";
export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieApiResponse> => {
  const response = await axios.get<MovieApiResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: {
        query,
        page,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    }
  );
  return response.data;
};
