import React, { useState, useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import AnimatedText from "./AnimatedText";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const slides = [
    { 
        img: "/assets/assets/testimonial/img-1.png",
        name: "Emma Johnson",
        message: "The service was fantastic! Highly recommend it to anyone looking for top-notch design."
    },
    { 
        img: "/assets/assets/testimonial/img-2.png",
        name: "Sophia Martinez",
        message: "I couldn't be happier with the results. The website is both beautiful and functional!"
    },
    { 
        img: "/assets/assets/testimonial/img-3.png",
        name: "James Smith",
        message: "Excellent work! The project was handled professionally from start to finish!"
    },
    { 
        img: "/assets/assets/testimonial/img-4.png",
        name: "Olivia Williams",
        message: "Everything was delivered on time, and the design exceeded my expectations."
    },
    { 
        img: "/assets/assets/testimonial/img-5.png",
        name: "Isabella Brown",
        message: "Amazing attention to detail. My site looks professional and user-friendly."
    },
    { 
        img: "/assets/assets/testimonial/img-6.png",
        name: "Liam Davis",
        message: "Ermin truly understood my needs. My website is faster and looks great."
    }
];

const Testimonial = () => {
    const swiperRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const handlePrevious = useCallback(() => {
        swiperRef.current?.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        swiperRef.current?.slideNext();
    }, []);

    return (
        <div className="py-24 overflow-hidden">
            <div className="container mx-auto">
                <AnimatedText 
                text="What Clients Say"
                textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
                />
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-max xl:w-[600px] flex flex-col justify-center
                    items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0 p-8">
                        <ImQuotesLeft className="text-9xl text-accent/20 leading-none mb-4"/>
                        <h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
                        <p className="mb-8 max-w-[360px] text-lg">
                            {slides[activeSlide].message}
                        </p>
                        <div className="flex gap-3">
                            <button onClick={handlePrevious} className="text-2xl bg-accent w-[48] h-[48] text-white
                            rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"><FiArrowLeft /></button>
                            <button onClick={handleNext} className="text-2xl bg-accent w-[48] h-[48] text-white
                            rounded-full flex items-center justify-center hover:bg-accent-hover transition-all duration-300"><FiArrowRight /></button>
                        </div>
                    </div>
                    <Swiper 
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        className="w-full h-[400px] xl:h-[500px]"
                        onSwiper={(swiper) => (swiperRef.current = swiper)}  
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }}
                        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index} className="h-full select-none">
                                <div className="w-full h-full flex items-end">
                                    <div className={`${activeSlide === index ? "h-full" : "h-[240px]"} flex items-end rounded-2xl overflow-hidden transition-all duration-500
                                    relative w-full`}>
                                        <Image 
                                            src={slide.img} 
                                            className="object-cover object-center"
                                            quality={100}
                                            fill
                                            alt={slide.name}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;