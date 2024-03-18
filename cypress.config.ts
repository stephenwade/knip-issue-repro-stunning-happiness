import { defineConfig } from "cypress";

import { setupNodeEvents } from "@/cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents,
  },
});
