import { useEffect, useState } from "react";
import sanityClient from "../../client";

import AboutMe from "../about/aboutMe/AboutMe";
import AboutServices from "../about/aboutServices/AboutServices";
import AboutSlider from "../about/aboutSlider/AboutSlider";
import Footer from "../footer/Footer";
import EmptySpaceFiller from "../footer/EmptySpaceFiller";
import RingLoader from "react-spinners/RingLoader";
import "../../styles/style.scss";

function AboutPage() {
  const [aboutMe, setAboutMe] = useState(null);
  const [socialMedia, setSocialMedia] = useState(null);
  const [services, setServices] = useState(null);
  const [testimonials, setTestimonials] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      Promise.all([
        await sanityClient
          .fetch(
            `*[_type == "about_me"]{ title, subTitle, description, li_name, li_age, li_email, li_from, cv{asset->{url}}, mainImage{asset->{_id, url}, alt} }`
          )
          .then((response) => setAboutMe(response)),
        await sanityClient
          .fetch(`*[_type == "social_media_links"]{ className, url, order }`)
          .then((response) => {
            setSocialMedia(response.sort((a, b) => a.order - b.order));
          }),
        await sanityClient
          .fetch(`*[_type == "about_services"]{ order, name, description }`)
          .then((response) => {
            setServices(response.sort((a, b) => a.order - b.order));
          }),
        await sanityClient
          .fetch(`*[_type == "testimonials"]{ name, position, comment }`)
          .then((response) => setTestimonials(response)),
      ])
        .then(() => {
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    request();
  }, []);

  return (
    <>
      {loading ? (
        <RingLoader color={"rgb(70, 156, 107)"} />
      ) : (
        <>
          <AboutMe aboutMe={aboutMe} socialMedia={socialMedia} />
          <AboutServices services={services} />
          <AboutSlider testimonials={testimonials} />
          <EmptySpaceFiller height={5} />
          <Footer />
        </>
      )}
    </>
  );
}

export default AboutPage;
