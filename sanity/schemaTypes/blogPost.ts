import { defineArrayMember, defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "authorRole",
      title: "Author Role",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "AI",
          "Engineering",
          "Cloud",
          "DevOps",
          "Startup",
          "Product",
          "Tutorials",
        ],
      },
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
    defineField({
      name: "readingTime",
      title: "Reading Time",
      type: "string",
      description: 'e.g. "6 min read"',
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "id", type: "string", title: "Section ID" }),
            defineField({ name: "heading", type: "string", title: "Heading" }),
            defineField({
              name: "content",
              type: "text",
              title: "Content",
              rows: 4,
            }),
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
        defineField({
          name: "ogImage",
          type: "url",
          title: "Open Graph Image URL",
        }),
      ],
    }),
  ],
});
