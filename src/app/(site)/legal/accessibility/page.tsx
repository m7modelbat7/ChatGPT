import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Accessibility",
};

export default function AccessibilityPage() {
  return (
    <div className="container py-12">
      <Card>
        <CardContent className="prose max-w-none dark:prose-invert">
          <h1>Accessibility</h1>
          <p>
            Lumière Atelier is committed to inclusive experiences. We follow WCAG
            guidelines to ensure our site remains accessible.
          </p>
          <p>
            If you need assistance, email access@lumiereatelier.com and we will
            respond within 2 business days.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
