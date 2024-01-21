import { brands } from "./schemas/brands";
import { team } from "./schemas/team";
import { pages } from "./schemas/pages";
import { hero } from "./schemas/components/home/hero";
import { brandBar } from "./schemas/components/home/brandBar";
import { imageAndText } from "./schemas/components/home/imageAndText";

export const schema = {
  types: [pages, brands, team, hero, brandBar, imageAndText],
};
