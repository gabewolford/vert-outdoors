import { brands } from "./schemas/brands";
import { team } from "./schemas/team";
import { pages } from "./schemas/pages";
import { brandContentBlockType } from "./schemas/pagebuilder-components/brandContentBlockType";
import { contentBlockType } from "./schemas/pagebuilder-components/contentBlockType";
import { heroType } from "./schemas/pagebuilder-components/heroType";
import { imageGalleryType } from "./schemas/pagebuilder-components/imageGalleryType";

export const schema = {
  types: [
    pages,
    brands,
    team,
    heroType,
    brandContentBlockType,
    contentBlockType,
    imageGalleryType,
  ],
};
