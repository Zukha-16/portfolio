import AboutMe from "../about/aboutMe/AboutMe";
import AboutServices from "../about/aboutServices/AboutServices";
import AboutSlider from "../about/aboutSlider/AboutSlider";
import Footer from "../footer/Footer";
import EmptySpaceFiller from "../footer/EmptySpaceFiller";
import "../../styles/style.scss";

function AboutPage() {
  return (
    <>
      <AboutMe />
      <AboutServices />
      <AboutSlider />
      <EmptySpaceFiller height={5}/>
            <Footer />

    </>
  );
}

export default AboutPage;

