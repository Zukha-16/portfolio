export default {
  name: "about_services",
  title: "About services",
  type: "document",
  fields: [
    {
      name: "order",
      title: "Order",
      type: "number",
    },
    {
      name: "name",
      title: "Service name",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
