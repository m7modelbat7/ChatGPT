import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Shipping & Returns",
};

export default function ShippingPage() {
  return (
    <div className="container py-12">
      <Card>
        <CardContent className="prose max-w-none dark:prose-invert">
          <h1>Shipping & Returns</h1>
          <p>
            We offer complimentary shipping on orders over $75. Standard delivery is
            3-5 business days.
          </p>
          <h2>Returns</h2>
          <p>
            Returns are accepted within 30 days of delivery for unopened items.
            Contact our concierge team for a return label.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
