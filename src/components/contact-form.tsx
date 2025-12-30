"use client";

import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const onChange = (key: keyof typeof form) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
    };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const nextErrors = [];
    if (!form.name.trim()) nextErrors.push("Please add your name.");
    if (!form.email.includes("@")) nextErrors.push("Please add a valid email.");
    if (!form.message.trim()) nextErrors.push("Please add a message.");
    setErrors(nextErrors);
    setSubmitted(nextErrors.length === 0);
    if (nextErrors.length === 0) {
      setForm(initialState);
    }
  };

  return (
    <Card>
      <CardContent className="space-y-6">
        {submitted && (
          <p className="rounded-2xl bg-accent p-4 text-sm">
            Thank you! Our atelier team will be in touch shortly.
          </p>
        )}
        {errors.length > 0 && (
          <div className="rounded-2xl border border-border bg-muted/50 p-4 text-sm">
            <ul className="list-disc space-y-2 pl-4">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <Input
            placeholder="Name"
            value={form.name}
            onChange={onChange("name")}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            value={form.email}
            onChange={onChange("email")}
            required
          />
          <Input
            placeholder="Subject"
            value={form.subject}
            onChange={onChange("subject")}
            className="md:col-span-2"
          />
          <Textarea
            placeholder="Message"
            value={form.message}
            onChange={onChange("message")}
            className="md:col-span-2"
            required
          />
          <div className="md:col-span-2">
            <Button size="lg" type="submit">
              Send message
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
