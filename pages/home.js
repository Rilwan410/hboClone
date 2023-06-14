import MainLayout from "@/components/mainLayout";
import FeaturedMedia from "@/UI/FeaturedMedia";
import ForYouList from "@/UI/ForYouList";
import JustAdded from "@/UI/JustAdded";
import PosterView from "@/UI/PosterView";

export default function HomeView() {
  return (
    <>
      <MainLayout>
        <FeaturedMedia />
        <ForYouList />
        <JustAdded />
        <PosterView/>
      </MainLayout>
    </>
  );
}
