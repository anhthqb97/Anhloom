"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail("");
  };

  return (
    <div className="col-span-2 laptop:col-span-4">
      <h3 className="mb-2 text-body-sm font-semibold text-text-primary">
        Stay in the loop
      </h3>
      <p className="mb-4 max-w-md text-body-sm text-text-secondary">
        Get product insights and engineering updates from the Anhloom team.
      </p>
      <form
        className="flex max-w-md flex-col gap-3 tablet:flex-row"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          name="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          aria-label="Email address"
          className="flex-1"
        />
        <Button type="submit" size="md" className="shrink-0">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
