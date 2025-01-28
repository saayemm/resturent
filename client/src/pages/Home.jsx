import Banner from "../components/banner/Banner"
import PopularMenu from "../components/popularMenu/PopularMenu";
import Category from './../components/category/Category';



const Home = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
    </div>
  )
}

export default Home