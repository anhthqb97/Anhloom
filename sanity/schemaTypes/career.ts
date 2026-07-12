import { defineArrayMember, defineField, defineType } from "sanity";

export const career = defineType({
  name: "career",
  title: "Career Position",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "department",
      title: "Department",
      type: "string",
      options: {
        list: ["Engineering", "Design", "Product", "Operations"],
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "employmentType",
      title: "Employment Type",
      type: "string",
      options: { list: ["Full-time", "Part-time", "Contract", "Remote"] },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
