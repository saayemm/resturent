import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/slide1.jpg'
import slide2 from '../../assets/slide2.jpg'
import slide3 from '../../assets/slide3.jpg'
import slide4 from '../../assets/slide4.jpg'
import slide5 from '../../assets/slide5.jpg'
import SectionTitle from '../shared/sectionTitle/SectionTitle';

const Category = () => {
  return (
   <div className='mb-12'>
      <SectionTitle
      subHeading={"---From 11:00am to 10:00pm---"}
      heading={"ORDER ONLINE"}>
      </SectionTitle>
     <Swiper
        slidesPerView={4}
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <p className='text-center text-white font-bold -mt-20 pb-4'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <p className='text-center text-white font-bold -mt-20'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <p className='text-center text-white font-bold -mt-20'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <p className='text-center text-white font-bold -mt-20'>Salad</p>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <p className='text-center text-white font-bold -mt-20'>Salad</p>
        </SwiperSlide>
       
      </Swiper>
   </div>
  )
}

export default Category