import OrganizationDB, { Organization, IOrganization, IOrganizationDB } from "../Organization";

export class OrganizationService {
  public async getAll(filter?: Record<string, any>): Promise<IOrganization[]> {
    return await OrganizationDB.find(filter || {});
  }

  public async getById(id: string): Promise<IOrganization | null> {
    return await OrganizationDB.findById(id);
  }

  public async getCompanies(): Promise<IOrganization[]> {
    return await OrganizationDB.find({ type: "company" });
  }

  public async getCustomersByCompany(companyId: string): Promise<IOrganization[]> {
    return await OrganizationDB.find({ parentId: companyId, type: "customer" });
  }

  public async create(data: Organization): Promise<IOrganizationDB> {
    if (data.type === "customer" && !data.parentId) {
      throw new Error("Customer organizations must have a parentId (company)");
    }
    return await OrganizationDB.create(data);
  }

  public async update(id: string, data: Partial<Organization>): Promise<void> {
    await OrganizationDB.updateOne({ _id: id }, data);
  }

  public async delete(id: string): Promise<void> {
    // Check if any customers reference this org as parent
    const children = await OrganizationDB.countDocuments({ parentId: id });
    if (children > 0) {
      throw new Error("Cannot delete organization with existing customers");
    }
    await OrganizationDB.deleteOne({ _id: id });
  }

  /**
   * Returns all organization IDs visible to a user based on their org and type.
   * - Company user: sees own org + all customer orgs under it
   * - Customer user: sees only own org
   */
  public async getVisibleOrganizationIds(
    userOrgId: string,
    orgType: string
  ): Promise<string[]> {
    if (orgType === "company") {
      const customers = await OrganizationDB.find({
        parentId: userOrgId,
        type: "customer",
        isActive: true,
      }).select("_id");

      return [userOrgId, ...customers.map((c) => String(c._id))];
    }

    return [userOrgId];
  }
}
