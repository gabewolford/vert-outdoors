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
          type: "reference",
          title: "Brands",
          to: [{ type: "brands" }],
          select: {
            name: "name",
            brandLogo: "brandLogo",
          },
        },
      ],
    },
  ],
  icon: ImagesIcon,
  preview: {
    prepare() {
      return {
        title: "Brand Bar",
        media: ImagesIcon,
      };
    },
  },
});
