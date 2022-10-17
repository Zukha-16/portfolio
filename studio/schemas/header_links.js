export default {
  name: "header_links",
  title: "Header links",
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
      name: "url",
      title: "URL",
      type: "string",
    },
  ],

  preview: {
    select: {
      title: "name",
      
    },
  },
};
