import ResumeEE from "../resume/ResumeEE/ResumeEE";
import ResumeSkills from "../resume/resumeSkills/ResumeSkills";
import ResumeLanguages from "../resume/resumeLanguages/ResumeLanguages";
import ResumeInterests from "../resume/resumeInterests/ResumeInterests";

function ResumePage() {
  return (
    <>
      <ResumeEE />
      <ResumeSkills />
      <ResumeLanguages />
      <ResumeInterests />
    </>
  );
}

export default ResumePage;
