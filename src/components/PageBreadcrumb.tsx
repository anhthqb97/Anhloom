import { Container } from "@/components/Container";
import { Breadcrumb } from "@/components/Breadcrumb";
import type { BreadcrumbItem } from "@/components/Breadcrumb";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/json-ld";

type PageBreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function PageBreadcrumb({ items }: PageBreadcrumbProps) {
  return (
    <Container className="py-6">
      <Breadcrumb items={items} />
      <JsonLd data={breadcrumbJsonLd(items)} />
    </Container>
  );
}
