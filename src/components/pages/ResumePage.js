import { useState, useEffect } from "react";
import sanityClient from "../../client";

import ResumeEE from "../resume/ResumeEE/ResumeEE";
import ResumeSkills from "../resume/resumeSkills/ResumeSkills";
import ResumeLanguages from "../resume/resumeLanguages/ResumeLanguages";
import ResumeInterests from "../resume/resumeInterests/ResumeInterests";
import Footer from "../footer/Footer";
import EmptySpaceFiller from "../footer/EmptySpaceFiller";
import RingLoader from "react-spinners/RingLoader";

function ResumePage() {
  const [loading, setLoading] = useState(true);
  const [education, setEducation] = useState(true);
  const [experience, setExperience] = useState(true);
  const [skills, setSkills] = useState(true);
  const [languages, setLanguages] = useState(true);
  const [interests, setInterests] = useState(true);

  useEffect(() => {
    const request = async () => {
      Promise.all([
        await sanityClient
          .fetch(
            `*[_type == "education"]{order, name, description, fromDate, untillDate, location}`
          )
          .then((response) =>
            setEducation(response.sort((a, b) => a.order - b.order))
          ),

        await sanityClient
          .fetch(
            `*[_type == "experience"]{order, name, description, fromDate, untillDate, location}`
          )
          .then((response) =>
            setExperience(response.sort((a, b) => a.order - b.order))
          ),

        await sanityClient
          .fetch(`*[_type == "skills"]{order, name, level}`)
          .then((response) =>
            setSkills(response.sort((a, b) => a.order - b.order))
          ),

        await sanityClient
          .fetch(
            `*[_type == "languages"]{order, name, level, greeting, langImg{asset->{url}}}`
          )
          .then((response) =>
            setLanguages(response.sort((a, b) => a.order - b.order))
          ),

        await sanityClient
          .fetch(`*[_type == "interests"]{order, name}`)
          .then((response) =>
            setInterests(response.sort((a, b) => a.order - b.order))
          ),
      ])
        .then(() => setLoading(false))
        .catch((error) => console.log(error));
    };

    request();
  }, []);

  return loading ? (
    <div className="ring_loader">
      <RingLoader color={"rgb(70, 156, 107)"} />
    </div>
  ) : (
    <>
      <ResumeEE education={education} experience={experience} />
      <ResumeSkills skills={skills} />
      <ResumeLanguages languages={languages} />
      <ResumeInterests interests={interests} />
      <EmptySpaceFiller height={5} />
      <Footer />
    </>
  );
}

export default ResumePage;
