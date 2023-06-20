import { useStateContext } from "@/HBOProvider";
import { useRouter } from "next/router";

export default function FeaturedMedia({
  type,
  title,
  location,
  mediaURL,
  linkURL,
}) {
  const globalState = useStateContext();
  const router = useRouter()


function hideButtons(){
  if(type === 'front'){
    return (
      <div className="feaured-media__buttons flex items-center mb-20">
      <div
        className="featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer"
        onClick={clickedPlay}
      >
        <i className="fas fa-play" />
      </div>
      <div
        className="featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer"
        onClick={clickedPlay}
      >
        MORE INFO
      </div>
    </div>
    )
  } else {
    return 
  }
}

  function clickedPlay() {
    router.push('/movie/460465')
  }

  function showMedia() {
    if (type === "front") {
      return (
        <iframe
          className="featured-media__video w-full h-full absolute z-1 scale-[2]"
          src={mediaURL}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else if (type === "single") {
      return (
        <img
          src={mediaURL}
          className=" absolute opacity-95 w-full h-full "
        />
      );
    }
  }
  return (
    <>
      <div
        className={`featured-media bg-black w-full min-h-[700px] ${
          type === "front" ? "h-screen" : ""
        } relative overflow-hidden`}
      >
        {/* Media Player */}
        {showMedia()}

        {/* Featured Media Description */}
        <div className="featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100">
          <div className="featured-media__container">
            <div
              className="featured-media__title text-[7rem] font-bold text-white mb-4 cursor-pointer"
              onClick={clickedPlay}
            >
              {title}
            </div>
            <div className="featured-media__playing text-[1.2rem] font-bold text-white mb-[.5rem]">
              NOW PLAYING
            </div>
            <div className="featured-media__location text-[1.2rem] font-light text-white mb-8">
              {location}
            </div>

            {/* Featured Media Buttons */}
            {hideButtons()}
          </div>
        </div>
      </div>
    </>
  );
}
