import MediaRow from "@/UI/MediaRow";
import FeaturedMedia from "@/UI/FeaturedMedia";
import MainLayout from "@/components/mainLayout";
import CastInfo from "@/UI/CastInfo";
import AuthCheck from "@/components/AuthCheck";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Placeholder from "@/UI/Placeholder";
// import LazyLoad from "react-lazyload";

export default function SingleMedia() {
  const router = useRouter();
  const { id , mediaType} = router.query;

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${id}%7D?api_key=1418807822dc08d848a20722bb586c6f`
      )
      .then((success) => {
        console.log(success);
        setData(success.data);
      })
      .catch((error) => {
        console.log("FAIL:", error);
      });
  }, [id]);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={mediaType === 'movie' ? data.title : data.name}
        location={mediaType === 'tv' ? data.overview : data.tagline}
        mediaURL={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
        type="single"
      />
      {/* <LazyLoad
        offset={-400}
        placeholder={
          <Placeholder size={"small-v"} title={"Similar Searches"} />
        }
      > */}
        <MediaRow
          title={"Similar Searches"}
          size={"small-v"}
          endpoint={`${mediaType}/${id}/similar?`}
          mediaType = {mediaType}
        />
      {/* </LazyLoad> */}
      <CastInfo mediaID = {id} mediaType = {mediaType} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  // Pass data to the page via props
  return { props: { params: context.params } };
}
