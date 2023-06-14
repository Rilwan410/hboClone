import FeaturedMedia from "@/UI/FeaturedMedia"
import MainLayout from "@/components/mainLayout"
import PosterView from "@/UI/PosterView"
import CastInfo from "@/UI/CastInfo"


export default function Movies() {


  return (
<MainLayout>
  <FeaturedMedia/>
  <PosterView/>
  <CastInfo/>
</MainLayout>
  )
}
