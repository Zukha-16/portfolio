import Skeleton from "../../skeleton/Skeleton";
import "./ResumeEE.scss";

function ResumeEE({ education, experience }) {
  return (
    <Skeleton title="Resume" subtitle="Check out my Resume">
      <div className="resumeEE">
        <div className="resume__education">
          {education.map((item) => {
            return (
              <div key={item.order}>
                <h2>{item.name}</h2>
                <h3>
                  {item.location} / {item.fromDate.slice(0, 4)} -{" "}
                  {item.untillDate.slice(0, 4)}
                </h3>
                <p>{item.description}</p>
                <span></span>
              </div>
            );
          })}
        </div>
        <div className="resume__experience">
          {experience.map((item) => {
            return (
              <div key={item.order}>
                <h2>{item.name}</h2>
                <h3>
                  {item.location} / {item.fromDate.slice(0, 4)} -{" "}
                  {item.untillDate.slice(0, 4)}
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
