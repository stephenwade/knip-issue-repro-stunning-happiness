export function setupNodeEvents(on: Cypress.PluginEvents) {
  on("task", {
    "db:seed": () => {},
  });
}
