"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const Subscription_1 = __importDefault(require("../Subscription"));
const Plan_1 = __importDefault(require("@main/plans/Plan"));
const Machine_1 = __importDefault(require("@main/machines/Machine"));
const Organization_1 = __importDefault(require("@main/organizations/Organization"));
class SubscriptionService {
    async getAll() {
        return await Subscription_1.default.find();
    }
    async getById(id) {
        return await Subscription_1.default.findById(id);
    }
    async getByOrganization(organizationId) {
        return await Subscription_1.default.find({ organizationId });
    }
    async getActiveByOrganization(organizationId) {
        return await Subscription_1.default.findOne({
            organizationId,
            status: "active",
            endDate: { $gte: new Date() },
        });
    }
    async create(data) {
        return await Subscription_1.default.create(data);
    }
    async update(id, data) {
        await Subscription_1.default.updateOne({ _id: id }, data);
    }
    async delete(id) {
        await Subscription_1.default.deleteOne({ _id: id });
    }
    /**
     * Validates if an organization can use a specific module.
     * Checks: active subscription, not expired, module allowed, machine count within limit.
     */
    async validateSubscription(organizationId, module) {
        // Find the root company (if org is a customer, get parent)
        const org = await Organization_1.default.findById(organizationId);
        if (!org || !org.isActive) {
            return { valid: false, reason: "Organization not found or inactive" };
        }
        const companyId = org.type === "customer" ? String(org.parentId) : String(org._id);
        // Find active subscription for the company
        const subscription = await Subscription_1.default.findOne({
            organizationId: companyId,
            status: "active",
            endDate: { $gte: new Date() },
        });
        if (!subscription) {
            return { valid: false, reason: "No active subscription" };
        }
        // Get plan and check module
        const plan = await Plan_1.default.findById(subscription.planId);
        if (!plan) {
            return { valid: false, reason: "Subscription plan not found" };
        }
        if (!plan.allowedModules.includes(module)) {
            return { valid: false, reason: `Module '${module}' not included in plan` };
        }
        // Check machine count limit - count all machines under this company + its customers
        const customerOrgs = await Organization_1.default.find({
            parentId: companyId,
            type: "customer",
        }).select("_id");
        const orgIds = [companyId, ...customerOrgs.map((c) => String(c._id))];
        const machineCount = await Machine_1.default.countDocuments({
            organizationId: { $in: orgIds },
        });
        if (machineCount >= plan.maxMachines) {
            return { valid: false, reason: `Machine limit reached (${machineCount}/${plan.maxMachines})` };
        }
        return { valid: true, subscription };
    }
}
exports.SubscriptionService = SubscriptionService;
