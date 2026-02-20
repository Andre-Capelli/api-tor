"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationService = void 0;
const Organization_1 = __importDefault(require("../Organization"));
class OrganizationService {
    async getAll(filter) {
        return await Organization_1.default.find(filter || {});
    }
    async getById(id) {
        return await Organization_1.default.findById(id);
    }
    async getCompanies() {
        return await Organization_1.default.find({ type: "company" });
    }
    async getCustomersByCompany(companyId) {
        return await Organization_1.default.find({ parentId: companyId, type: "customer" });
    }
    async create(data) {
        if (data.type === "customer" && !data.parentId) {
            throw new Error("Customer organizations must have a parentId (company)");
        }
        return await Organization_1.default.create(data);
    }
    async update(id, data) {
        await Organization_1.default.updateOne({ _id: id }, data);
    }
    async delete(id) {
        // Check if any customers reference this org as parent
        const children = await Organization_1.default.countDocuments({ parentId: id });
        if (children > 0) {
            throw new Error("Cannot delete organization with existing customers");
        }
        await Organization_1.default.deleteOne({ _id: id });
    }
    /**
     * Returns all organization IDs visible to a user based on their org and type.
     * - Company user: sees own org + all customer orgs under it
     * - Customer user: sees only own org
     */
    async getVisibleOrganizationIds(userOrgId, orgType) {
        if (orgType === "company") {
            const customers = await Organization_1.default.find({
                parentId: userOrgId,
                type: "customer",
                isActive: true,
            }).select("_id");
            return [userOrgId, ...customers.map((c) => String(c._id))];
        }
        return [userOrgId];
    }
}
exports.OrganizationService = OrganizationService;
