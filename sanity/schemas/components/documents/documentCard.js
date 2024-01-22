import { defineType, defineField, defineArrayMember } from "sanity";
import { DocumentsIcon, LinkIcon } from "@sanity/icons";

export const documentCard = defineType({
  name: "documentCard",
  type: "object",
  title: "Document Card",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Brand Name",
      description: "The name of the brand.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
      description: "The photo to featured on the brands page.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Brand Documents",
      description: "Links to feature on the Documents page.",
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            {
              name: "url",
              type: "string",
              title: "URL",
              description: "The URL to link to.",
            },
            {
              name: "text",
              type: "string",
              title: "Text",
              description: "Text to display for the link.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "file",
              type: "file",
              title: "File Upload",
              description: "PDF to display for the link.",
            },
          ],
          preview: {
            select: {
              title: "text",
              image: "logo",
              subtitle: "url",
            },
            prepare({ title, subtitle }) {
              return {
                title: title || "N/A",
                subtitle: subtitle || "Link",
                media: LinkIcon,
              };
            },
          },
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
  icon: DocumentsIcon,
  preview: {
    select: {
      title: "name",
      image: "logo",
    },
    prepare({ title, image }) {
      return {
        title: title || "N/A",
        subtitle: "Document Card",
        media: image || DocumentsIcon,
      };
    },
  },
});
