import Link from "next/link";
import { Layout, SEOTags } from "../components";

function Tip({ title, content, pdf }) {
  return (
    <div className="collapse border rounded-box border-base-300 collapse-plus">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-bold text-primary">
        {title}
      </div>
      <div className="collapse-content">
        <div className="flex flex-col space-y-5 items-start">
          {content?.map((item, i) => (
            <p className="text-base-content" key={i}>
              {item}
            </p>
          ))}
          {pdf && (
            <Link href={`/pdfs/${pdf}`}>
              <a className="btn btn-primary">View Flyer</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function PruningTipsPage() {
  return (
    <Layout>
      <SEOTags title="Pruning Tips" />

      <div className="container py-32 max-w-screen-md">
        <h1 className="mb-10 text-4xl sm:text-5xl md:text-6xl font-bold">
          Pruning Tips
        </h1>

        <div className="grid gap-5">
          <Tip
            title="Proper Pruning Techniques"
            pdf="Proper-Pruning.pdf"
            content={[
              "Improper pruning of trees and shrubs can be more damaging than no pruning at all. Making proper pruning cuts is probably the most important part of the entire job.",
            ]}
          />

          <Tip
            title="Pruning Young Shade Trees"
            pdf="Pruning-Young-Shade-Trees.pdf"
            content={[
              "A tree in the forest differs greatly from the tree you select as a specimen for your yard. Nature has no reason to grow trees that fit our expectations for safety, appearance, and longevity. A well-formed tree does not happen by accident. Trees selected for use in the landscape need guided care to grow into healthy, attractive and safe specimens.",
            ]}
          />

          <Tip
            title="Pruning Dosage"
            pdf="Pruning-Dosage.pdf"
            content={[
              "Trees are an energy producing and storage system. Over-pruning stresses the tree’s ability to function efficiently, which leads to poor tree health and decline. The more we learn about trees the more apparent it has become that some traditional pruning practices are more detrimental than beneficial.",
            ]}
          />

          <Tip
            title="Support Cables"
            pdf="SupportCables.pdf"
            content={[
              "Tree cabling involves the installation of hardware that is intended to reduce the risk of catastrophic failure. Support cables are used to reduce storm damage by limiting the lateral movement of branches and increasing the stress loads that the supported branch union can sustain.",
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}
