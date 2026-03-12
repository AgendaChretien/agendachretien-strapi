/**
 * event router
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreRouter("api::event.event", {
  config: {
    find: {
      policies: ["events-privacy"],
    },
    findOne: {
      policies: ["events-privacy"],
    },
  },
});
