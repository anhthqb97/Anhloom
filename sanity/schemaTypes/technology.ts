import { defineArrayMember, defineField, defineType } from "sanity";

export const technology = defineType({
  name: "technology",
  title: "Technology",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Frontend",
          "Backend",
          "Cloud",
          "AI",
          "Infrastructure",
          "DevOps",
          "Database",
          "Security",
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "experienceLevel",
      title: "Experience Level",
      type: "string",
      options: { list: ["Expert", "Advanced", "Proficient"] },
    }),
    defineField({
      name: "relatedProjects",
      title: "Related Project Slugs",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
