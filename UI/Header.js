import Account from "./Account";
import SearchModal from "./SearchModal";
export default function Header({}) {
  return (
    <header className="top-header  bg-[rgba(0,0,0,0)] flex justify-between items-center fixed top-0 left-0 w-full z-10 transition duration-300 ease-in-out  hover:bg-[rgba(0,0,0,1)] px-[50px] py-[15px] text-white ">
      <div className="top-header__left-side flex">
        <div className="top-header__menu-btn mr-[40px]">
          <i className="fas fa-bars" />
        </div>
        <div className="top-header__search-btn">
          <i className="fas fa-search" />
        </div>
      </div>

      <div className="top-header__logo h-[22px] w-[129px] scale-90 cursor-pointer"></div>
      <div className="top-header__account flex justify-center items-center ">
        <img
          className="top-header--user-img h-[30px] w-[30px] cursor-pointer rounded-[50%] border-[rgb(132,0,255)] object-cover object-center mr-4 border-[3px]"
          src="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <div className="top-header__user-name">Susan</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  );
}
