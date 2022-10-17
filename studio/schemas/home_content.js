export default {
  name: "home_content",
  title: "Home content",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "Sub title",
      type: "string",
    },
    {
      name: "typewriter",
      title: "Typewriter",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "button",
      title: "Button",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
