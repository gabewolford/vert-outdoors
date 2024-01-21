import { defineField } from "sanity";

export const brands = {
  name: "brands",
  type: "document",
  title: "🫱🏽‍🫲🏾 Brands",
  groups: [
    {
      name: "brandAssets",
      title: "Brand Assets",
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
      of: [
        {
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
        },
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
};
