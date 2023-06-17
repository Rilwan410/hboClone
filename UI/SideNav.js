import { useStateContext } from "@/HBOProvider";


export default function SideNav() {
const globalState = useStateContext()
const {setSideNav,sideNav} = globalState

function closeSideNav(){
  setSideNav(false)
}
  return (
    <div className={`side-nav ${sideNav ? "side-nav__active" : '' } w-[350px]  overflow-scroll fixed top-0 left-0 bg-black min-h-screen p-[50px] z-[11] translate-x-[-350px] transition duration-400 ease-in-out `}>


      <div className="side-nav__close-btn h-[50px] absolute  left-[290px] top-0 w-[50px] text-2xl flex items-center justify-center cursor-pointer" onClick = {closeSideNav}>
        <i className="fas fa-times" />
        </div>
        <div className = "h-full absolute overflow-scroll">
        <ul className="side-nav__main">
          <li className = "">
            <a href="/" className="active">
              Home
            </a>
          </li>
          <li className = "">
            <a href="/" >
              Series
            </a>
          </li>
          <li className = "">
            <a href="/" >
              Movies
            </a>
          </li>
          <li className = "">
            <a href="/" >
              Originals
            </a>
          </li>
          <li className = "">
            <a href="/" >
              Just Added
            </a>
          </li>
          <li className = "">
            <a href="/" >
              Last Chance
            </a>
          </li>
          <li className = "">
            <a href="/" >
              Coming Soon
            </a>
          </li>
          <li className = "">
            <a href="/" >
              Trending Now
            </a>
          </li>
        </ul>
      

      <div className="side-nave__divider w-full bg-[rgb(80,80,80)] h-[2px] my-[20px]" />

      <ul className="side-nav__main w-[250px]">
        <li className = "">
          <a href="/">Action</a>
        </li>
        <li className = "">
          <a href="/">Animation</a>
        </li>
        <li className = "">
          <a href="/">Comedy</a>
        </li>
        <li className = "">
          <a href="/">Crime</a>
        </li>
        <li className = "">
          <a href="/">Documentaries</a>
        </li>
        <li className = "">
          <a href="/">Drama</a>
        </li>
        <li className = "">
          <a href="/">Fantasy</a>
        </li>
        <li className = "">
          <a href="/">Horror</a>
        </li>
        <li className = "">
          <a href="/">International</a>
        </li>
        <li className = "">
          <a href="/">Kids & Family</a>
        </li>
        <li className = "">
          <a href="/">Latino</a>
        </li>
        <li className = "">
          <a href="/">Music</a>
        </li>
        <li className = "">
          <a href="/">News/Talk</a>
        </li>
        <li className = "">
          <a href="/">Reality</a>
        </li>
        <li className = "">
          <a href="/">Romance</a>
        </li>
        <li className = "">
          <a href="/">Shorts</a>
        </li>
        <li className = "">
          <a href="/">Sports</a>
        </li>
        <li className = "">
          <a href="/">Suspence</a>
        </li>
      </ul>
      </div>
      
    </div>
  );
}
