import type { NextPage } from "next";
import Link from "next/link";
import React, { UIEvent, useState } from "react";
import {
  PullToRefresh,
  PullDownContent,
  ReleaseContent,
  RefreshContent,
} from "react-js-pull-to-refresh";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { useFetchMovies } from "@hooks";

import { BACKDROP_SIZE, POSTER_SIZE } from "@utils";

import Wrapper from "@components/Wrapper";
import Header from "@components/Header";
import Banner from "@components/Banner";
import TabsBar from "@components/TabsBar";
import GridviewCard from "@components/GridviewCard";
import ListviewCard from "@components/ListviewCard";
import Spinner from "@components/Spinner";
import SegmentedControl from "@components/SegmentedControl";

type QueryOption = "now_playing" | "top_rated";

const Home: NextPage = () => {
  const [query, setQuery] = useState("");
  const [queryOption, setQueryOption] = useState<QueryOption>("now_playing");
  const queryId = "query-id";

  const { data, fetchNextPage, isLoading, isFetching, error, refetch } =
    useFetchMovies(query, queryOption);
  const [viewType, setViewType] = useState("list");

  const notify = () => {
    toast.error("Something went wrong! Please try again.", {
      toastId: queryId,
    });
  };

  const handleRefresh = async (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        refetch();
        resolve();
      }, 2000);
    });
  };
  const viewHandler = () => {
    if (viewType === "list") {
      setViewType("grid");
    } else if (viewType === "grid") {
      setViewType("list");
    }
  };
  const handleScroll = (e: UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - Math.ceil(scrollTop) === clientHeight) fetchNextPage();
  };

  if (error) {
    notify();
  }

  return (
    <PullToRefresh
      pullDownContent={<PullDownContent />}
      releaseContent={<ReleaseContent />}
      refreshContent={<RefreshContent />}
      pullDownThreshold={200}
      onRefresh={handleRefresh}
      triggerHeight={200}
      backgroundColor="white"
    >
      <div
        className="relative h-screen overflow-y-scroll"
        onScroll={handleScroll}
      >
        <Header setQuery={setQuery} />

        <Banner />
        <div className=" flex flex-col p-4 max-w-7xl m-auto justify-between sm:flex-row">
          <TabsBar queryOption={queryOption} setQueryOption={setQueryOption} />
          <SegmentedControl type={viewType} handleType={viewHandler} />
        </div>

        <Wrapper
          className="p-4 max-w-7xl m-auto"
          viewType={viewType}
          title={
            query
              ? `Search Results: ${data?.pages[0].total_results}`
              : "List Movies"
          }
        >
          {data &&
            data.pages &&
            data.pages.map((page) =>
              page.results.map((movie) => (
                <Link key={movie.id} href={`/movie/${movie.id}`}>
                  <div className="cursor-pointer hover:opacity-80 hover:duration-300">
                    {viewType === "list" ? (
                      <ListviewCard
                        title={movie.title}
                        thumbUrl={
                          movie.poster_path
                            ? process.env.NEXT_PUBLIC_API_IMAGE_PATH +
                              POSTER_SIZE +
                              movie.poster_path
                            : "/no_image.webp"
                        }
                        backgroundImgUrl={
                          movie.backdrop_path
                            ? process.env.NEXT_PUBLIC_API_IMAGE_PATH +
                              BACKDROP_SIZE +
                              movie.backdrop_path
                            : "/no_image.webp"
                        }
                        summary={movie.overview}
                        year={movie.release_date.split("-")[0]}
                      />
                    ) : (
                      <GridviewCard
                        title={movie.title}
                        imgUrl={
                          movie.poster_path
                            ? process.env.NEXT_PUBLIC_API_IMAGE_PATH +
                              POSTER_SIZE +
                              movie.poster_path
                            : "/no_image.webp"
                        }
                      />
                    )}
                  </div>
                </Link>
              ))
            )}
        </Wrapper>
        {isLoading || isFetching ? <Spinner /> : null}
      </div>
    </PullToRefresh>
  );
};

export default Home;
