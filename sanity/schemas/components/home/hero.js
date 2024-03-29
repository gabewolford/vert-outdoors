import { defineField, defineType } from "sanity";
import { PresentationIcon } from "@sanity/icons";

export const hero = defineType({
  name: "hero",
  type: "object",
  title: "Hero",
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
  icon: PresentationIcon,
  preview: {
    select: {
      title: "heading",
      image: "image",
    },
    prepare({ title, image }) {
      return {
        title: title || "N/A",
        subtitle: "Hero",
        media: image,
      };
    },
  },
});
