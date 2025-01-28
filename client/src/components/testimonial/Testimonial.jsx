import SectionTitle from "../shared/sectionTitle/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch("reviews.json")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
  return (
    <div className="max-w-[800px] mx-auto">
        <SectionTitle
        subHeading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}></SectionTitle>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       {
        reviews.map(review=> <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center w-2/3 mx-auto mb-8">
                <Rating
                    style={{ maxWidth: 120 }}
                     value={review.rating}
                     readOnly
                      />
                <p className="text-center mt-4">{review.details}</p>
                <p className="text-4xl font-bold mt-2">{review.name}</p>
            </div>
        </SwiperSlide>)
       }
      </Swiper>
    </div>
  )
}

export default Testimonial