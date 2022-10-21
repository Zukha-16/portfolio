import {GrHostMaintenance} from 'react-icons/gr'
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import {SiGoogleoptimize} from 'react-icons/si'
import {MdOutlineDesignServices} from 'react-icons/md'
import {BsArrowsMove} from 'react-icons/bs'
import Skeleton from "../../skeleton/Skeleton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../aboutSlider/AboutSlider.scss";
import "./AboutServices.scss";

function AboutServices({ services }) {
  const getServiceIcon = (name) => {
    switch (name) {
      case "Web App Development":
        return <AiFillHtml5 />;
      case "Technical SEO":
        return <SiGoogleoptimize/>;
      case "UI UX Design":
        return <MdOutlineDesignServices />;
      case "Support and Maintenance":
        return <GrHostMaintenance />;
      case "Migration To React":
        return <FaReact />;
      case "Fully responsive":
        return <BsArrowsMove />;

      default:
        break;
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: window.innerWidth > 550 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3700,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <Skeleton
      title="My services"
      subtitle="Services I offer to my clients"
      titleProsition="left"
    >
      {window.innerWidth < 992 ? (
        <Slider {...settings}>
          {services.map((service) => {
            return (
              <div key={service.order} className="slider__container">
                <div className="service_inner_container">
                  <div className="slider_wrapper">
                    <div className="slider_title_container">
                      <div className="slider_title service_logo">
                        {getServiceIcon(service.name)}
                        <div>
                          <h4>{service.name}</h4>
                        </div>
                      </div>
                    </div>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        <>
          {" "}
          <div className="about_sevrices breaker">
            {services.map((service) => {
              if (service.order % 2 === 0) {
                return (
                  <div key={service.order} className='service_logo'>
                    {getServiceIcon(service.name)}
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="about_sevrices breaker">
            {services.map((service) => {
              if (service.order % 2 === 1) {
                return (
                  <div key={service.order} className='service_logo'>
                    {getServiceIcon(service.name)}
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </>
      )}
    </Skeleton>
  );
}

export default AboutServices;
