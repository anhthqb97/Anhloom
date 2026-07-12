"use client";

import { type FormEvent, useState } from "react";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Select } from "@/components/Select";
import { Textarea } from "@/components/Textarea";
import { services } from "@/lib/services";
import { cn } from "@/lib/cn";

type ContactFormValues = {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

function validateForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.company.trim()) {
    errors.company = "Company is required.";
  }

  if (!values.service) {
    errors.service = "Select a service interest.";
  }

  if (!values.message.trim()) {
    errors.message = "Message is required.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  }

  return errors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-1 text-body-sm text-error" role="alert">
      {message}
    </p>
  );
}

function FormField({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
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
      <FieldError message={error} />
    </div>
  );
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof ContactFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-md border border-border bg-surface p-8 text-center">
        <h2 className="text-heading-lg font-semibold text-text-primary">
          Thanks for reaching out
        </h2>
        <p className="mt-3 text-body-md text-text-secondary">
          We received your message and will get back to you within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <FormField label="Name" htmlFor="contact-name" error={errors.name}>
        <Input
          id="contact-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={(event) => handleChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          className={cn(errors.name && "border-error")}
        />
      </FormField>

      <FormField label="Email" htmlFor="contact-email" error={errors.email}>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(event) => handleChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          className={cn(errors.email && "border-error")}
        />
      </FormField>

      <FormField label="Company" htmlFor="contact-company" error={errors.company}>
        <Input
          id="contact-company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(event) => handleChange("company", event.target.value)}
          aria-invalid={Boolean(errors.company)}
          className={cn(errors.company && "border-error")}
        />
      </FormField>

      <FormField
        label="Service interest"
        htmlFor="contact-service"
        error={errors.service}
      >
        <Select
          id="contact-service"
          name="service"
          value={values.service}
          onChange={(event) => handleChange("service", event.target.value)}
          aria-invalid={Boolean(errors.service)}
          className={cn(errors.service && "border-error")}
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.href} value={service.title}>
              {service.title}
            </option>
          ))}
        </Select>
      </FormField>

      <FormField label="Message" htmlFor="contact-message" error={errors.message}>
        <Textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          className={cn(errors.message && "border-error")}
        />
      </FormField>

      <Button type="submit" size="lg" className="w-full laptop:w-auto">
        Send Message
      </Button>
    </form>
  );
}
