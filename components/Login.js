import { useStateContext } from "@/HBOProvider";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { v4 } from "uuid";
import ls from "local-storage";
export default function () {

    
  let users = ls("users") ? ls("users") : []; //  checking local storage to see if the ls('users') exist, if it does exist, setting it to the "users" variable, if not, setting the "users" variable to an empty array.
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    if (users) setLoadingUsers(true);
  }, []);

  //   Next Js router
  const router = useRouter();

  //    Global State
  const globalState = useStateContext();

  //   Global State variables
  let { userImage, user } = globalState;

  function selectUser(id) {
    ls("activeUID", id);
    console.log(id)
    router.push("/");
  }

  function showUsers() {
    if (loadingUsers) {
      return users.map((user) => {
        return (
          <div className="login-user__user-box flex flex-col items-center justify-center cursor-pointer" onClick={() => selectUser(user.id)} key = {user.id} >
            <img
              className="login-user__user-img w-[125px] h-[125px] rounded-[50%] mb-4 object-cover object-center border-[rgb(132,0,255)] border-[3px]"
              src={userImage}
            />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  }

function createUser(){
    router.push('/create')
}
  return (
    <>
      <div className="login-user h-screen flex justify-between items-center flex-col">
        <div className=" login-user__top flex items-center justify-center flex-col mt-8">
          <div className="login-user__logo h-[22px] w-[129px] scale-90 mb-4" />
          <span className="login-user__title text-[2rem]">
            Who Is Watching?
          </span>
        </div>

        <div className="login-user__form grid grid-cols-4 overflow-scroll gap-[50px]  justify-center items-center " >
         { showUsers()}
        </div>

        <div className="login-user__buttons mb-8">
          <button className="login-user__kid bg-[rgba(255,255,255,0.2)] rounded-[20px] h-[35px] w-[150px] uppercase text-[.9rem] font-bold cursor-pointer transition-opacity duration-300 opacity-40 hover:opacity-100" onClick = {createUser}>
            Create User
          </button>
        </div>
      </div>
    </>
  );
}
