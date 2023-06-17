import { v4 } from "uuid";
export default function JustAdded() {
    function loopComp(comp, digit) {
      let thumbnails = [];
      for (let i = 0; i < digit; i++) {
        thumbnails.push(comp);
  
      }
      return thumbnails;
    }
    return (
      
        <div className="just-added-list py-[20px] px-[20px]">
          <h3 className="just-added-list__title font-[500] text-white text-2xl mb-4">Just Added</h3>
          <div className="just-added-list__thumbnails  flex flex-nowrap min-w-full gap-[10px]  w-[calc(100vw-70px)]  overflow-x-scroll">
  
  
            {loopComp(
              <div className="just-added-list__thumbnail flex-none w-[400px] h-[600px] relative" >
                <img src="https://m.media-amazon.com/images/I/61RfzoSxaJL._AC_UF894,1000_QL80_.jpg " className ="object-cover object-center w-[400px] h-[600px]" />
                <div className="just-added-list__top-player bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] h-full w-full absolute top-0 left-0 z-2 flex justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-90 hover:cursor-pointer ">
                  <i className="fas fa-play text-[4rem] translate-y-[100px] duration-300 ease-in-out delay-[.2s] opacity-0" />
                </div>
              </div>,
              10
            )}
  
  
          </div>
        </div>
  
    );
  }
  