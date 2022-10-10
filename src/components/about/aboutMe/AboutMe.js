import { FaGithub } from "react-icons/fa";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import Skeleton from "../../skeleton/Skeleton";
import about from "../../../assets/about.png";
import cv from "../../../assets/myCv.pdf";
import "./AboutMe.scss";

function AboutMe() {
  return (
    <Skeleton
      title="About me"
      subtitle="Let's get to know each other"
      titleProsition="center"
    >
      <div className="about_me-description">
        <img src={about} alt="me" />
        <div className="about_me-who_am_i">
          <h3>Who am I?</h3>
          <h2>
            I am Zukhriddin Mekhrullaev, a creative UX/UI Designer, ambitious
            Web Developer and just a Nice Person
          </h2>
          <p>
            I am a freelancer based in the United Kingdom and i have been
            building noteworthy UX/UI designs and websites for years, which
            comply with the latest design trends. I help convert a vision and an
            idea into meaningful and useful products. Having a sharp eye for
            product evolution helps me prioritize tasks, iterate fast and
            deliver faster.
          </p>
          <div className="about_me-summary">
            <div className="about_me-summary-inside">
              <ul>
                <li>
                  Name: <span>Zukhriddin Mekhrullaev</span>
                </li>
                <li>
                  Age: <span>23 y.o.</span>
                </li>
              </ul>
            </div>
            <div className="about_me-summary-inside">
              <ul>
                <li>
                  Email: <span className="span_email">zukhriddin853@gmail.com</span>
                </li>
                <li>
                  From: <span>Uzbekistan "I live in London"</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about_me-summary_cv">
            <a href={cv} download>
              <button type="button">Download my CV</button>
            </a>
            <p>or check out my social media</p>
            <ul>
              <li className="instagram">
                <a href="https://www.instagram.com/zukhriddin_m/?hl=en">
                  <BsInstagram />
                </a>
              </li>
              <li className="telegram">
                <a href="https://t.me/zukriddin_mekhrullaev">
                  <TbBrandTelegram />
                </a>
              </li>
              <li className="whatsapp">
                <a href="https://wa.me/447851421816">
                  {" "}
                  <BsWhatsapp />
                </a>
              </li>
              <li className="github">
                <a href="https://github.com/Zukha-16">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Skeleton>
  );
}

export default AboutMe;
