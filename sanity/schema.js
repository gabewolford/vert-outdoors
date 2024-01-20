import { schemaTypes } from "./schemas";
import { brandContentBlockType } from "./schemas/brandContentBlockType";
import { contentBlockType } from "./schemas/contentBlockType";
import { heroType } from "./schemas/heroType";
import { imageGalleryType } from "./schemas/imageGalleryType";
import { pageType } from "./schemas/pageType";
import teamMember from "./schemas/teamMember";

export const schema = {
  types: [
    pageType,
    brandContentBlockType,
    contentBlockType,
    heroType,
    imageGalleryType,
    teamMember,
  ],
};
