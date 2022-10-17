export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position",
      type: "string",
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
