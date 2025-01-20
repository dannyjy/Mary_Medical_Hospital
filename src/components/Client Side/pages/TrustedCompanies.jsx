import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import {TrustedCompaniesData} from "../../../data.js";
import { Swiper, SwiperSlide } from 'swiper/react';

const TrustedCompanies = () => {
    return (
        <div className="py-12 px-5">
            <h1 className="text-3xl text-center pb-10">Trusted By</h1>
            <Swiper
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: true,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay,FreeMode]}
                className={"w-full xl:w-[80%] h-[70px] px-5 py-8"}
            >
            <article className="gap-2">
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
    return <img src={imageUrl} alt="" className="h-full rounded-xl"/>
}

export default TrustedCompanies;