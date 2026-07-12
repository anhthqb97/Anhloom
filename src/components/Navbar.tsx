import Link from "next/link";
import { type ReactNode } from "react";

import { Container } from "@/components/Container";
import { cn } from "@/lib/cn";

const desktopNavLinks = [
  { label: "Services", href: "/services", hasMegaMenu: true as const },
  { label: "Solutions", href: "/solutions", hasMegaMenu: true as const },
  { label: "Portfolio", href: "/portfolio", hasMegaMenu: false as const },
  { label: "Blog", href: "/blog", hasMegaMenu: false as const },
  { label: "Careers", href: "/careers", hasMegaMenu: false as const },
] as const;

function NavbarDesktopLinks({ className }: { className?: string }) {
  return (
    <nav
      className={cn("hidden items-center gap-6 laptop:flex", className)}
      aria-label="Main navigation"
    >
      {desktopNavLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-body-md font-medium text-text-secondary transition-colors hover:text-text-primary"
        >
          {link.label}
          {link.hasMegaMenu ? (
            <span className="ml-0.5 text-text-muted" aria-hidden="true">
              ▾
            </span>
          ) : null}
        </Link>
      ))}
    </nav>
  );
}

type NavbarProps = {
  logo?: ReactNode;
  children?: ReactNode;
};

export function Navbar({ logo, children }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 h-14 laptop:h-16">
      <Container className="flex h-full items-center justify-between gap-6">
        <div className="flex shrink-0 items-center">
          {logo ?? (
            <Link
              href="/"
              className="text-heading-md font-semibold text-text-primary"
            >
              Anhloom
            </Link>
          )}
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <NavbarDesktopLinks />
          {children}
        </div>
      </Container>
    </header>
  );
}
