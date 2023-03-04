import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Header from "@components/Header";
import MovieInfo from "@components/ListviewCard";

import { BACKDROP_SIZE, POSTER_SIZE, fetchWrapper } from "@utils";
import { Movie } from "@types";

type Props = {
  movie: Movie;
};

const Movie: NextPage<Props> = ({ movie }) => {
  if (!movie) return <h1>Error</h1>;

  return (
    <main>
      <Header />
      <MovieInfo
        thumbUrl={
          movie.poster_path
            ? process.env.NEXT_PUBLIC_API_IMAGE_PATH +
              POSTER_SIZE +
              movie.poster_path
            : "/no_image.webp"
        }
        year={movie.release_date.split("-")[0]}
        backgroundImgUrl={
          movie.backdrop_path
            ? process.env.NEXT_PUBLIC_API_IMAGE_PATH +
              BACKDROP_SIZE +
              movie.backdrop_path
            : "/no_image.webp"
        }
        title={movie.original_title}
        summary={movie.overview}
      />
    </main>
  );
};

export default Movie;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const movieEndpoint: string = `${process.env.NEXT_PUBLIC_API_URL}movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

  const movie = await fetchWrapper<Movie>(movieEndpoint);

  return {
    props: {
      movie,
    },
    revalidate: 60 * 60 * 24,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
