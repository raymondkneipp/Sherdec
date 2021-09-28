import Link from "next/link";
import { Layout, SEOTags } from "../components";

function Disease({ title, content, pdf }) {
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

export default function DiseasePage() {
  return (
    <Layout>
      <SEOTags title="Disease and Fertilization" />

      <div className="container py-32 max-w-screen-md">
        <h1 className="mb-10 text-4xl sm:text-5xl md:text-6xl font-bold">
          Disease and Fertilization
        </h1>

        <div className="grid gap-5">
          <Disease
            title="Anthracnose"
            pdf="Anthracnose.pdf"
            content={[
              "Anthracnose is the name given to a group of fungal diseases that cause leaf spots, blotches along leaf veins and distortion of the leaves. Infected leaves eventually drop off the tree. Some of these fungi are capable of infecting twigs, causing lesions and twig dieback. This disease is seen most frequently on ash, oak, and maple trees. Weather conditions play a large role in the severity of the disease. In years when the spring is cool and wet the disease can reach epidemic proportions.",
            ]}
          />

          <Disease
            title="Apple Scab"
            pdf="Apple-Scab.pdf"
            content={[
              "Apple scab is a fungus disease that can be extremely severe, causing leaf loss, reduced tree vigor, and reduced flowering of crabapples and apples. It is the most common and persistent disease affecting these trees. The most common symptom of apple scab is olive-green spots on the leaves. These spots enlarge, darken and become velvety over time. A leaf with several spots eventually turns yellow and drops from the tree prematurely. Heavily infected trees may be defoliated by mid-summer.",
            ]}
          />

          <Disease
            title="Dutch Elm Disease"
            pdf="Dutch-Elm.pdf"
            content={[
              "How Dutch Elm Disease Spreads",
              "Through our work in the Tri-State, we have discovered that Dutch Elm disease fungus can infect a tree in two ways. The most common method of transmission is on the bodies of elm bark beetles. The fungus also spreads from diseased to healthy trees through grafted roots. An elm bark beetle's life revolves around elm trees. It breeds in dead and dying elms, and depends exclusively on elm tissue for food creating a devastating cycle for elms when the Dutch elm disease fungus Ophiostoma novi-ulmi is thrown into the mix. Thousands of eggs can be laid by the adult females in one piece of wood the size of a fireplace log.",
              "If the tree died from Dutch elm disease, every beetle that hatches and emerges as an adult from that wood may be carrying the fungus. They will be looking for a healthy elm on which to feed and will inadvertantly inoculate the tree with Dutch elm disease via the spores carried on their bodies. At Sherdec Tree Service, we have found that the majority of new infections, and the bulk of the losses to Dutch elm disease, are due to this method of transmission. That is why prompt detection, removal, and destruction of dying elms is so critically important.",
              "The other method of disease transmission between elms is through grafted roots. When elms are growing near each other, their roots come in contact in the soil and graft together. In the absence of a vascular wilt like Dutch elm disease, this is an advantage for the trees. The Dutch elm disease fungus, however, can pass from diseased to healthy trees through these grafted roots and continue to spread indefinitely through a stand of elms.",
              "Dutch Elm Disease Symptoms",
              'The first evidence of Dutch elm disease is wilting or "flagging" in one or more of the branches, usually starting in the outer portion of the crown. Leaves on the infected branches turn dull green to yellow and curl, finally becoming dry, brittle, and brown. The symptoms progress down the limb and eventually throughout the entire tree. We have witnessed that trees infected through root grafts die very rapidly, while trees infected via the feeding of bark beetles can take several years to die.',
              "Another symptom of the disease is the discoloration of the water conducting vessels. We can see this by peeling the bark of the infected wood, revealing the staining.",
            ]}
          />

          <Disease
            title="Oak Wilt"
            pdf="Oak-Wilt.pdf"
            content={[
              "How the Disease Kills Oaks",
              "In the Tri-State we see a lot of the oak wilt fungus, Ceratocystis fagacearum, it enters an oak either through a root graft or a fresh wound. We have learned that once inside the tree, the fungus grows in the water carrying vessels of the tree and spreads throughout the roots, trunk, and branches. We know that as a mode of defense, the tree attempts to stop the spreading fungus by using gummy substances, called tyloses. These tyloses clog the water vessels within the tree, but do not stop the fungus. The lack of water flow causes leaves to wilt rapidly and fall to the ground. The oak essentially shuts off the water supply and dies from drought.",
            ]}
          />

          <Disease
            title="Dothistroma Needle Blight"
            pdf="Pine-Needle-Blight.pdf"
            content={[
              "Dothistroma needle blight is a fungus that causes needle spots, discoloration and substantial needle loss during heavy infection. The Austrian pine is particularly susceptible, though the disease also attacks mugo, ponderosa, and other species of pine. The first symptom is scattered spots, varying in color from yellow to red. They often develop into red bands that encircle the affected needles. The tip of the needle beyond the band turns brown and dies, while the base may remain green for a period. The dead portion is not always separated from the healthy portion by a band, but there is an abrupt transition between healthy appearing green tissue and dead tissue. Infected needles commonly fall off during late spring or early summer, although they may drop at any time.",
            ]}
          />

          <Disease
            title="Sphaeropsis"
            pdf="Pine-Shoot-Blight.pdf"
            content={[
              "Sphaeropsis is a fungus that causes shoot blight and cankers on pines in plantations, windbreaks, and ornamental plantings. Most pines are susceptible to infection, especially non-native species such as Austrian pine. Sphaeropsis kills trees by killing the new foliage year after year or by initiating girdling cankers on branches and stems of stressed trees. Shoot blight and branch and stem cankers are the most common symptoms of Sphaeropsis. Shoot blight is common on trees of all ages, but cankers are more prevalent in saplings and pole sized trees. All symptoms are generally characterized by conspicuous amounts of resin.",
            ]}
          />

          <Disease
            title="Verticulum Wilt"
            pdf="Verticulum-Wilt.pdf"
            content={[
              "Verticillium wilt is a systemic fungus disease that grows inside the trees vascular system. However, it is not an aggressive pathogen, and is less serious than some other vascular wilt diseases. Infected trees may survive many years after infection. Increasing the health of the infected plant will sometimes allow the plant to seal the diseased areas beneath a layer of thick sapwood. Verticillium attacks a wide range of woody plants and is common among plantings of ornamental trees and shrubs. This disease is frequently misdiagnosed.",
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}
