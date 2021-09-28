import {
  Hero,
  Services,
  Certifications,
  Testimonials,
  Layout,
  CTA,
  SEOTags,
} from "../components";

export default function Home() {
  return (
    <Layout>
      <SEOTags />
      <Hero />
      <Services simplified />
      <Certifications />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
