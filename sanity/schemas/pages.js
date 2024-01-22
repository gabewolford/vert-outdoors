import { defineArrayMember, defineField, defineType } from "sanity";

export const pages = defineType({
  name: "pages",
  type: "document",
  title: "📄 Pages",
  fields: [
    defineField({
      name: "title",
      title: "Page Name",
      type: "string",
      options: {
        list: [
          { title: "Home", value: "Home" },
          { title: "Brands", value: "Brands" },
          { title: "Team", value: "Team" },
          { title: "Documents", value: "Documents" },
          { title: "Contact", value: "Contact" },
        ],
      },
    }),
    defineField({
      name: "pageItems",
      type: "array",
      title: "Page Items",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
          title: "Hero",
        }),
        defineArrayMember({
          name: "brandBar",
          type: "brandBar",
          title: "Brand Bar",
        }),
        defineArrayMember({
          name: "imageAndText",
          type: "imageAndText",
          title: "Image and Text",
        }),
        defineArrayMember({
          name: "brandCard",
          type: "brandCard",
          title: "Brand Card",
        }),
      ],
    }),
  ],
});
