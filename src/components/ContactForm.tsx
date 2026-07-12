import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { services } from "@/lib/services";

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

      <FormField label="Service interest" htmlFor="contact-service">
        <Select id="contact-service" name="service" defaultValue="">
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.href} value={service.title}>
              {service.title}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Message" htmlFor="contact-message">
        <Textarea id="contact-message" name="message" rows={5} />
      </FormField>

      <Button type="submit" size="lg" className="w-full laptop:w-auto">
        Send Message
      </Button>
    </form>
  );
}
