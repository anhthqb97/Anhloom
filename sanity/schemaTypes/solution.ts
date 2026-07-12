import { defineArrayMember, defineField, defineType } from "sanity";

export const solution = defineType({
  name: "solution",
  title: "Solution",
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
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "problems",
      title: "Business Problems",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "solutionSummary",
      title: "Proposed Solution Summary",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "architectureNote",
      title: "Architecture Note",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "title", type: "string", title: "Title" }),
            defineField({
              name: "description",
              type: "text",
              title: "Description",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "integrations",
      title: "Integrations",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});
