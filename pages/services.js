import { Services, Layout, SEOTags } from "../components";

export default function ServicesPage() {
  return (
    <Layout>
      <SEOTags
        title="Services"
        description="We take on jobs of all sizes from pruning, fertilizing, or removing one small tree to large-scale management or removal projects."
      />
      <Services />
    </Layout>
  );
}
