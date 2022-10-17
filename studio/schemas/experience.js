export default {
  name: "experience",
  title: "Experience",
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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "fromDate",
      title: "From",
      type: "date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "untillDate",
      title: "Untill",
      type: "date",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "name",
    },
  },
};
