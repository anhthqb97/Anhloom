import Link from "next/link";
import { type ReactNode } from "react";

import { Container } from "@/components/Container";

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
          {children}
        </div>
      </Container>
    </header>
  );
}
