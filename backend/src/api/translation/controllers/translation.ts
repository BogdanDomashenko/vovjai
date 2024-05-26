/**
 * translation controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::translation.translation",
  ({ strapi }) => ({
    async find(ctx) {
      const { locale } = ctx.request.query;

      const translations = await strapi.entityService.findMany(
        "api::translation.translation",
        {
          // @ts-ignore
          locale,
        }
      );

      return { data: translations };
    },
  })
);
