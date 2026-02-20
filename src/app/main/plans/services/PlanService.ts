import PlanDB, { Plan, IPlan, IPlanDB } from "../Plan";

export class PlanService {
  public async getAll(): Promise<IPlan[]> {
    return await PlanDB.find();
  }

  public async getById(id: string): Promise<IPlan | null> {
    return await PlanDB.findById(id);
  }

  public async create(data: Plan): Promise<IPlanDB> {
    return await PlanDB.create(data);
  }

  public async update(id: string, data: Partial<Plan>): Promise<void> {
    await PlanDB.updateOne({ _id: id }, data);
  }

  public async delete(id: string): Promise<void> {
    await PlanDB.deleteOne({ _id: id });
  }
}
