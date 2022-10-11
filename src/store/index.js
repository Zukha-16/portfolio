import header from "../components/header/headerSlice";
import home from "../components/home/homeSlice";
import testimonials from "../components/about/aboutSlider/testimonialsSlice";
import resumeExperience from "../components/resume/ResumeEE/resumeExperienceSlice";
import resumeEducation from "../components/resume/ResumeEE/resumeEducationSlice";
import resumeSkills from "../components/resume/resumeSkills/resumeSkillsSlice";
import resumeInterests from "../components/resume/resumeInterests/resumeInterestsSlice";
import resumeLanguages from "../components/resume/resumeLanguages/resumeLanguagesSlice";

import { configureStore } from "@reduxjs/toolkit";

const middleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({
      type: action,
    });
  }
  return next(action);
};

const reducers = {
  header: header,
  home: home,
  testimonials: testimonials,
  resumeExperience: resumeExperience,
  resumeEducation: resumeEducation,
  resumeSkills: resumeSkills,
  resumeInterests: resumeInterests,
  resumeLanguages: resumeLanguages,
};

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
