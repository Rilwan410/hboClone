import FeaturedMedia from "@/UI/FeaturedMedia"
import MainLayout from "@/components/mainLayout"
import PosterView from "@/UI/PosterView"
import CastInfo from "@/UI/CastInfo"
import AuthCheck from "@/components/AuthCheck"


export default function Movies() {


  return AuthCheck (
<MainLayout>
  <FeaturedMedia/>
  <PosterView/>
  <CastInfo/>
</MainLayout>
  )
}
