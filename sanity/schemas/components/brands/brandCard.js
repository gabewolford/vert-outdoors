import { defineType, defineField, defineArrayMember } from "sanity";
import { SplitVerticalIcon } from "@sanity/icons";

export const brandCard = defineType({
  name: "brandCard",
  type: "object",
  title: "Brands",
  groups: [
    {
      name: "brandAssets",
      title: "Brand Assets",
    },
    {
      name: "brandDocuments",
      title: "Brand Documents",
    },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      description: "The name of the brand.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "website",
      type: "url",
      title: "Website",
      description: "The URL of the brand's website.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
      group: "brandAssets",
      description: "The photo to featured on the brands page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brandLogo",
      type: "image",
      title: "Brand Logo",
      group: "brandAssets",
      description: "The logo to be featured with brand assets.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      type: "string",
      title: "Tagline",
      description: "The brand's tagline, mission, etc.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "paragraph",
      type: "text",
      title: "Paragraph 1",
      description: "Description of the brands product offerings.",
      validation: (Rule) => Rule.required().min(50).max(600),
    }),
    defineField({
      name: "paragraph2",
      type: "text",
      title: "Paragraph 2 (optional)",
      description: "Description of the brands product offerings (cont.)",
      validation: (Rule) => Rule.max(600),
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Brand Links",
      description: "Links to feature on the Documents page.",
      group: "brandDocuments",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "url",
              type: "url", // Assuming URL is a string, you can use "url" type
              title: "URL",
              description: "The URL to link to.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "text",
              type: "string",
              title: "Text",
              description: "Text to display for the link.",
              validation: (Rule) => Rule.required(),
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
      description: "Order to display brands alongside other brands.",
      validation: (Rule) => Rule.required().integer(),
    }),
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
  icon: SplitVerticalIcon,
  preview: {
    select: {
      title: "name",
      image: "featuredImage",
    },
    prepare({ title, image }) {
      return {
        title: title || "N/A",
        subtitle: "Brand Card",
        media: image || SplitVerticalIcon,
      };
    },
  },
});
