import Banner from "../components/banner/Banner"
import Featured from "../components/featured/Featured";
import PopularMenu from "../components/popularMenu/PopularMenu";
import Category from './../components/category/Category';



const Home = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
    </div>
  )
}

export default Home