import Link from "next/link";
import { Layout, SEOTags } from "../components";

function Topic({ title, content, pdf }) {
  return (
    <div class="collapse border rounded-box border-base-300 collapse-plus">
      <input type="checkbox" />
      <div class="collapse-title text-xl font-bold text-primary">{title}</div>
      <div class="collapse-content">
        <div className="flex flex-col space-y-5 items-start">
          {content?.map((item) => (
            <p className="text-base-content">{item}</p>
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

export default function HealthMaintenancePage() {
  return (
    <Layout>
      <SEOTags
        title="Tree Health & Maintenance"
        description="Learn how to maintain and keep your tree healthy and looking amazing!"
      />

      <div className="container py-32 max-w-screen-md">
        <h1 className="mb-10 text-4xl sm:text-5xl md:text-6xl font-bold">
          Health & Maintenance
        </h1>

        <div className="grid gap-5">
          <Topic
            title="Chlorosis"
            pdf="Chlorosis.pdf"
            content={[
              "Chlorosis (yellow leaves) is a common problem of trees growing in the urban areas of Ohio. Eastern pin oaks tend to be highly susceptible, but many other tree species including white oaks, maples and birch also suffer from this condition. The cause of chlorosis is not completely understood however many factors appear to contribute to this condition.",
            ]}
          />
          <Topic
            title="Construction Damage"
            pdf="Construction-Damage.pdf"
            content={[
              "Valuable trees are often cut down, killed, or severely damaged during construction work when simple, inexpensive care would keep them alive and healthy. Even worse, people sometimes go to a great deal of time, trouble, and expense to try to save trees, only to have them decline and die after the construction work is finished.",
            ]}
          />
          <Topic
            title="Nutrition and Healthy Trees"
            content={[
              "Natural vs. Urban Soils — There’s a Big Difference",
              "Natural (undisturbed forest) soils have many qualities favoring plant health that urban soils lack. Good natural soils offer sufficient water, high levels of oxygen, adequate nutrients, thriving micro-organisms, and beneficial organic matter.",
              "Most yard soils are compacted, low in oxygen, poorly drained, low in organic matter, low in available nutrients, and have depleted populations of micro-organisms (the creatures responsible for recycling organic matter and releasing nutrients). Tree vigor is dependent on reducing poor soil conditions and encouraging soil health.",
            ]}
          />
          <Topic
            title="Root Regeneration"
            pdf="RootRegeneration.pdf"
            content={[
              "Construction practices are very damaging to tree health and the soil in which it grows. Healthy soils are porous and contain the necessary organic material and life-giving micro-organisms required for plants to survive. Nutrients, water, and oxygen are readily available, allowing plant roots to grow and thrive.",
              "Compacted soils literally have the life-giving properties squeezed out of them. They contain low oxygen and water levels and few beneficial micro-organisms. Because roots have difficulty growing and surviving in compacted soil they can become stunted or may even die.",
            ]}
          />
          <Topic
            title="Girdling Roots"
            pdf="Root-Girdling.pdf"
            content={[
              "Girdling roots are roots that grow around or across the trunk or other roots. Girdling roots act like a tourniquet, restricting and eventually cutting off the flow of water and nutrients to other areas within the tree. They are common on trees planted in urban areas. Although the symptoms of girdling roots show up as the tree is maturing, the problem generally starts when the tree is young. Two types of girdling roots can cause damage. A strapping root crosses over one side of the trunk or root system restricting growth on that side of the tree. A circling root wraps around the trunk. There are many symptoms of girdling roots: small leaves, early fall color and defoliation to name a few.",
            ]}
          />
          <Topic
            title="Planting Trees & Shrubs"
            pdf="Tree-Planting.pdf"
            content={[
              "Planting trees and shrubs properly ensures the long-term survival of your plants. Problems associated with poor planting may not become apparent for many years.",
            ]}
          />
          <Topic
            title="Tree Selection"
            pdf="Tree-Selection.pdf"
            content={[
              "Choosing the right tree for your site is not rocket science. Successful tree planting is as simple as matching your tree choice to the conditions found at the growing site. The following is a list of our favorite trees and the conditions that provide for the best growth potential. In our experience these trees have few problems with insects or diseases when the growing conditions meet the growth requirements of the tree.",
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}
