import Link from "next/link";
import { Layout, SEOTags, Avatar } from "../components";
import { Flower, Leaf, Snow, Sun } from "../components/icons";

function Season({ icon, title, list }) {
  return (
    <div
      className={`text-primary grid grid-flow-row sm:grid-flow-col gap-5 justify-start`}
    >
      <Avatar image={icon} />
      <div className="">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <ul className="text-base-content text-opacity-80 list-disc space-y-2 list-outside ml-5">
          {list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SeasonalCarePage() {
  return (
    <Layout>
      <SEOTags
        title="Seasonal Care"
        description="To keep a tree healthy and beautiful, they require year round care."
      />

      <div className="container py-32">
        <h1 className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold">
          Seasonal Tree Care
        </h1>
        <p className="mb-10 text-base-content opacity-70 xl:max-w-md mb-5 text-lg md:text-2xl">
          Get the printable version{" "}
          <Link href="/pdfs/tree-care-calendar.pdf">
            <a className="link link-primary">here</a>
          </Link>
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          <Season
            title="Spring"
            icon={<Flower />}
            list={[
              "Pruning of oaks and elms should be done by the end of March.",
              "When the ground thaws, Sherdec can begin rootcare fertilization of trees with Sherdec’s slow release fertilizer.",
              "Begin monitoring plant development and weather conditions in order to time treatments for insects and diseases. (Timing of pesticide applications is key to successful control.)",
              "Early spring is the time to treat insects such as pine saw flies and those that cause galls.",
              "Fungal disease sprays like apple scab and anthracnose are done to protect new growth.",
              "A Sherdec systemic insecticide (Xytect) is applied in early spring to control some insects later in the season on your trees. Your Sherdec Arborist will advise you regarding this treatment.",
              "Early flowering trees like magnolia should be pruned after flowering in order to preserve the flower buds.",
              "Application of the plant growth regulator, Cambistat® is done to control plant size and improve health in many situations.",
            ]}
          />

          <Season
            title="Summer"
            icon={<Sun />}
            list={[
              "Dutch elm disease or Oak Wilt begin to show up in infected trees.",
              "Injections to prevent Dutch elm disease begin in early June or when the leaves are fully formed.",
              "White and Bur Oaks infected by Oak Wilt can be treated therapeutically. Red Oaks can be protected against a root graft infection if they are near a diseased Red Oak.",
              "Spray for most leaf fungus diseases by early to mid-July.",
              "Monitor insect populations and apply treatment where population levels threaten tree health.",
              "Evergreens are pruned after the new growth is completed.",
              "Late summer/early fall is a good time to apply systemic insecticides that will prevent infestations next year.",
              "Dutch Elm and Oak Wilt treatments continue until the leaves turn color in the fall.",
              "Iron injections to treat severe chlorosis (yellow leaves) are done at this time of year.",
              "Pruning of trees continues throughout the entire season.",
            ]}
          />

          <Season
            title="Autumn"
            icon={<Leaf />}
            list={[
              "Have a Sherdec Arborist assess your trees and help you prepare for leaf drop and dormancy.",
              "Dutch Elm and Oak Wilt treatments continue until the leaves turn color in the fall.",
              "Iron injections to treat chlorosis (yellow leaves) are best done at this time of year.",
              "Pruning of trees and shrubs is done during this season season.",
              "Time to rake and compost and make assessment for next spring.",
            ]}
          />

          <Season
            title="Winter"
            icon={<Snow />}
            list={[
              "Winter is the best time to prune most trees.",
              "When the leaves are off the trees it is easier to identify structural problems for correction or dead wood for removal.",
              "Insects and disease problems are not active in the winter, eliminating the possibility of infection into fresh pruning wounds.",
              "Winter is a good time to remove a tree especially if heavy equipment is required to do the work. The frozen ground and snow cover reduces the amount of damage that may be done around the property.",
              "Tree and shrub fertilization continues until the ground freezes. Sherdec’s slow release Rootcare Fertilization formula will not promote unwanted late season growth.",
              "Pruning of oaks and elms starts again after the first hard frost.",
              "Shrubs will be pruned until the snow depth makes it impractical to do so. Avoid shearing early spring flowering shrubs now so that the flower buds are not removed.",
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}
