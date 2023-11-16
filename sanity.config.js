import { defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const SANITY_STUDIO_PREVIEW_URL = "http://localhost:3000";

export default defineConfig({
  name: "default",
  title: "vert-outdoors",
  basePath: "/admin",
  projectId: "zh1t4b0j",
  dataset: "production",

  plugins: [
    deskTool(),
    visionTool(),
    presentationTool({
      previewUrl: SANITY_STUDIO_PREVIEW_URL,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
