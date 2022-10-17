export default {
  name: "languages",
  title: "Languages",
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
      name: "greeting",
      title: "Greeting",
      type: "string",
    },
    {
      name: "level",
      title: "Level",
      type: "number",
    },
    {
      name: "langImg",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
