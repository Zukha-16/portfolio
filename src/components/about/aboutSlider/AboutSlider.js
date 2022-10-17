// import { useEffect } from "react";
import Slider from "react-slick";
// import RingLoader from "react-spinners/RingLoader";
import { FaUserCircle, FaQuoteRight } from "react-icons/fa";

import Skeleton from "../../skeleton/Skeleton";
import "./AboutSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutSlider({ testimonials }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <Skeleton
      title={"Testimonials"}
      subtitle="What my clients think about me"
      titleProsition="left"
    >
      <Slider {...settings}>
        {testimonials.map((testimonial) => {
          return (
            <div key={testimonial.name} className="slider__container">
              <div className="testimonial">
                <div className="testimonial__content">
                  <div className="testimonial__content_person">
                    <div className="testimonial__person_name">
                      <FaUserCircle />

                      <div>
                        <h4>{testimonial.name}</h4>
                        <h5>{testimonial.position} </h5>
                      </div>
                    </div>

                    <FaQuoteRight className="quote__color" />
                  </div>
                  <p>{testimonial.comment}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </Skeleton>
  );
}

export default AboutSlider;
