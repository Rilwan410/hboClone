import MainLayout from "@/components/mainLayout";
import FeaturedMedia from "@/UI/FeaturedMedia";
import MediaRow from "@/UI/MediaRow";
export default function HomeView() {
  return (
    <>
      <MainLayout>
        <FeaturedMedia />
        <MediaRow title="For You" size="large-v" />
        <MediaRow title="Just Added" size="large-v" />
        <MediaRow title="Movies" size="large-v" />
      </MainLayout>
    </>
  );
}
