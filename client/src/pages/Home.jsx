import Banner from "../components/banner/Banner"
import Featured from "../components/featured/Featured";
import PopularMenu from "../components/popularMenu/PopularMenu";
import Testimonial from "../components/testimonial/Testimonial";
import Category from './../components/category/Category';
import { Helmet } from 'react-helmet-async';



const Home = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Helmet>
        <title>Urban Flavors | Home</title>
      </Helmet>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonial></Testimonial>
    </div>
  )
}

export default Home