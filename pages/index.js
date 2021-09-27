import {
  Hero,
  Services,
  Certifications,
  Testimonials,
  Layout,
  CTA,
} from "../components";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services simplified />
      <Certifications />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
