import ResumeEE from "../resume/ResumeEE/ResumeEE";
import ResumeSkills from "../resume/resumeSkills/ResumeSkills";
import ResumeLanguages from "../resume/resumeLanguages/ResumeLanguages";
import ResumeInterests from "../resume/resumeInterests/ResumeInterests";
import Footer from "../footer/Footer";
import EmptySpaceFiller from "../footer/EmptySpaceFiller";

function ResumePage() {
  return (
    <>
      <ResumeEE />
      <ResumeSkills />
      <ResumeLanguages />
      <ResumeInterests />
      <EmptySpaceFiller height={5}/>
      <Footer />
    </>
  );
}

export default ResumePage;
