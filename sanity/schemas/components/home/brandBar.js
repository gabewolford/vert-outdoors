import { defineField, defineType } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const brandBar = defineType({
  name: "brandBar",
  type: "object",
  title: "Brand Bar",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Brand Logos",
      of: [
        {
          name: "brands",
          type: "object",
          title: "Brands",
          fields: [
            defineField({
              name: "logo",
              type: "image",
              title: "Logo",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "name",
              type: "string",
              title: "Brand Name",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "order",
              type: "number",
              title: "Order",
              description: "Order to display brands alongside other brands.",
              validation: (Rule) => Rule.required().integer(),
            }),
          ],
        },
      ],
    },
  ],
  orderings: [
    {
      title: "Displayed Order",
      name: "displayedOrder",
      by: [
        {
          field: "order",
          direction: "asc",
        },
      ],
    },
  ],
  icon: ImagesIcon,
  preview: {
    prepare() {
      return {
        title: "Images",
        subtitle: "Brand Logo Bar",
        media: ImagesIcon,
      };
    },
  },
});
