import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
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
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "AI",
          "SaaS",
          "FinTech",
          "Healthcare",
          "Education",
          "Logistics",
        ],
      },
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "technologies",
      title: "Technologies Label",
      type: "string",
      description: "Short label for cards, e.g. React · FastAPI · AWS",
    }),
    defineField({
      name: "result",
      title: "Result Highlight",
      type: "string",
      description: "Short outcome for cards, e.g. +40% conversion",
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "industry",
      title: "Client Industry",
      type: "string",
    }),
    defineField({
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "solution",
      title: "Solution",
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
      name: "technologyList",
      title: "Technologies",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "metric", type: "string", title: "Metric" }),
            defineField({ name: "label", type: "string", title: "Label" }),
          ],
        }),
      ],
    }),
  ],
});
