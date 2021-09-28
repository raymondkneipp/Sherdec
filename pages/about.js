import { Info, Layout, Leadership, SEOTags } from "../components";

export default function AboutPage() {
  return (
    <Layout>
      <SEOTags title="About" />
      <Leadership />
      <Info />
    </Layout>
  );
}
