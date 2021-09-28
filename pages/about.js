import { Info, Layout, Leadership, SEOTags } from "../components";

export default function AboutPage() {
  return (
    <Layout>
      <SEOTags
        title="About"
        description="Quality pruning improves the health and appearance of trees, prolonging their useful life by removing undesirable branches, whether they are dead, weakened, diseased, or insect-infested."
      />
      <Leadership />
      <Info />
    </Layout>
  );
}
