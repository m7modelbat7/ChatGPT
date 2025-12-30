import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <div className="container py-12">
      <Card>
        <CardContent className="prose max-w-none dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p>
            Lumière Atelier respects your privacy. We collect only the information
            required to fulfill orders, provide support, and personalize your
            experience.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Contact information for order fulfillment.</li>
            <li>Purchase history to tailor your rituals.</li>
            <li>Optional newsletter preferences.</li>
          </ul>
          <p>
            We never sell your personal data. For requests, email
            privacy@lumiereatelier.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
