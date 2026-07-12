import { Input } from "@/components/Input";

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-body-sm font-medium text-text-primary"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function ContactForm() {
  return (
    <form className="space-y-5">
      <FormField label="Name" htmlFor="contact-name">
        <Input id="contact-name" name="name" autoComplete="name" />
      </FormField>

      <FormField label="Email" htmlFor="contact-email">
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
        />
      </FormField>

      <FormField label="Company" htmlFor="contact-company">
        <Input
          id="contact-company"
          name="company"
          autoComplete="organization"
        />
      </FormField>
    </form>
  );
}
