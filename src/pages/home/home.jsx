import "./home.scss"

// import imges
import home1 from "../../assets/svg/hero-link-links-material-play.svg"
import home2 from "../../assets/svg/hero-icons-calender.svg"
import wallper1 from "../../assets/imgs/home-wallpaper1.jpg"
import wallper2 from "../../assets/imgs/home-wallpaper2.jpg"
import wallper3 from "../../assets/imgs/home-wallpaper3.jpg"
import wallper4 from "../../assets/imgs/home-wallpaper4.jpg"
import wallper5 from "../../assets/imgs/home-wallpaper5.jpg"
import wallper6 from "../../assets/imgs/home-wallpaper6.jpg"
import wallper7 from "../../assets/imgs/home-wallpaper7.jpg"
import wallper8 from "../../assets/imgs/home-wallpaper8.jpg"
//  import imges
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";




function Home() {
  return (
    <section className="section-home">
      <div className="home-swiper">
        <Swiper
          className="mySwiper"
        >
          <SwiperSlide><img src={wallper1} alt="error" /></SwiperSlide>
          <SwiperSlide><img src={wallper2} alt="error" /></SwiperSlide>
          <SwiperSlide><img src={wallper3} alt="error" /></SwiperSlide>
          <SwiperSlide><img src={wallper4} alt="error" /></SwiperSlide>
          <SwiperSlide><img src={wallper5} alt="error" /></SwiperSlide>
          <SwiperSlide><img src={wallper6} alt="error" /></SwiperSlide>
          <SwiperSlide><img src={wallper7} alt="error" /></SwiperSlide>
          <SwiperSlide><img src={wallper8} alt="error" /></SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="home-box">
          <ul className="home-link">
            <li className="home-links">
              <div className="ttt2">
                <h3 className="home-links-title">Filmagnet</h3>
                <h2 className="home-links-text">Unlimited <span className="home-links-text-span">Entertainment</span>,</h2>
                <h3 className="home-links-text2">Movies, TVs shows, & More.</h3>
              </div>
              <div className="home-links-mqgc">
                <div className="mqgc-item1">
                  <div className="movie">Movie</div>
                  <div className="quality">HD</div>
                  <div className="gener">Action,Drama</div>
                  <div className="calendar"><img src={home2} alt="error" /> 2023</div>
                </div>
                <button className="home-links-btn"><img src={home1} alt="error" />PLAY NOW</button>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Home


