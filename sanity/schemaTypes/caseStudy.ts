import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
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
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
    }),
    defineField({
      name: "executiveSummary",
      title: "Executive Summary",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "challenges",
      title: "Business Challenges",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "research",
      title: "Research & Discovery",
      type: "text",
      rows: 4,
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
      name: "timeline",
      title: "Development Process",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "phase", type: "string", title: "Phase" }),
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
    defineField({
      name: "lessonsLearned",
      title: "Lessons Learned",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "projectRef",
      title: "Related Project Slug",
      type: "string",
      description: "Optional link to a portfolio project slug",
    }),
  ],
});
