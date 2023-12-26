import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TrainingSlideImg1 from "../assets/img/about-removebg-preview 1.png";
import TrainingSlideImg2 from "../assets/img/traning-slider-imgs/traning-slide-img1.png";
import TrainingImg3 from "../assets/img/traning-slider-imgs/Training-img3.png";

export default function Training(){
    const traningSliders = [
        {
            id: 1,
            sliderImg: TrainingSlideImg1,
        },
        {
            id: 2,
            sliderImg: TrainingSlideImg2,
        },
        {
            id: 3,
            sliderImg: TrainingImg3,
        },
    ]
    return(
        <div className="training-slider-wrapper">
            <div className="single-slider-item">
            <Swiper
                loop={true}
                cssMode={true}
                navigation={true}
                pagination={{
                    clickable: true,
                  }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >

                {traningSliders.map((singleSlide) => (
                    <SwiperSlide key={singleSlide.id}>
                        <figure>
                            <img src={singleSlide.sliderImg} alt="" />
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}