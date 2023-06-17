import Login from "@/components/Login";
import { Router } from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/mainLayout";
import FeaturedMedia from "@/UI/FeaturedMedia";
import ForYouList from "@/UI/deletedFiles/ForYouList";
import JustAdded from "@/UI/deletedFiles/JustAdded";
import PosterView from "@/UI/deletedFiles/PosterView";
import AuthCheck from "@/components/AuthCheck";
import MediaRow from "@/UI/MediaRow";

export default function Home() {
  const router = useRouter();


  return AuthCheck (
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title = {'Movies'} size={'large-v'} endpoint = {'movie/popular?'}/>
      <MediaRow title = {'Series'} size={'small-h'} endpoint = {'tv/popular?'}/>
      <MediaRow title = {'Action'} size={'small-v'} endpoint = {'discover/movie?with_genres=28&primary_release_year=2023&'}/>
      <MediaRow title = {'Horror'} size={'small-v'} endpoint = {'discover/movie?with_genres=27&primary_release_year=2023&'}/>
      <MediaRow title = {'Sci-fi'} size={'small-v'} endpoint = {'discover/movie?with_genres=878&primary_release_year=2023&'}/>
    </MainLayout>
  );
}
