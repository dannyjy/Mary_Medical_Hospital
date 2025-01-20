import 'swiper/css';
import 'swiper/css/free-mode';
import Image from "../../../ui/Image.jsx";
import {GalleryData} from "../../../data.js";
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HospitalGallery = () => {
    return (
        <div className="grid justify-items-center py-10 px-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold pb-8">Mary Medical Hospital</h1>
            <Swiper
                freeMode={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[FreeMode]}
                className={"w-full h-full py-8 lg:p-8"}
            >
                <div className="gap-4">
                    {
                        GalleryData.map((item,index) => (
                            <SwiperSlide key={index} >
                                <Image imageUrl={item.ImageUrl} />
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </div>
    )
}


export default HospitalGallery;