import { JwtPayload } from "./jwtUtils";
import OrganizationDB from "@main/organizations/Organization";

export interface ScopeFilter {
  organizationId?: string | { $in: string[] };
}

/**
 * Builds a MongoDB query filter for organization scoping.
 * - Master (platform scope): returns {} (no filter, sees everything)
 * - Company user: returns { organizationId: { $in: [companyId, ...customerIds] } }
 * - Customer user: returns { organizationId: customerOrgId }
 */
export async function buildOrgScopeFilter(user: JwtPayload): Promise<ScopeFilter> {
  // Master/platform scope sees everything
  if (user.accessLevelScope === "platform") {
    return {};
  }

  if (!user.organizationId) {
    // Users without an org assignment - treat as no access (empty result)
    // unless they have no accessLevel set (backward compat - show everything)
    if (!user.accessLevel) {
      return {};
    }
    throw new Error("User has no organization assigned");
  }

  if (user.organizationType === "company") {
    // Company users see their own org + all customers of that org
    const customers = await OrganizationDB.find({
      parentId: user.organizationId,
      type: "customer",
      isActive: true,
    }).select("_id");

    const orgIds = [
      user.organizationId,
      ...customers.map((c) => String(c._id)),
    ];
    return { organizationId: { $in: orgIds } };
  }

  // Customer users see only their own org
  return { organizationId: user.organizationId };
}

/**
 * Checks if a user can access a specific organization's data.
 */
export async function canAccessOrganization(
  user: JwtPayload,
  targetOrgId: string
): Promise<boolean> {
  if (user.accessLevelScope === "platform") {
    return true;
  }

  if (!user.organizationId) {
    return !user.accessLevel; // backward compat
  }

  if (user.organizationId === targetOrgId) {
    return true;
  }

  if (user.organizationType === "company") {
    // Check if target org is a customer of this company
    const customer = await OrganizationDB.findOne({
      _id: targetOrgId,
      parentId: user.organizationId,
      type: "customer",
    });
    return !!customer;
  }

  return false;
}
