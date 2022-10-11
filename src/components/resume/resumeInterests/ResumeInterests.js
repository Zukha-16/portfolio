import { selectAll, fetchResumeInterests } from "./resumeInterestsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../store";

import RingLoader from "react-spinners/RingLoader";
import { MdSportsTennis } from "react-icons/md";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCampingTent } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import Skeleton from "../../skeleton/Skeleton";
import "./ResumeInterests.scss";

function ResumeInterests() {
  const { resumeInterestsLoadingStatus } = useSelector(
    (state) => state.resumeInterests
  );
  const dispatch = useDispatch();
  const resumeInterests = selectAll(store.getState());

  const interestsIcons = {
    tennis: <MdSportsTennis />,
    driving: <IoCarSportSharp />,
    camping: <GiCampingTent />,
    diy: <MdConstruction />,
  };

  useEffect(() => {
    dispatch(fetchResumeInterests());
    // eslint-disable-next-line
  }, []);

  return (
    <Skeleton
      title="My interests"
      subtitle="What I do when I am free"
      titleProsition="left"
    >
      <div className="interests">
        {resumeInterestsLoadingStatus === "loading" ? (
          <RingLoader color="rgb(228, 48, 63" />
        ) : null}
        {resumeInterests.map((interest) => {
          return (
            <div key={interest.id} className="interests_info">
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
