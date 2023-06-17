import MainLayout from "@/components/mainLayout";
import FeaturedMedia from "@/UI/FeaturedMedia";
import ForYouList from "@/UI/deletedFiles/ForYouList";
import JustAdded from "@/UI/deletedFiles/JustAdded";
import PosterView from "@/UI/deletedFiles/PosterView";

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
