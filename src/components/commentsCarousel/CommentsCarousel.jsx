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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const CommentsCarousel = () => {
  // const testimonials = [
  //   {
  //     name: "Viezh Robert",
  //     location: "Warsaw, Poland",
  //     rate: "4.5",
  //     linkImg: "https://testimonialapi.toolcarton.com/avatar/9.jpg",
  //     comment:
  //       "“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.",
  //   },

  //   {
  //     name: "Yessica Christy",
  //     location: "Shanxi, China",
  //     rate: "4.5",
  //     linkImg: "https://testimonialapi.toolcarton.com/avatar/2.jpg",
  //     comment:
  //       "“I like it because I like to travel far and still can connect with high speed.”.",
  //   },
  //   {
  //     name: "Kim Young Jou",
  //     location: "Seoul, South Korea",
  //     rate: "4.5",
  //     linkImg: "https://testimonialapi.toolcarton.com/avatar/1.jpg",
  //     comment:
  //       "“This is very unusual for my business that currently requires a virtual private network that has high security.”.",
  //   },
  //   {
  //     name: "Lance Jarvis",
  //     location: "London, UK",
  //     rate: "4.8",
  //     linkImg: "https://testimonialapi.toolcarton.com/avatar/3.jpg",
  //     comment:
  //       "“We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.”.",
  //   },
  //   {
  //     name: "Kylie Lutz",
  //     location: "Paris, France",
  //     rate: "5",
  //     linkImg: "https://testimonialapi.toolcarton.com/avatar/5.jpg",
  //     comment:
  //       "“The company really helped with my personal branding - everything from conception to execution was amazing and super professional. Looking forwards for upgradation.”.",
  //   },
  //   {
  //     name: "Diane Smith",
  //     location: "New York, USA",
  //     rate: "4.1",
  //     linkImg: "https://testimonialapi.toolcarton.com/avatar/4.jpg",
  //     comment:
  //       "“Team offers a powerful suite of tools that every client must have. And if you get stuck their support team will help out. Its is fast, reliable and has no complications at all.”.",
  //   },
  //   {
  //     name: "Mikayla Mccullough",
  //     location: "Madrid, Spain",
  //     rate: "4.9",
  //     linkImg: "https://testimonialapi.toolcarton.com/avatar/10.jpg",
  //     comment:
  //       "“The vibe, level of inquiry, feedback and traffic at our product services and newly designed booth at a recent conference was very positive.”.",
  //   },
  //   {
  //     name: "Kamren Hays",
  //     location: "Florida, USA",
  //     rate: "4.1",
  //     linkImg: "https://testimonialapi.toolcarton.com/avatar/8.jpg",
  //     comment:
  //       "“Product bring 10x multiplier in terms of both ease and spread of use. I'm able to quickly and easily execute on my marketing strategies.”.",
  //   },
  // ];

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: imgGirl,
    }));
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
          <Slider {...settings}>
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
