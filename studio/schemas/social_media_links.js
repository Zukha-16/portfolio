export default {
  name: "social_media_links",
  title: "Social media links",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "className",
      title: "Class name",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "className",
    },
  },
};
