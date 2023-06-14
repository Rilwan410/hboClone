export default function FeaturedMedia() {
  return (
    <>
      <div className="featured-media bg-black w-full min-h-[700px] h-screen relative overflow-hidden">
        {/* Media Player */}
        <iframe
          className="featured-media__video w-full h-full absolute z-1 scale-[2]"
          src="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&start=16"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Featured Media Description */}
        <div className="featured-media__bg bg-[linear-gradient(180deg,rgba(94,158,255,0)60%,rgba(68,61,156,.8)100%)] absolute w-full h-full z-2 flex px-[50px] items-end transition-opacity duration-500 opacity-0 ease-in-out hover:opacity-100">
          <div className="featured-media__container">
            <div className="featured-media__title text-[7rem] font-bold text-white mb-4">
              Mortal Kombat
            </div>
            <div className="featured-media__playing text-[0.9rem] font-bold text-white mb-[.5rem]">
              NOW PLAYING
            </div>
            <div className="featured-media__location text-[0.9rem] font-light text-white mb-8">
              In Theaters And On HBO MAX. Streaming throughout May 23.
            </div>

            {/* Featured Media Buttons */}
            <div className="feaured-media__buttons flex items-center mb-20">
              <div className="featured-media__play-btn bg-white text-black w-[50px] flex h-[50px] rounded-[50%] justify-center items-center mr-[20px] transition-[background] duration-300 ease-in-out hover:bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,255,1)0%,rgba(0,0,0,1)100%)] hover:text-white hover:cursor-pointer">
                <i className="fas fa-play" />
              </div>
              <div className="featured-media__info-btn bg-[gray] text-[.8rem] text-white font-bold w-[100px] h-[40px] flex justify-center items-center rounded-[20px] cursor-pointer">MORE INFO</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
