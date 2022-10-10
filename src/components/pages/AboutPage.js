import AboutMe from "../about/aboutMe/AboutMe";
import AboutServices from "../about/aboutServices/AboutServices";
import AboutSlider from "../about/aboutSlider/AboutSlider";
import Skeleton from "../skeleton/Skeleton";

import "../../styles/style.scss";

function AboutPage() {
  return (
    <>
      <AboutMe />
      <AboutServices />
      <AboutSlider />
    </>
  );
}

export default AboutPage;
