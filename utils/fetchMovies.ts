import { Movies } from "types/Movies";
import { fetchWrapper } from "./fetchWrapper";

export const fetchMovies = async (
  search = "",
  page = 1,
  option = "now_playing"
): Promise<Movies> => {
  return await fetchWrapper<Movies>(
    `/api/movies?option=${option}&search=${search}&page=${page}`
  );
};
