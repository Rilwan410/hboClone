import { v4 } from "uuid";
import { useEffect, useState } from "react";
import axios from "axios";
import shuffleArray from "@/components/utilities";
import Link from "next/link";
import { useStateContext } from "@/HBOProvider";
import Mounted from "./Mounted";
import HBOProvider from "@/HBOProvider";

export default function MediaRow({ title, size, endpoint, category, mediaType, }) {
  const globalState = useStateContext();
  const { loadingData, setLoadingData } = globalState;
  const [movies, setMovies] = useState([]);

  // category === 'tv' ? `/tv/${id}` :

  function showThumbnails() {
    return loadingData
      ? loopComp(<Skeleton size={size} />, 10)
      : movies.map((movie, id) => {
          setLoadingData(false);
          id = movie.id;
          return (
            <Link href={`${category === "tv" || mediaType === 'tv' ? `/tv/${id}` : `/movie/${id}`}`}>
              <Thumbnail movieData={movie} size={size}  />
            </Link>
          );
        });
  }

  function loopComp(comp, digit) {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  }
  //api.themoviedb.org/3/movie/{movie_id}/creditsapi_key=1418807822dc08d848a20722bb586c6f&language=en-US

  // https://api.themoviedb.org/3/discover/movie?with_genres=28&primary_release_year=2023&api_key=1418807822dc08d848a20722bb586c6f&language=en-US // Discover Movies

  https: useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${endpoint}api_key=1418807822dc08d848a20722bb586c6f&language=en-US`
      )
      .then((success) => {
        setMovies(shuffleArray(success.data.results));
        console.log(movies)
        success.data.results;
        setLoadingData(false);
      })
      .catch((error) => {
        error;
      });
  }, [endpoint]);
  //endpoint

  //   (movies)
  return (
    <div>
      <div className="media-row-list py-[20px] px-[20px]">
        <h3 className="media-row-list__title font-[500] text-white text-2xl mb-4">
          {`${movies == false ? '' : title}`}
        </h3>
        <div className="media-row-list__thumbnails  flex flex-nowrap min-w-full gap-[10px]  w-[calc(100vw-70px)]  overflow-x-scroll">
          {showThumbnails()}
        </div>
      </div>
    </div>
  );
}

function Skeleton({ size }) {
  return (
    <div
      className={`media-row-list__thumbnail-skeleton ${
        size ? size : ""
      } flex-none w-[400px] h-[600px] relative `}
    >
      <div
        className={`media-row__thumbnail-skeleton-img ${
          size ? size : ""
        } bg-[rgb(19,19,19)] my-[10px] relative overflow-hidden`}
      ></div>
    </div>
  );
}

function Thumbnail({ size, movieData }) {
  return (
    <div
      className={`media-row-list__thumbnail ${
        size ? size : ""
      } flex-none w-[400px] h-[600px] relative`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movieData.poster_path}`}
      />
      <div className="media-row-list__top-player bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] h-full w-full absolute top-0 left-0 z-2 flex justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-90 hover:cursor-pointer ">
        <i className="fas fa-play text-[4rem] translate-y-[100px] duration-300 ease-in-out delay-[.2s] opacity-0" />
      </div>
    </div>
  );
}
