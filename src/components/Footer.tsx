import Link from "next/link";

import { Container } from "@/components/Container";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { FooterSocial } from "@/components/FooterSocial";
import { footerLinkGroups } from "@/lib/nav";

type FooterLinkGroupProps = {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
};

function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <div>
      <h3 className="mb-4 text-body-sm font-semibold text-text-primary">
        {title}
      </h3>
      <ul className="flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-body-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-subtle">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-8 laptop:grid-cols-4">
          <FooterLinkGroup title="Company" links={footerLinkGroups.company} />
          <FooterLinkGroup title="Services" links={footerLinkGroups.services} />
          <FooterLinkGroup
            title="Resources"
            links={footerLinkGroups.resources}
          />
          <FooterLinkGroup title="Legal" links={footerLinkGroups.legal} />
          <FooterNewsletter />
        </div>
        <FooterSocial className="mt-10" />
      </Container>
    </footer>
  );
}
