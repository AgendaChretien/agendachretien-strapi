import type { Core } from "@strapi/strapi";
import * as _ from "radashi";

type PolicyContext = Core.PolicyContext & {
  state: { user?: { accessLevel: number } };
};

export default async (policyContext: PolicyContext) => {
  const { state, request } = policyContext;

  const accessLevel = state.user?.accessLevel || 1;

  request.query = _.set(request.query, "filters.privacyLevel", { $lte: accessLevel });

  return true;
};
