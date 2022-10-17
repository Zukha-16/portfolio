export default {
  name: "interests",
  title: "Interests",
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
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
