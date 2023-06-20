import { v4 } from "uuid";
import { useEffect, useState } from "react";
import axios from "axios";
import shuffleArray from "@/components/utilities";

export default function Placeholder({ title, size, endpoint }) {


  //   console.log(movies)
  return (
 

<div>
      <div className="media-row-list py-[20px] px-[20px]">
        <h3 className="media-row-list__title font-[500] text-white text-2xl mb-4">
          {title}
        </h3>
        <div className="media-row-list__thumbnails  flex flex-nowrap min-w-full gap-[10px]  w-[calc(100vw-70px)]  overflow-x-scroll">

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

    


        </div>
      </div>
    </div>
  );
}






/*

*/