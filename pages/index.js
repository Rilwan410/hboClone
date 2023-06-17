import Login from "@/components/Login";
import { Router } from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/mainLayout";
import FeaturedMedia from "@/UI/FeaturedMedia";
import ForYouList from "@/UI/ForYouList";
import JustAdded from "@/UI/JustAdded";
import PosterView from "@/UI/PosterView";
import AuthCheck from "@/components/AuthCheck";

export default function Home() {
  const router = useRouter();
  // useEffect(()=>{
  //   const loggedIn = false
  //   if(!loggedIn){
  //       router.push('/create')
  //     }
  // }, [])

  return AuthCheck (
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  );
}
