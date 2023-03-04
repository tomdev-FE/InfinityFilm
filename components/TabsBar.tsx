import React, { FunctionComponent, Dispatch, SetStateAction } from "react";

type QueryOption = "now_playing" | "top_rated";

type Props = {
  queryOption: QueryOption;
  setQueryOption?: Dispatch<SetStateAction<QueryOption>>;
};

const TabsBar: FunctionComponent<Props> = ({ queryOption, setQueryOption }) => {
  return (
    <>
      {setQueryOption && queryOption ? (
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex mb-0 list-none flex-wrap flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer	">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (queryOption === "now_playing"
                      ? "text-white bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600"
                      : "text-indigo-500 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setQueryOption("now_playing");
                  }}
                >
                  Movies In Theatres
                </div>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer	">
                <div
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (queryOption === "top_rated"
                      ? "text-white bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600"
                      : "text-indigo-500 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setQueryOption("top_rated");
                  }}
                >
                  Top Rated Movies
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TabsBar;
