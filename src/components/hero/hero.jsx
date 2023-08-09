import axios from "axios"
import "./hero.scss"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';


import { useRef, useState, useEffect } from "react"
import hero1 from "../../assets/imgs/imge-movei.png"
import hero2 from "../../assets/svg/movie-watch.svg"
import hero3 from "../../assets/svg/movie-star1.svg"
import hero41 from "../../assets/imgs/hero-img1.png"
import hero42 from "../../assets/imgs/hero-img2.png"
import hero43 from "../../assets/imgs/hero-img3.png"
import hero44 from "../../assets/imgs/hero-img4.png"
import hero45 from "../../assets/imgs/hero-img5.png"
import hero46 from "../../assets/imgs/hero-img6.png"
import hero47 from "../../assets/imgs/hero-down1.png"
import hero48 from "../../assets/imgs/hero-down2.png"
import hero49 from "../../assets/imgs/hero-down3.png"
import hero410 from "../../assets/imgs/hero-down4.png"
import hero411 from "../../assets/imgs/hero-down5.png"
import hero412 from "../../assets/imgs/hero-down6.png"




function Hero() {

    const [data, setData] = useState([])

    useEffect(() => {
        // axios("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie").then((res)=> setData(data))
        fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie")
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])

    const getData = data.slice(0, 4)

    return (
        <section className="section-hero" >
            <div className="container">
                <div className="hero-box">
                    <ul className="hero-link">
                        <li className="hero-link-links1">
                            <div className="hero-link-links1-item1">
                                <h4 className="hero-link-links1-item1-h4">ONLINE STREAMING</h4>
                                <h2 className="hero-link-links1-item1-h2">Upcoming Movies</h2>
                            </div>
                            <div className="hero-link-links1-item2">
                                <div className="hero-link-links1-item2-items">Movies</div>
                                <div className="hero-link-links1-item2-items">TVs Shows</div>
                                <div className="hero-link-links1-item2-items">Anime</div>
                            </div>
                        </li>

                        <li className="hero-link-links2">
                            {
                                getData?.map((item, index) => {
                                    return (
                                        <div className="hero-link-links2-films">
                                            <img className="hero-data-img" src={item.img} alt="error" width={'294px'} height={'391px'} />
                                            <div className="hero-link-links2-films-about">
                                                <div className="name-year">
                                                    <p className="films-name">{item.name}</p>
                                                    <span className="films-year">{item.year}</span>
                                                </div>
                                                <div className="quality-time-rating">
                                                    <div className="films-quality">{item.quality}</div>
                                                    <div className="films-time-rating">
                                                        <div className="films-time"><img src={hero2} alt="error" />{item.time} min</div>
                                                        <div className="films-rating"><img src={hero3} alt="error" />{item.rating}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </li>

                        <li className="hero-link-links3">
                            <Swiper
                                // slidesPerView={1}
                                // spaceBetween={10}
                                // pagination={{
                                //     clickable: true,
                                // }}
                                autoplay={{
                                    delay: 2000,
                                    // speed:1000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        // spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        // spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        // spaceBetween: 50,
                                    },
                                }}
                                modules={[Autoplay]}
                                className="mySwiper"
                            >

                                <SwiperSlide><img src={hero47} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero48} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero49} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero410} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero411} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero412} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero41} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero42} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero43} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero44} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero45} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero46} alt="error" /></SwiperSlide>
                            </Swiper>
                            <Swiper
                            
                                autoplay={{
                                    delay: 2000,
                                    speed:1000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        // spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        // spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        // spaceBetween: 50,
                                    },
                                }}
                                modules={[Autoplay]}
                                className="mySwiper1"
                            >
                                <SwiperSlide><img src={hero41} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero42} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero43} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero44} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero45} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero46} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero47} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero48} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero49} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero410} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero411} alt="error" /></SwiperSlide>
                                <SwiperSlide><img src={hero412} alt="error" /></SwiperSlide>
                            </Swiper>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero