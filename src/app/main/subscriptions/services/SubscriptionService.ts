import SubscriptionDB, { Subscription, ISubscription, ISubscriptionDB } from "../Subscription";
import PlanDB, { ModuleType } from "@main/plans/Plan";
import MachineDB from "@main/machines/Machine";
import OrganizationDB from "@main/organizations/Organization";

export class SubscriptionService {
  public async getAll(): Promise<ISubscription[]> {
    return await SubscriptionDB.find();
  }

  public async getById(id: string): Promise<ISubscription | null> {
    return await SubscriptionDB.findById(id);
  }

  public async getByOrganization(organizationId: string): Promise<ISubscription[]> {
    return await SubscriptionDB.find({ organizationId });
  }

  public async getActiveByOrganization(organizationId: string): Promise<ISubscriptionDB | null> {
    return await SubscriptionDB.findOne({
      organizationId,
      status: "active",
      endDate: { $gte: new Date() },
    });
  }

  public async create(data: Subscription): Promise<ISubscriptionDB> {
    return await SubscriptionDB.create(data);
  }

  public async update(id: string, data: Partial<Subscription>): Promise<void> {
    await SubscriptionDB.updateOne({ _id: id }, data);
  }

  public async delete(id: string): Promise<void> {
    await SubscriptionDB.deleteOne({ _id: id });
  }

  /**
   * Validates if an organization can use a specific module.
   * Checks: active subscription, not expired, module allowed, machine count within limit.
   */
  public async validateSubscription(
    organizationId: string,
    module: ModuleType
  ): Promise<{
    valid: boolean;
    reason?: string;
    subscription?: ISubscriptionDB;
  }> {
    // Find the root company (if org is a customer, get parent)
    const org = await OrganizationDB.findById(organizationId);
    if (!org || !org.isActive) {
      return { valid: false, reason: "Organization not found or inactive" };
    }

    const companyId = org.type === "customer" ? String(org.parentId) : String(org._id);

    // Find active subscription for the company
    const subscription = await SubscriptionDB.findOne({
      organizationId: companyId,
      status: "active",
      endDate: { $gte: new Date() },
    });

    if (!subscription) {
      return { valid: false, reason: "No active subscription" };
    }

    // Get plan and check module
    const plan = await PlanDB.findById(subscription.planId);
    if (!plan) {
      return { valid: false, reason: "Subscription plan not found" };
    }

    if (!plan.allowedModules.includes(module)) {
      return { valid: false, reason: `Module '${module}' not included in plan` };
    }

    // Check machine count limit - count all machines under this company + its customers
    const customerOrgs = await OrganizationDB.find({
      parentId: companyId,
      type: "customer",
    }).select("_id");

    const orgIds = [companyId, ...customerOrgs.map((c) => String(c._id))];
    const machineCount = await MachineDB.countDocuments({
      organizationId: { $in: orgIds },
    });

    if (machineCount >= plan.maxMachines) {
      return { valid: false, reason: `Machine limit reached (${machineCount}/${plan.maxMachines})` };
    }

    return { valid: true, subscription };
  }
}
