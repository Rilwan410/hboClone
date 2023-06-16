import { useStateContext } from "@/HBOProvider";
import ls from "local-storage"
import { v4 } from "uuid";
import { useRouter } from "next/router";

export default function CreateUser() {
  const router = useRouter()



  const globalState = useStateContext()
let {user, setUser, createUser, userImage, circleColors, setBackground} = globalState 





  function saveUsers(){
    let users = []
    user;
    if(!ls('users')){
      user = {
        id:v4(),
        user,
        myListID: []
      }
      users.push(user)
      ls("users", users)
      router.push('/login')
    }else{
      users = ls("users")
      user = {
        id: v4(),
        user,
        myListID : []
      }
      users.push(user)
      ls('users', users)
      router.push('/login')
    }
    setUser('')
  }
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
                className={`create-user__color circle-one create-user__color--active rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[${circleColors.colorOne}]` }
                onClick = {setBackground}
              />

              <div
                className={`create-user__color circle-two  rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[${circleColors.colorTwo}]`} color = {'white'}
              />

              <div
                className={`create-user__color circle-two  rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[${circleColors.colorThree}]`}
              />

              <div
                className={`create-user__color circle-two  rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[${circleColors.colorFour}]`}
         
              />

              <div
                className={`create-user__color circle-two  rounded-[50%] w-[30px] h-[30px] cursor-pointer transition-transform duration-500 ease-in-out hover:scale-125 bg-[${circleColors.colorFive}]`}
                
              />

            </div>
          </div>
        </div>

        <div className="create-user__buttons mb-8">
          <button className="create-user__cancel bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-[.9rem] font-bold cursor-pointer transition-opacity duration-300 opacity-40 mr-4 hover:opacity-100">
            Cancel
          </button>
          <button className="create-user__save bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-[.9rem] font-bold cursor-pointer transition-opacity duration-300 opacity-40 hover:opacity-100" onClick = {saveUsers}>
                Save
          </button>
        </div>
      </div>
    </>
  );
}
