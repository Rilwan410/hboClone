import MediaRow from "@/UI/MediaRow";
import FeaturedMedia from "@/UI/FeaturedMedia";
import MainLayout from "@/components/mainLayout";
import CastInfo from "@/UI/CastInfo";
import AuthCheck from "@/components/AuthCheck";

export default function Movies() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title="Similar Searches" size="small-v" />
      <CastInfo />
    </MainLayout>
  );
}
