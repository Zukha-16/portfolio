import Skeleton from "../../skeleton/Skeleton";
import "./ResumeSkills.scss";


function ResumeSkills({skills}) {

  return (
    <Skeleton
      title="Skills"
      subtitle="My level of knowledge in some technologies"
      titleProsition="left"
    >
      {" "}
      <div className="resume__skills">
     
        {skills.map((skill) => {
          return (
            <div key={skill.order} className="skill_info">
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
