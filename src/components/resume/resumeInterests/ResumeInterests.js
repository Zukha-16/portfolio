import { MdSportsTennis } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCampingTent } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import Skeleton from "../../skeleton/Skeleton";
import "./ResumeInterests.scss";

function ResumeInterests({ interests }) {
  const interestsIcons = {
    tennis: <MdSportsTennis />,
    driving: <IoCarSportSharp />,
    camping: <GiCampingTent />,
    diy: <MdConstruction />,
  };

  return (
    <Skeleton
      title="My interests"
      subtitle="What I do when I am free"
      titleProsition="left"
    >
      <div className="interests">
        {interests.map((interest) => {
          return (
            <div key={interest.order} className="interests_info">
              {interestsIcons[interest.name.toLowerCase()]}
              <h3>{interest.name}</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
                numquam.
              </p>
            </div>
          );
        })}
      </div>
    </Skeleton>
  );
}

export default ResumeInterests;
