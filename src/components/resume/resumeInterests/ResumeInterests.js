import { MdSportsTennis } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { MdConstruction } from "react-icons/md";
import {CgGym} from 'react-icons/cg'
import Skeleton from "../../skeleton/Skeleton";
import "./ResumeInterests.scss";

function ResumeInterests({ interests }) {
  const interestsIcons = {
    tennis: <MdSportsTennis />,
    driving: <IoCarSportSharp />,
    gym: <CgGym />,
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
            </div>
          );
        })}
      </div>
    </Skeleton>
  );
}

export default ResumeInterests;
