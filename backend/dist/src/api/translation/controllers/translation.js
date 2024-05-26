"use strict";
/**
 * translation controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::translation.translation", ({ strapi }) => ({
    async find(ctx) {
        const { locale } = ctx.request.query;
        const translations = await strapi.entityService.findMany("api::translation.translation", {
            // @ts-ignore
            locale,
        });
        return { data: translations };
    },
}));
