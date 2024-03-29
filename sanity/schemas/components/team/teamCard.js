import { defineType, defineField } from "sanity";
import { SplitVerticalIcon } from "@sanity/icons";

export const teamCard = defineType({
  name: "teamCard",
  type: "object",
  title: "Team Card",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Name",
      description: "First and last name of team member.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      type: "string",
      title: "Title",
      description: "The title/role of the team member.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      type: "image",
      title: "Photo",
      description: "Photo of team member.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      type: "text",
      title: "Bio",
      description: "A short bio of the team member.",
      validation: (Rule) => Rule.required().min(125).max(500),
    }),
    defineField({
      name: "region",
      type: "string",
      title: "Region",
      description: "Regions covered (states, cities, regions, countries, etc).",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      type: "email",
      title: "Email",
      description: "Email of the team member",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Order",
      description: "Order to display the team member.",
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
      subtitle: "position",
      image: "photo",
    },
    prepare({ title, subtitle, image }) {
      return {
        title: title,
        subtitle: subtitle,
        media: image || SplitVerticalIcon,
      };
    },
  },
});
