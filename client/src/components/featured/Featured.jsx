import bgImage from '../../assets/featured.jpg'
import SectionTitle from '../shared/sectionTitle/SectionTitle'
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured-iteam bg-fixed text-white '>
      <div className='bg-[#15151566] p-12 pb-20'>
      <SectionTitle
       subHeading={"---Check it out---"}
       heading={"FROM OUR MENU"}></SectionTitle>
       <div className='flex gap-8 justify-center items-center'>
        <img className='max-w-[500px] rounded-2xl' src={bgImage} alt="" />
        <div className='flex flex-col max-w-[500px] items-start'>
            <p>March 20, 2023</p>
            <p>WHERE CAN I GET SOME?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. 
                Eaque repellat recusandae ad laudantium tempore consequatur consequuntur 
                omnis ullam maxime tenetur.
             </p>
             <button className='mt-4 border-b-2 rounded-2xl px-6 py-2 cursor-pointer'>Read More</button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Featured