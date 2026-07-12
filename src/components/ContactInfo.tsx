import Link from "next/link";

import { Card } from "@/components/Card";
import { cn } from "@/lib/cn";

const contactDetails = {
  email: "hello@anhloom.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, San Francisco, CA 94105",
} as const;

export function ContactInfo({ className }: { className?: string }) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="p-6">
        <h2 className="text-heading-lg font-semibold text-text-primary">
          Contact information
        </h2>
        <dl className="mt-6 space-y-4">
          <div>
            <dt className="text-label font-semibold uppercase tracking-wide text-text-muted">
              Email
            </dt>
            <dd className="mt-1">
              <Link
                href={`mailto:${contactDetails.email}`}
                className="text-body-md text-primary-600 transition-colors hover:text-primary-700"
              >
                {contactDetails.email}
              </Link>
            </dd>
          </div>
          <div>
            <dt className="text-label font-semibold uppercase tracking-wide text-text-muted">
              Phone
            </dt>
            <dd className="mt-1">
              <Link
                href={`tel:${contactDetails.phone.replace(/[^\d+]/g, "")}`}
                className="text-body-md text-primary-600 transition-colors hover:text-primary-700"
              >
                {contactDetails.phone}
              </Link>
            </dd>
          </div>
          <div>
            <dt className="text-label font-semibold uppercase tracking-wide text-text-muted">
              Address
            </dt>
            <dd className="mt-1 text-body-md text-text-secondary">
              {contactDetails.address}
            </dd>
          </div>
        </dl>
      </div>
    </Card>
  );
}
