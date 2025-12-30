import { ContactForm } from "@/components/contact-form";

export const metadata = {
  title: "Contact",
  description: "Contact Lumière Atelier for concierge support and press inquiries.",
};

export default function ContactPage() {
  return (
    <div className="container space-y-10 py-12">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Contact
        </p>
        <h1 className="font-display text-4xl md:text-5xl">
          Let&apos;s create your ritual
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Reach our concierge for product guidance, press requests, or partnership
          inquiries.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
