import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
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
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          name: "heroSection",
          title: "Hero",
          type: "object",
          fields: [
            defineField({ name: "eyebrow", type: "string", title: "Eyebrow" }),
            defineField({ name: "headline", type: "string", title: "Headline" }),
            defineField({ name: "subtext", type: "text", title: "Subtext" }),
          ],
        }),
        defineArrayMember({
          name: "richTextSection",
          title: "Rich Text",
          type: "object",
          fields: [
            defineField({ name: "heading", type: "string", title: "Heading" }),
            defineField({ name: "body", type: "text", title: "Body", rows: 6 }),
          ],
        }),
      ],
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
      ],
    }),
  ],
});
