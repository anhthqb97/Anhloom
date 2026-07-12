import { Container } from "@/components/Container";
import { CostEstimator } from "@/components/estimator/CostEstimator";
import { Section } from "@/components/Section";
import { buildSiteMetadata } from "@/lib/seo";

export const metadata = buildSiteMetadata({
  title: "AI Cost Estimator",
  description:
    "Estimate your software project budget with Anhloom's AI-powered cost estimator.",
  path: "/estimate",
});

export default function EstimatePage() {
  return (
    <Section padding="lg">
      <Container>
        <CostEstimator />
      </Container>
    </Section>
  );
}
