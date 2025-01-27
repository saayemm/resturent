import Banner from "../components/banner/Banner"
import Category from './../components/category/Category';



const Home = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
        <Banner></Banner>
        <Category></Category>
    </div>
  )
}

export default Home