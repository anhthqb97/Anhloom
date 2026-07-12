import type { BlogPostSection } from "@/lib/blog-posts";

type ArticleBodyProps = {
  sections: BlogPostSection[];
};

export function ArticleBody({ sections }: ArticleBodyProps) {
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2 className="text-heading-lg font-semibold text-text-primary">
            {section.heading}
          </h2>
          <p className="mt-4 text-body-lg leading-relaxed text-text-secondary">
            {section.content}
          </p>
        </section>
      ))}
    </div>
  );
}
