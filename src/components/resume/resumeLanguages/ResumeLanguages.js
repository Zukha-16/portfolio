import Skeleton from "../../skeleton/Skeleton";
import "./ResumeLanguages.scss";

function ResumeLanguages({ languages }) {
  return (
    <Skeleton
      title="Languages"
      subtitle="A different language is a different vision of life"
      titleProsition="left"
    >
      <div className="languages">
        {languages.map((language) => {
          return (
            <div key={language.order} className="language_info">
              <h3>
                {language.name} <span>{language.level}%</span>
              </h3>
              <div className="language_flag">
                <img src={language.langImg.asset.url} alt="" />
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
