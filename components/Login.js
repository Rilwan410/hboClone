export default function () {
    return (
      <>
        <div className="login-user h-screen flex justify-between items-center flex-col">
          <div className=" login-user__top flex items-center justify-center flex-col mt-8">
            <div className="login-user__logo h-[22px] w-[129px] scale-90 mb-4" />
            <span className="login-user__title text-[2rem]">Who Is Watching?</span>
          </div>
  
  
          <div className = "login-user__form flex justify-center items-center">
            <div className = "login-user__user-box flex flex-col items-center justify-center cursor-pointer">
              <img className ="login-user__user-img w-[125px] h-[125px] rounded-[50%] mb-4 object-cover object-center border-[rgb(132,0,255)] border-[3px]" src="https://randomuser.me/api/portraits/women/44.jpg"/>
              <div className ="login-user__user-name">Susan</div>
            </div>
          </div>
  
  
        <div className="login-user__buttons mb-8">
          <button className ="login-user__adult bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-[.9rem] font-bold cursor-pointer transition-opacity duration-300 opacity-40 mr-4 hover:opacity-100">Add Adult</button>
          <button className ="login-user__kid bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-[.9rem] font-bold cursor-pointer transition-opacity duration-300 opacity-40 hover:opacity-100">Add Kid</button>
        </div>
  
        </div>
      </>
    );
  }
  