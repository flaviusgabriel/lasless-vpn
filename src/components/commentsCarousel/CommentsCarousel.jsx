import "./comments-carousel.scss";
import CardComponent from "../cardComponent/CardComponent";
import Button from "../common/Button/Button";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";

import { testimonials } from "./Datas";

import imgGirl from "../../assets/img/Profile.jpg";
import { dataDigitalBestSeller } from "./Data";
import { useRef } from "react";

import styles from "./comments-carousel.scss";

const CommentsCarousel = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    dotsClass: "button__bar",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    // dotsClass: "button__bar",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Next - Prev buttons
  const customeSlider = useRef();

  const next = () => {
    customeSlider.current.slickNext();
  };

  const previous = () => {
    customeSlider.current.slickPrev();
  };

  const settingsNoModules = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "button__bar",
    arrows: false,
  };

  const settingsWithModules = {
    ...settings,
    dotsClass: styles.button__bar,
  };
  return (
    <div class="comments">
      <div class="container card-carousel">
        <div class="px-4 text-center">
          <div class="comments-title">
            <h1>Trusted by Thousands of Happy Customer</h1>
          </div>
          <div class="col-lg-6 mx-auto">
            <div class="comments-subtitle">
              <p>
                These are the stories of our customers who have joined us with
                great pleasure when using this crazy feature.
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="py-5 container">
          <Slider {...settings} ref={customeSlider}>
            {testimonials.map((item, index) => {
              return (
                <div key={index}>
                  <div className="slider single-item card-component">
                    <CardComponent
                      name={item.name}
                      location={item.location}
                      rate={item.rate}
                      linkImg={item.linkImg}
                      comment={item.comment}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>

          <div className="slider-control d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
            <div className="slider-control-dots col-md-4 d-flex align-items-center"></div>
            <div className="slider-control-buttons col-md-4 justify-content-end list-unstyled d-flex">
              <button className="slidingButtons " onClick={previous}>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </button>
              <button className="slidingButtons " onClick={next}>
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>

        {/* <Slider {...settings}>
          {dataDigitalBestSeller.map((item) => (
            <div className="card">
              <div className="card-top">
                <img
                  src={
                    defaultImage[item.title] === item.title
                      ? defaultImage.linkDefault
                      : item.linkImg
                  }
                  alt={item.title}
                  onError={handleErrorImage}
                />
                <h1>{item.title}</h1>
              </div>
              <div className="card-bottom">
                <h3>{item.price}</h3>
                <span className="category">{item.category}</span>
              </div>
            </div>
          ))}
        </Slider> */}

        {/* Subscription */}
        <div class="subscription container ">
          <div class="subscription-section container ">
            <div class="row d-flex justify-content-center g-lg-3 py-5 shadow p-3 mb-5 bg-body rounded container ">
              <div class="container col-lg-5 text-center text-lg-start  ">
                <div class="subs-title">
                  <h1>Subscribe Now for Get Special Features!</h1>
                </div>
                <div class="subs-subtitle">
                  <p class="col-lg-10 ">
                    Let's subscribe with us and find the fun.
                  </p>
                </div>
              </div>
              <div class="col-md-10 mx-auto col-lg-5 d-flex flex-row-reverse align-items-center">
                <div class="subs-but">
                  <Button
                    styleClass="button-get-started"
                    value="Subscribe Now"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsCarousel;
