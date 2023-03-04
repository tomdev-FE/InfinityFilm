import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchMovies } from "@utils";
import { Movies } from "@types";

export const useFetchMovies = (search: string, option: string) => {
  return useInfiniteQuery(
    ["movies", search, option],
    ({ pageParam = 1 }) => fetchMovies(search, pageParam, option),
    {
      getNextPageParam: (lastPage: Movies) => {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
        return undefined;
      },
      refetchOnWindowFocus: false,
    }
  );
};
