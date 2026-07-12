import { defineArrayMember, defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
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
      name: "tagline",
      title: "Tagline",
      type: "string",
    }),
    defineField({
      name: "overviewHeading",
      title: "Overview Heading",
      type: "string",
    }),
    defineField({
      name: "overview",
      title: "Overview Body",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "benefits",
      title: "Benefits",
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
            defineField({ name: "icon", type: "string", title: "Icon Label" }),
          ],
        }),
      ],
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
            defineField({
              name: "imageSide",
              type: "string",
              title: "Image Side",
              options: { list: ["left", "right"] },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "workflow",
      title: "Workflow Steps",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "question", type: "string", title: "Question" }),
            defineField({ name: "answer", type: "text", title: "Answer" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "pricing",
      title: "Pricing Note",
      type: "string",
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "title", type: "string", title: "Meta Title" }),
        defineField({
          name: "description",
          type: "text",
          title: "Meta Description",
          rows: 3,
        }),
        defineField({
          name: "ogImage",
          type: "url",
          title: "Open Graph Image URL",
        }),
      ],
    }),
  ],
});
