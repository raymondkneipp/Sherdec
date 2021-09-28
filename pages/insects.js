import Link from "next/link";
import { Layout, SEOTags } from "../components";

function Insect({ title, content, pdf }) {
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

export default function InsectPage() {
  return (
    <Layout>
      <SEOTags
        title="Insects"
        description="Tree-killing insects are responsible for large-scale deforestation across North America."
      />

      <div className="container py-32 max-w-screen-md">
        <h1 className="mb-10 text-4xl sm:text-5xl md:text-6xl font-bold">
          Insects
        </h1>

        <div className="grid gap-5">
          <Insect
            title="Aphids"
            pdf="Aphids.pdf"
            content={[
              'Dozens of species of aphids ("plant lice") may be found on shade trees and woody ornamental plants in our region. Aphids are small insects; they are typically less than 1/8 inch long, although some aphids may reach almost 1/4 inch. Aphids come in a variety of colors, from bright orange to green or gray to red. One common group, woolly aphids, produces an abundance of flossy, waxy threads that cover their bodies. Aphids feed on plants by sucking plant sap from the leaves, twigs or stems. When abundant, aphids remove large quantities of sap, reducing growth and vigor of the plant. This injury is most common with stem or trunk infesting aphids. Aphids can also cause leaves to curl. Most aphids excrete large quantities of a sweet, sticky substance called honeydew. At times excessive honeydew dropping from trees can be an extreme nuisance.',
            ]}
          />

          <Insect
            title="Bronze Birch Borer"
            pdf="Bronze-Birch-Borer.pdf"
            content={[
              "The wood boring beetle, Bronze birch borer is a very serious pest of birch trees in the Midwest. It can severely injure and kill all varieties of white birch. The bronze birch borer only attacks trees in a weakened condition. Most often birch become weak because of drought, nutrient deficiency, construction injury, or excessive heat. The first sign of attack is usually a thinning or dieback of branches in the upper third of the tree's canopy. Leaves on infested branches may be stunted, yellow or show marginal browning in May or June. Over time the damage progresses downward to lower branches and the trunk. Typically, borers kill trees in three to four years. Very weak trees may die in one year.",
            ]}
          />

          <Insect
            title="Cankerworms"
            pdf="Cankerworms.pdf"
            content={[
              "The cankerworm is one of the most common shade tree defoliator in our region. The slender green or brown caterpillars prefer to feed on the leaves of elm, basswood, and apple. They will also feed on hackberry, oak, boxelder, maple and ash as well as shrubs below infested trees. There are two species of cankerworm, the fall cankerworm and the spring cankerworm. They are similar in the type of damage they do and times of year they feed. Many people are not as concerned about the health of their tree as they are about the nuisance that mature cankerworms cause when they spin to the ground on silken threads, crawling or falling on sidewalks, driveways, picnic tables, doors or house siding. Large numbers can make being outside extremely unpleasant.",
            ]}
          />

          <Insect
            title="Conifer Sawflies"
            pdf="ConiferSawflies.pdf"
            content={[
              'Sawflies are relatives of wasps and bees. Instead of having a stinger, they have a "saw" which they use to cut holes in plant tissues in which to lay their eggs. Sawflies are generally host-specific; for example, a pine sawfly will only feed on pines, not on spruce trees. The larvae consume the needles, defoliating and damaging the trees. Several years of moderate to intensive defoliation results in severely decreased tree growth, as well as increased susceptibility to attack by disease and other insects. Full-grown larvae are about one inch in length and resemble caterpillars. Most are a similar green to the needles on which they are feeding, making them difficult to find when they are small. However, they tend to be gregarious, feeding in large colonies. They will move in unison when startled, making them a little easier to spot.',
            ]}
          />

          <Insect
            title="Elm Leaf Beetle"
            pdf="Elm-Leaf-Beetle.pdf"
            content={[
              "Elm leaf beetles are one of the most common pests found on all types of elms in our region. The insects feed on the leaves, causing them to dry up and die. Heavily infested trees have an unsightly brown appearance. Repeated, heavy infestations weaken a tree by decreasing the amount of food it can manufacture with its leaves. Trees low in stored energy are prone to branch dieback, and decline. Adult elm leaf beetles are also nuisance pests in houses. Large numbers of beetles may seek overwintering shelter in and around homes and come out of dormancy over the course of the winter. To learn more see the attached information sheet.",
            ]}
          />

          <Insect
            title="European Elm Scale"
            pdf="EuroElmScale.pdf"
            content={[
              "The European elm scale (Gossyparia spuria) is a small oval shaped scale. It is a reddish brown color surrounded by a white, waxy fringe. The scale causes injury by sucking out the nutrient rich sap that the tree produced as food for its self. The scale takes out much more fluid than it can use which causes an accumulation of a sticky substance called honeydew. The presence of honeydew is one of the signs of scale infestation. Scales cause premature yellowing, premature leaf drop and if the infestation is severe enough, wilting of leaves. This can often appear like, and be confused with, the early signs of Dutch elm disease. Damaged leaves may fail to drop in the fall and remain on the tree all winter. Twig die back may also occur by midsummer if the infestation is very severe. To learn more see the attached information sheet.",
            ]}
          />

          <Insect
            title="Honeylocust Pests"
            pdf="HoneyLocustPests.pdf"
            content={[
              "Plant bugs, leafhoppers, and spider mites are common pests on honeylocust. Heavy infestations of any of these insects can cause significant damage to the tree, however all are easily controllable. Plant bugs cause yellow or brown spotting on the leaves, leaves become twisted and twig dieback can occur during heavy infestations. New foliage is particularly favored by the plant bug and during heavy infestations, plant bugs will consume the foliage before it has a chance to expand. The infested tree appears to be very late in leafing out compared to pest-free trees. To learn more see the attached information sheet.",
            ]}
          />

          <Insect
            title="Insect Plant Galls"
            pdf="Insect-Plant-Galls.pdf"
            content={[
              "Most plant galls are abnormal plant tissue growths caused by the feeding or egg laying activity of insects and mites. (Fungi and bacteria also cause galls but are not dealt with here.) Because of their unusual forms, textures and colors, homeowners may become concerned. However, galls seldom threaten a plant's health and their numbers are highly variable from season to season. In most cases galls are not abundant enough to harm the plant. However, there are exceptions; some galls may inhibit branch formation or distort foliage and flowers.",
            ]}
          />

          <Insect
            title="Leaf Miners"
            pdf="Leaf-Miners.pdf"
            content={[
              "Leaf miners are insects that develop and live inside the leaves of plants. Most leaf miners are sawflies, a species of non-stinging wasp. One common exception is the spruce needle miner, which is a moth. The immature (larval) stage of these insects produces the distinctive mines. Adults lay their eggs on the leaves or insert them under the leaf surface. The leaves are injured when the larvae feed on the soft interior tissues so that only the transparent outer leaf surfaces remain.",
              "Although leaf miners destroy the leaf they inhabit, the percentage of leaves affected is usually small. Severe infestations that recur over several years will begin to stress the plant. In the case of birch, stress can be serious because weakened birch trees are vulnerable to the bronze birch borer.",
            ]}
          />

          <Insect
            title="Two-Lined Chestnut Borer"
            pdf="Oak-Borer.pdf"
            content={[
              "Oak trees dying from the top down and exhibiting the symptoms of drought may be infested with the two-lined chestnut borer, Agrilus bilineatus (Weber). This insect kills or damages hundreds of red, black, white, and bur oaks in our region every year. The two-lined chestnut borer causes the disfigurement or death of oaks through successive attacks on the branches and stems. Larval feeding destroys the nutrient and water conducting tissues, which, in turn, kills the portion of the tree beyond the point of attack. Damage may result in the death of a single limb, half the crown, or the entire tree. It is important to remember that oaks are also subject to oak wilt, which has similar symptoms. Proper diagnosis is essential to choosing appropriate control procedures.",
            ]}
          />

          <Insect
            title="Spruce Galls"
            pdf="SpruceGalls.pdf"
            content={[
              "Tiny aphid-like insects called adelgids are the cause of unusual swellings (galls) that form at the ends of spruce branches. The galls they make are the result of enzymes released when these insects feed on the plant tissues. The two most commonly found are the Cooley spruce gall adelgid and the eastern spruce gall adelgid. Between them, almost all species of spruce trees may be attacked. Another gall is caused by the Spruce gall midge. These galls may be confused with those of eastern spruce gall adelgids. Light infestations of spruce gall pests do not injure healthy, established trees. On small trees, control light infestations by hand-picking the galls as they form. Heavy infestations are ugly and can disfigure a tree or stunt its growth. Galls protect the spruce gall pests from biological and chemical control during most of their lives. Therefore correct timing of control applications is extremely important.",
            ]}
          />

          <Insect
            title="Zimmerman Pine Moth"
            content={[
              "Pines planted in our region are susceptible to a destructive stem-boring pest called the Zimmerman pine moth. The larvae of this insect damage trees by tunneling just under the bark of at the point where main branches meet the trunk. This activity damages the vessels that carry water and nutrients throughout the tree. The tunneling also weakens branches, which eventually fall from the trunk or are broken by heavy snows or high winds. The top of the tree or branches may be killed when the tunneling cuts off the supply of water and nutrients to those sections of the tree. Infested trees become stunted and deformed after repeated attacks; heavily attacked trees eventually die. Wood-boring insects are particularly difficult to control. Insecticidal sprays are usually necessary, but they should not be used alone.",
            ]}
          />
        </div>
      </div>
    </Layout>
  );
}
