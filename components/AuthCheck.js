import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { v4 } from "uuid";
import ls from "local-storage";

export default function AuthCheck(component) {
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const router = useRouter();
  let activeUID = ls("activeUID");
  let users = ls("users") ? ls("users") : [];

  useEffect(() => {
    if (activeUID == null && users == false) router.push("/create");
    if (users != false && activeUID != null) setuserLoggedIn(true);
  }, []);

  if (users != false && activeUID != null) {
    return userLoggedIn ? (
      component
    ) : (
      <div className="create-user  w-full h-screen grid place-items-center">
        <h1 className="place-self-center text-5xl font-light">
          Cannot Find Requested Page
        </h1>
      </div>
    );
  } else {
    return (
      <div className="create-user  w-full h-screen grid place-items-center">
        <h1 className="place-self-center text-5xl font-light">
          Cannot Find Requested Page
        </h1>
      </div>
    );
  }
  //   return component;
}
