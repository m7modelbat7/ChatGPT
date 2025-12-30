import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <div className="container py-12">
      <Card>
        <CardContent className="prose max-w-none dark:prose-invert">
          <h1>Terms of Service</h1>
          <p>
            By using the Lumière Atelier site, you agree to our terms. Purchases are
            subject to availability and confirmation.
          </p>
          <h2>Orders</h2>
          <p>
            Orders are processed within 2 business days. You will receive tracking
            details by email.
          </p>
          <h2>Returns</h2>
          <p>
            Unused products may be returned within 30 days. Contact
            concierge@lumiereatelier.com for assistance.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
