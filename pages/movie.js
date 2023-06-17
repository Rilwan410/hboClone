import FeaturedMedia from "@/UI/FeaturedMedia"
import MainLayout from "@/components/mainLayout"
import PosterView from "@/UI/deletedFiles/PosterView"
import CastInfo from "@/UI/CastInfo"
import AuthCheck from "@/components/AuthCheck"
import MediaRow from "@/UI/MediaRow"


export default function Movies() {


  return AuthCheck (
<MainLayout>
<MediaRow/>
</MainLayout>
  )
}
