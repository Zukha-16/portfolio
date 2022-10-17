export default {
  name: "about_me",
  title: "About me",
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
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "li_name",
      title: "List Name",
      type: "string",
    },
    {
      name: "li_age",
      title: "List Age",
      type: "number",
    },
    {
      name: "li_email",
      title: "List Email",
      type: "email",
    },
    {
      name: "li_from",
      title: "List Country",
      type: "string",
    },
    {
      name: "cv",
      title: "CV",
      type: "file",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
      ],
    },
    {
      name: "mainImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "title",
    },
  },
};
