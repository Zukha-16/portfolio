export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      name: "level",
      title: "Level",
      type: "number",
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
