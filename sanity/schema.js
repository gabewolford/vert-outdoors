import { team } from "./schemas/team";
import { pages } from "./schemas/pages";
import { hero } from "./schemas/components/home/hero";
import { brandBar } from "./schemas/components/home/brandBar";
import { brandCard } from "./schemas/components/brands/brandCard";
import { imageAndText } from "./schemas/components/home/imageAndText";

export const schema = {
  types: [pages, team, hero, brandBar, brandCard, imageAndText],
};
