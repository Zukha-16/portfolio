import SocailMediaLinks from "../../socailMediaLinks/SocailMediaLinks";

import Skeleton from "../../skeleton/Skeleton";
import "./AboutMe.scss";

function AboutMe({ aboutMe, socialMedia }) {
  console.log(window.innerWidth)
  return (
    <Skeleton
      title="About me"
      subtitle="Let's get to know each other"
      titleProsition="center"
    >
      <div className="about_me-description">
        <div className="about_me_img">
        <img
          src={aboutMe[0].mainImage.asset.url}
          alt={aboutMe[0].mainImage.alt}
        />
        </div>
        <div className="about_me-who_am_i">
          <h3>{aboutMe[0].title}</h3>
          <h2>{aboutMe[0].subTitle}</h2>
          <p>{aboutMe[0].description}</p>
          <div className="about_me-summary">
            <div className="about_me-summary-inside">
              <ul>
                <li>
                  Name: <span>{aboutMe[0].li_name}</span>
                </li>
                <li>
                  Age: <span>{aboutMe[0].li_age} y.o.</span>
                </li>
              </ul>
            </div>
            <div className="about_me-summary-inside">
              <ul>
                <li>
                  Email:{" "}
                  <span className="span_email">{aboutMe[0].li_email}</span>
                </li>
                <li>
                  From: <span>{aboutMe[0].li_from}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about_me-summary_cv">
            <a href={aboutMe[0].cv.asset.url} download>
              <button type="button">Download my CV</button>
            </a>
            <p>or check out my social media</p>
            <ul>
              <SocailMediaLinks arr={socialMedia} />
            </ul>
          </div>
        </div>
      </div>
    </Skeleton>
  );
}

export default AboutMe;
