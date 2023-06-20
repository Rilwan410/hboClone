import Login from "@/components/Login";
import { Router } from "next/router";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/mainLayout";
import FeaturedMedia from "@/UI/FeaturedMedia";
import AuthCheck from "@/components/AuthCheck";
import MediaRow from "@/UI/MediaRow";
import LazyLoad from "react-lazyload";
import Placeholder from "@/UI/Placeholder";

export default function Home() {
  const router = useRouter();

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaURL="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&start=16"
        title="Mortal Kombat"
        linkURL="/movies/id"
        location="In Theaters And On HBO MAX. Streaming throughout May 23."
        type="front"
      />

      <LazyLoad
        offset={-680}
        placeholder={<Placeholder size={"large-v"} title={"Movies"} />}
      >
        <MediaRow
          title={"Movies"}
          size={"large-v"}
          endpoint={"movie/popular?"}
        />
      </LazyLoad>

      <LazyLoad
        offset={-200}
        height={333}
        placeholder={<Placeholder size={"small-h"} title={"Series"} />}
      >
        <MediaRow title={"Series"} size={"small-h"} endpoint={"tv/popular?"} category = 'tv' />
      </LazyLoad>

      <LazyLoad
        height={333}
        offset={-200}
        placeholder={<Placeholder size={"small-v"} title={"Action"} />}
      >
        <MediaRow
          title={"Action"}
          size={"small-v"}
          endpoint={"discover/movie?with_genres=28&primary_release_year=2023&"}
        />
      </LazyLoad>

      <LazyLoad
        offset={-200}
        placeholder={<Placeholder size={"small-v"} title={"Horror"} />}
      >
        <MediaRow
          title={"Horror"}
          size={"small-v"}
          endpoint={"discover/movie?with_genres=27&primary_release_year=2023&"}
        />
      </LazyLoad>

      <LazyLoad
        offset={-200}
        placeholder={<Placeholder size={"small-v"} title={"Sci-fi"} />}
      >
        <MediaRow
          title={"Sci-fi"}
          size={"small-v"}
          endpoint={"discover/movie?with_genres=878&primary_release_year=2023&"}
        />
      </LazyLoad>
    </MainLayout>
  );
}
