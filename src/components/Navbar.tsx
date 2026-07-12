"use client";

import Link from "next/link";
import { type ReactNode } from "react";

import { Container } from "@/components/Container";
import {
  MegaMenu,
  MegaMenuColumn,
  MegaMenuLink,
} from "@/components/MegaMenu";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { serviceNavLinks } from "@/lib/nav";
import { cn } from "@/lib/cn";

const desktopNavLinks = [
  { label: "Services", href: "/services", hasMegaMenu: true as const },
  { label: "Solutions", href: "/solutions", hasMegaMenu: true as const },
  { label: "Portfolio", href: "/portfolio", hasMegaMenu: false as const },
  { label: "Blog", href: "/blog", hasMegaMenu: false as const },
  { label: "Careers", href: "/careers", hasMegaMenu: false as const },
] as const;

function ServicesMegaMenu() {
  return (
    <MegaMenu label="Services" href="/services">
      <MegaMenuColumn title="Services" className="col-span-2">
        {serviceNavLinks.map((link) => (
          <MegaMenuLink key={link.href} href={link.href}>
            {link.label}
          </MegaMenuLink>
        ))}
      </MegaMenuColumn>
    </MegaMenu>
  );
}

function NavbarDesktopLinks({ className }: { className?: string }) {
  return (
    <nav
      className={cn("hidden items-center gap-6 laptop:flex", className)}
      aria-label="Main navigation"
    >
      <ServicesMegaMenu />
      {desktopNavLinks.slice(1).map((link) => (
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
  const scrolled = useScrollPosition();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-14 transition-colors duration-200 laptop:h-16",
        scrolled
          ? "border-b border-border bg-surface/80 backdrop-blur-[12px]"
          : "bg-transparent",
      )}
    >
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
