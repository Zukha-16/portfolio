import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import header_links from "./header_links";
import home_content from "./home_content";
import social_media_links from "./social_media_links";
import testimonials from "./testimonials";
import about_me from "./about_me";
import about_services from "./about_services";
import experience from "./experience";
import education from "./education";
import languages from "./languages";
import interests from "./interests";
import skills from "./skills";
import author from "./author";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    header_links,
    author,
    home_content,
    social_media_links,
    testimonials,
    about_me,
    about_services,
    experience,
    education,
    languages,
    interests,
    skills,
  ]),
});
