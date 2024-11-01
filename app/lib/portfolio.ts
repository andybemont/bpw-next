import { StaticImageData } from "next/image";
import pi1027 from "../../public/portfolio/BPBO2-1027.jpg";
import pi1063 from "../../public/portfolio/BPBO2-1063.jpg";
import pi1078 from "../../public/portfolio/BPBO2-1078.jpg";
import pi1144 from "../../public/portfolio/BPBO2-1144.jpg";
import pi1286 from "../../public/portfolio/BPBO2-1286.jpg";
import pi1325 from "../../public/portfolio/BPBO2-1325.jpg";
import pi1369 from "../../public/portfolio/BPBO2-1369.jpg";
import pi1411 from "../../public/portfolio/BPBO2-1411.jpg";
import pi1421 from "../../public/portfolio/BPBO2-1421.jpg";
import pi1439 from "../../public/portfolio/BPBO2-1439.jpg";
import pi1453 from "../../public/portfolio/BPBO2-1453.jpg";
import pi1001 from "../../public/portfolio/BPBO3-1001.jpg";
import pi1024 from "../../public/portfolio/BPBO3-1024.jpg";
import pi1028 from "../../public/portfolio/BPBO3-1028.jpg";
import pi1038 from "../../public/portfolio/BPBO3-1038.jpg";
import pi1040 from "../../public/portfolio/BPBO3-1040.jpg";
import pi1052 from "../../public/portfolio/BPBO3-1052.jpg";
import pi1067 from "../../public/portfolio/BPBO3-1067.jpg";
import pi1159 from "../../public/portfolio/BPBO3-1159.jpg";
import pi1177 from "../../public/portfolio/BPBO3-1177.jpg";
import pi1242 from "../../public/portfolio/BPBO3-1242.jpg";
import pi1260 from "../../public/portfolio/BPBO3-1260.jpg";
import pi1267 from "../../public/portfolio/BPBO3-1267.jpg";
import pi1271 from "../../public/portfolio/BPBO3-1271.jpg";
import pi1279 from "../../public/portfolio/BPBO3-1279.jpg";
import pi1293 from "../../public/portfolio/BPBO3-1293.jpg";
import pi1335 from "../../public/portfolio/BPBO3-1335.jpg";
import pi1350 from "../../public/portfolio/BPBO3-1350.jpg";
import pi1398 from "../../public/portfolio/BPBO3-1398.jpg";
import pi1514 from "../../public/portfolio/BPBO3-1514.jpg";
import pi1056 from "../../public/portfolio/BPBO4-1056.jpg";
import pi1069 from "../../public/portfolio/BPBO4-1069.jpg";
import pi1113 from "../../public/portfolio/BPBO4-1113.jpg";
import pi1119 from "../../public/portfolio/BPBO4-1119.jpg";
import pi1191 from "../../public/portfolio/BPBO4-1191.jpg";
import pi1235 from "../../public/portfolio/BPBO4-1235.jpg";
import pi1310 from "../../public/portfolio/BPBO4-1310.jpg";
import pi1312 from "../../public/portfolio/BPBO4-1312.jpg";
import pi1352 from "../../public/portfolio/BPBO4-1352.jpg";
import pi1360 from "../../public/portfolio/BPBO4-1360.jpg";
import pi1422 from "../../public/portfolio/BPBO4-1422.jpg";
import pi1436 from "../../public/portfolio/BPBO4-1436.jpg";
import pi1442 from "../../public/portfolio/BPBO4-1442.jpg";
import pi1488 from "../../public/portfolio/BPBO4-1488.jpg";
import pi1505 from "../../public/portfolio/BPBO4-1505.jpg";
import pi1515 from "../../public/portfolio/BPBO4-1515.jpg";
import pi1076 from "../../public/portfolio/BPBO5-1076.jpg";
import pi1140 from "../../public/portfolio/BPBO5-1140.jpg";
import pi1207 from "../../public/portfolio/BPBO5-1207.jpg";
import pi1291 from "../../public/portfolio/BPBO5-1291.jpg";
import pi1412 from "../../public/portfolio/BPBO5-1412.jpg";
import pi1486 from "../../public/portfolio/BPBO5-1486.jpg";

type NamedImage = {
  image: StaticImageData;
  alt: string;
  positioning: string;
};
const namedPictures = {
  dadPokingBubble: {
    image: pi1076,
    alt: "Bride with parents and bubbles in Ithaca, NY",
    positioning: "object-center",
  },
  chaseBuildingDip: {
    image: pi1140,
    alt: "Couple with wedding party kissing in Rochester, NY",
    positioning: "object-bottom",
  },
  gcvmKiss: {
    image: pi1207,
    alt: "A couple in a field at Genesee Country Village and Museum",
    positioning: "object-center",
  },
  lydiaFlowers: {
    image: pi1291,
    alt: "A couple in Buffalo, NY with flower petals falling",
    positioning: "object-center",
  },
  gianStepsKiss: {
    image: pi1412,
    alt: "A couple relaxing on the steps at their wedding",
    positioning: "object-top",
  },
  mimiGolfCart: {
    image: pi1486,
    alt: "A bride looks up at her new husband while sitting in a golf cart",
    positioning: "object-center",
  },
  flowers: {
    image: pi1119,
    alt: "Bridal bouquet by the window",
    positioning: "object-center",
  },
};
const fullPortfolio = [
  pi1027,
  pi1063,
  pi1078,
  pi1144,
  pi1286,
  pi1325,
  pi1369,
  pi1411,
  pi1421,
  pi1439,
  pi1453,
  pi1001,
  pi1024,
  pi1028,
  pi1038,
  pi1040,
  pi1052,
  pi1067,
  pi1159,
  pi1177,
  pi1242,
  pi1260,
  pi1267,
  pi1271,
  pi1279,
  pi1293,
  pi1335,
  pi1350,
  pi1398,
  pi1514,
  pi1056,
  pi1069,
  pi1113,
  pi1119,
  pi1191,
  pi1235,
  pi1310,
  pi1312,
  pi1352,
  pi1360,
  pi1422,
  pi1436,
  pi1442,
  pi1488,
  pi1505,
  pi1515,
  pi1076,
  pi1140,
  pi1207,
  pi1291,
  pi1412,
  pi1486,
];

export { fullPortfolio, namedPictures };
export type { NamedImage };
