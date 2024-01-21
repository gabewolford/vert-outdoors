import { defineField, defineType } from "sanity";
import { SplitVerticalIcon } from "@sanity/icons";

export const imageAndText = defineType({
  name: "imageAndText",
  type: "object",
  title: "Image and Text",
  fields: [
    defineField({
      name: "heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subheading",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "buttonText",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "linkTo",
      type: "string",
      options: {
        list: ["/", "/brands", "/team", "/documents", "/contact"],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        defineField({
          name: "altText",
          type: "string",
          title: "Alternative text",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  icon: SplitVerticalIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "N/A",
        subtitle: "Image and Text",
        media: image || SplitVerticalIcon,
      };
    },
  },
});
