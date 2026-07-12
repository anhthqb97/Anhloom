"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type ReactNode, useState } from "react";

import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Drawer } from "@/components/Drawer";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  MegaMenu,
  MegaMenuColumn,
  MegaMenuLink,
} from "@/components/MegaMenu";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import {
  primaryNavLinks,
  serviceNavLinks,
  solutionNavLinks,
} from "@/lib/nav";
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

function SolutionsMegaMenu() {
  return (
    <MegaMenu label="Solutions" href="/solutions">
      <MegaMenuColumn title="Solutions" className="col-span-2">
        {solutionNavLinks.map((link) => (
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
      <SolutionsMegaMenu />
      {desktopNavLinks.slice(2).map((link) => (
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

function NavbarMobileMenu({ onNavigate }: { onNavigate: () => void }) {
  const router = useRouter();

  const handleNavigate = (href: string) => {
    onNavigate();
    router.push(href);
  };

  return (
    <div className="flex h-full flex-col gap-6 overflow-y-auto">
      <nav className="flex flex-col gap-6" aria-label="Mobile navigation">
        <div>
          <p className="mb-3 text-label font-semibold uppercase tracking-wide text-text-muted">
            Services
          </p>
          <ul className="flex flex-col gap-2">
            {serviceNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-body-md text-text-secondary hover:text-text-primary"
                  onClick={onNavigate}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-label font-semibold uppercase tracking-wide text-text-muted">
            Solutions
          </p>
          <ul className="flex flex-col gap-2">
            {solutionNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-1 text-body-md text-text-secondary hover:text-text-primary"
                  onClick={onNavigate}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-col gap-2 border-t border-border pt-4">
          {primaryNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-1 text-body-md font-medium text-text-primary"
                onClick={onNavigate}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto flex flex-col gap-3 border-t border-border pt-6">
        <ThemeToggle className="w-full laptop:hidden" />
        <Button
          variant="secondary"
          size="md"
          className="w-full"
          onClick={() => handleNavigate("/contact")}
        >
          Contact
        </Button>
        <Button
          size="md"
          className="w-full"
          onClick={() => handleNavigate("/contact?intent=meeting")}
        >
          Book Meeting
        </Button>
      </div>
    </div>
  );
}

type NavbarProps = {
  logo?: ReactNode;
  children?: ReactNode;
};

export function Navbar({ logo, children }: NavbarProps) {
  const scrolled = useScrollPosition();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-14 transition-colors duration-200 laptop:h-16",
        scrolled
          ? "border-b border-border bg-surface/90 backdrop-blur-[12px] dark:bg-surface/80"
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
          <ThemeToggle className="hidden laptop:inline-flex" />
          {children}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm text-text-primary laptop:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>
      <Drawer open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <NavbarMobileMenu onNavigate={() => setMobileOpen(false)} />
      </Drawer>
    </header>
  );
}
