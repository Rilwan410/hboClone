import { useStateContext } from "@/HBOProvider";

export default function CreateUser() {
  const globalState = useStateContext()
  const {user, setUser, createUser, userImage} = globalState 
  return (
    <>
      <div className="create-user h-screen flex justify-between items-center flex-col">
        <div className=" create-user__top flex items-center justify-center flex-col mt-8">
          <div className="create-user__logo h-[22px] w-[129px] scale-90 mb-4" />
          <span className="create-user__title text-[2rem]">
            Who Is Watching?
          </span>
        </div>

        <div className="create-user__form flex justify-center items-center">
          <img
            className="create-user__user-img w-[125px] h-[125px] rounded-[50%] mb-4 object-cover object-center border-[rgb(132,0,255)] border-[3px] mr-12"
            src= {userImage}
          />
          <div className="create-user__input-group flex flex-col jusitfy-center">
            <label className="text-[.8rem] mb-4"> Name</label>
            <input type="text" className="create-user__inputText outline-none border-b-[1px] border-b-[rgb(132,0,255)] bg-transparent w-[300px] py-[10px] mb-8 text-2xl" value = {user}  onChange = {createUser}/>
            <div className="create-user__colors flex justify-between ">
              <div
                className="create-user__color create-user__color--active rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[linear-gradient(312deg,rgba(26,39,103)0%,rgba(48,20,94,1)45%,rgba(0,0,0,1)100%)]"
              />
              <div
                className="create-user__color  rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[linear-gradient(135deg,rgba(167,195,34,1)22%,rgba(15,181,174,1)71%)]"
              />
              <div
                className="create-user__color  rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[linear-gradient(135deg,rgba(195,139,34,1)2%,rgba(15,33,181,1)71%)]"
              />
              <div
                className="create-user__color  rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(40,195,34,1) 27%, rgba(104,15,181,1) 71%)",
                }}
              />
              <div
                className="create-user__color  rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[linear-gradient(135deg,rgba(55,34,195,1)27%,rgba(181,15,74,1)71%)]"
                
              />
            </div>
          </div>
        </div>

        <div className="create-user__buttons mb-8">
          <button className="create-user__cancel bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-[.9rem] font-bold cursor-pointer transition-opacity duration-300 opacity-40 mr-4 hover:opacity-100">
            Cancel
          </button>
          <button className="create-user__save bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-[.9rem] font-bold cursor-pointer transition-opacity duration-300 opacity-40 hover:opacity-100">
                Save
          </button>
        </div>
      </div>
    </>
  );
}
