import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import {TrustedCompaniesData} from "../../../data.js";
import { Swiper, SwiperSlide } from 'swiper/react';

const TrustedCompanies = () => {
    return (
        <div className="py-4">
            <h1 className="text-3xl text-center">Trusted By</h1>
            <Swiper
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
                modules={[Autoplay,FreeMode]}
                className={"w-full xl:w-[80%] h-[150px] px-5 py-8"}
            >
            <article>
                {
                    TrustedCompaniesData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Images imageUrl={item.imageUrl}/>
                        </SwiperSlide>
                    ))
                }
            </article>
            </Swiper>
        </div>
    )
}

function Images({imageUrl}) {
    return <img src={imageUrl} alt="" className=" h-full rounded-xl aspect-video"/>
}

export default TrustedCompanies;