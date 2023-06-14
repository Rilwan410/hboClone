export default function ForYouList() {
  function loopComp(comp, digit) {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);

    }
    return thumbnails;
  }
  return (
    
      <div className="foryou-list py-[20px] px-[20px]">
        <h3 className="foryou-list__title font-[500] text-white text-2xl mb-4">For You</h3>
        <div className="foryou-list__thumbnails  flex flex-nowrap min-w-full gap-[10px]  w-[calc(100vw-70px)]  overflow-x-scroll">


          {loopComp(
            <div className="foryou-list__thumbnail flex-none w-[450px] h-[253px] relative">
              <img src="https://pictures.abebooks.com/isbn/9781608873821-us.jpg " className ="object-cover object-center w-[450px] h-[253px]" />
              <div className="foryou-list__top-player bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] h-full w-full absolute top-0 left-0 z-2 flex justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-90 hover:cursor-pointer ">
                <i className="fas fa-play text-[4rem] translate-y-[100px] duration-300 ease-in-out delay-[.2s] opacity-0" />
              </div>
            </div>,
            10
          )}


        </div>
      </div>

  );
}
