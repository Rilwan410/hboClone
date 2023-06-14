import Login from "@/components/Login";
import { Router } from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
const router = useRouter()
useEffect(()=>{
  const loggedIn = false
  if(!loggedIn){ 
      router.push('/create')
    }
}, [])

  return (
    <>
      <Login/>
    </>
  );
}
