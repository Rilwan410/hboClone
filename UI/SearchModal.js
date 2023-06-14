export default function SearchModal() {
  function loopComp(comp, digit) {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  }
  return (
    // search-modal__active
    <div className="search-modal  search-modal__active  items-center hidden  z-13 fixed bg-black h-screen w-full top-0 left-0  py-[20px] ">
        
      <div className="search-modal__input-group flex justify-center items-center mb-[3rem] ">
        <input
          type="text"
          placeholder="Search For A Title"
          value=""
          className="search-modal__input bg-transparent text-[4rem] border-b-[2px] outline-none border-b-[rgb(132,0,255)]"
        />
        
 
        <div className = "search-modal__close-btn ">
            <i className = "fas fa-times absolute  top-6 right-0 text-[3rem] p-[15px] cursor-pointer"/>
        </div>
      </div>


      {/* <h3 className = "  text-4xl  search-modal__title text-[1.5rem] mb-[2.5rem]">
        Popular Searches
      </h3> */}


      <div className="search-modal__thumbnails   flex flow-wrap  justify-center gap-[15px] h-full w-full overflow-y-scroll">
        
        
        {loopComp(
          <div className="search-modal__thumbnail opacity-0 flex-none w-[240px] h-[360px] relative">
            <img
              src="https://m.media-amazon.com/images/I/61RfzoSxaJL._AC_UF894,1000_QL80_.jpg "
              className="object-cover object-center w-[240px] h-[360px]"
            />
            <div className="search-modal__top-player bg-[linear-gradient(328deg,rgba(94,158,255,1)0%,rgba(119,30,135,1)100%,rgba(60,38,135,1)100%,rgba(60,38,184,1)100%,rgba(0,0,0,1)100%)] h-full w-full absolute top-0 left-0 z-2 flex justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-90 hover:cursor-pointer ">
              <i className="fas fa-play text-[4rem] translate-y-[100px] duration-300 ease-in-out delay-[.2s] opacity-0" />
            </div>
          </div>,
          
        10)}
      </div>
    </div>
  );
}
