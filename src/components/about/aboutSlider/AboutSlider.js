import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectAll, fetchTestimonials } from "./testimonialsSlice";
import Slider from "react-slick";
import store from "../../../store";
import RingLoader from "react-spinners/RingLoader";
import { FaUserCircle, FaQuoteRight } from "react-icons/fa";

import Skeleton from "../../skeleton/Skeleton";
import "./AboutSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutSlider() {
  const { testimonialsLoadingStatus } = useSelector(
    (state) => state.testimonials
  );

  const testimonials = selectAll(store.getState());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTestimonials());
    // eslint-disable-next-line
  }, []);

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
      {testimonialsLoadingStatus === "loading" ? (
        <RingLoader color="rgb(228, 48, 63" />
      ) : null}
      <Slider {...settings}>
        {testimonials.map((person) => {
          return (
            <div key={person.id} className="slider__container">
              <div className="testimonial">
                <div className="testimonial__content">
                  <div className="testimonial__content_person">
                    <div className="testimonial__person_name">
                      <FaUserCircle />

                      <div>
                        <h4>{person.name}</h4>
                        <h5>{person.position}</h5>
                      </div>
                    </div>

                    <FaQuoteRight className="quote__color" />
                  </div>
                  <p>{person.comment}</p>
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
