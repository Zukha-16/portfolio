import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import store from "../../../store";
import { selectAll, fetchResumeSkills } from "./resumeSkillsSlice";

import Skeleton from "../../skeleton/Skeleton";
import RingLoader from "react-spinners/RingLoader";
import "./ResumeSkills.scss";

import React from "react";

function ResumeSkills() {
  const { resumeSkillsLoadingStatus } = useSelector(
    (state) => state.resumeSkills
  );
  const dispatch = useDispatch();
  const resumeSkills = selectAll(store.getState());

  useEffect(() => {
    dispatch(fetchResumeSkills());
    // eslint-disable-next-line
  }, []);
  // console.log(resumeSkills);
  return (
    <Skeleton
      title="Skills"
      subtitle="My level of knowledge in some technologies"
      titleProsition="left"
    >
      {" "}
      <div className="resume__skills">
        {resumeSkillsLoadingStatus === "loading" ? (
          <RingLoader color="rgb(228, 48, 63" />
        ) : null}
        {resumeSkills.map((skill) => {
          return (
            <div key={skill.id} className="skill_info">
              <div className="skill_name">
                <span>{skill.name}</span>
                <span
                  className="skill_percentage"
                  style={{ paddingLeft: `${skill.level}%` }}
                >
                  {skill.level}%
                </span>
              </div>

              <div className="skill_progressBar">
                <span style={{ width: `${skill.level}%` }}></span>
              </div>
            </div>
          );
        })}
      </div>
    </Skeleton>
  );
}

export default ResumeSkills;
