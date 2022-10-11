import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAll as selectAllExperience,
  fetchResumeExperience,
} from "./resumeExperienceSlice";
import {
  selectAll as selectAllEducation,
  fetchResumeEducation,
} from "./resumeEducationSlice";
import store from "../../../store";

import Skeleton from "../../skeleton/Skeleton";
import RingLoader from "react-spinners/RingLoader";
import "./ResumeEE.scss";

function ResumeEE() {
  const { resumeExperienceLoadingStatus } = useSelector(
    (state) => state.resumeExperience
  );
  const { resumeEducationLoadingStatus } = useSelector(
    (state) => state.resumeEducation
  );
  const dispatch = useDispatch();

  const resumeExperience = selectAllExperience(store.getState());
  const resumeEducation = selectAllEducation(store.getState());

  useEffect(() => {
    dispatch(fetchResumeExperience());
    dispatch(fetchResumeEducation());
    // eslint-disable-next-line
  }, []);

  return (
    <Skeleton title="Resume" subtitle="Check out my Resume">
      <div className="resumeEE">
        <div className="resume__education">
          {resumeEducationLoadingStatus === "loading" ? (
            <RingLoader color="rgb(228, 48, 63" />
          ) : null}
          {resumeEducation.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <h3>
                  {item.location} / {item.from} - {item.until}
                </h3>
                <p>{item.description}</p>
                <span></span>
              </div>
            );
          })}
        </div>
        <div className="resume__experience">
          {resumeExperienceLoadingStatus === "loading" ? (
            <RingLoader color="rgb(228, 48, 63" />
          ) : null}
          {resumeExperience.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.name}</h2>
                <h3>
                  {item.location} / {item.from} - {item.until}
                </h3>
                <p>{item.description}</p>
                <span></span>
              </div>
            );
          })}
        </div>
      </div>
    </Skeleton>
  );
}

export default ResumeEE;
