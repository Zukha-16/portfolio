import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import store from "../../../store";
import { selectAll, fetchResumeLanguages } from "./resumeLanguagesSlice";

import Skeleton from "../../skeleton/Skeleton";
import RingLoader from "react-spinners/RingLoader";
import "./ResumeLanguages.scss";

function ResumeLanguages() {
  const { resumeLanguagesLoadingStatus } = useSelector(
    (state) => state.resumeLanguages
  );
  const dispatch = useDispatch();
  const resumeLanguages = selectAll(store.getState());

  useEffect(() => {
    dispatch(fetchResumeLanguages());
    // eslint-disable-next-line
  }, []);
  // console.log(resumeSkills);
  return (
    <Skeleton
      title="Languages"
      subtitle="A different language is a different vision of life"
      titleProsition="left"
    >
      <div className="languages">
      {resumeLanguagesLoadingStatus === "loading" ? (
            <RingLoader color="rgb(228, 48, 63" />
          ) : null}
        {resumeLanguages.map((language) => {
          return (
            <div key={language.id} className="language_info">
              <h3>
                {language.name}: <span>{language.level}%</span>
              </h3>
              <div className="language_flag">
                <img src={language.url} alt="" />
                <div className="arc arc_start"></div>
                <div className={`arc arc_end progress-${language.level}`}></div>
              </div>
              <p>{language.greeting}</p>
            </div>
          );
        })}
      </div>
    </Skeleton>
  );
}

export default ResumeLanguages;
