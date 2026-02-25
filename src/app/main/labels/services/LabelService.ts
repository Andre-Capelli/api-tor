import LabelDB, { Label, ILabel, ILabelDB } from "../Label";

export class LabelService {
  public async getAll(): Promise<ILabel[]> {
    return await LabelDB.find();
  }

  public async getById(id: string): Promise<ILabel | null> {
    return await LabelDB.findById(id);
  }

  public async getByKey(key: string): Promise<ILabelDB | null> {
    return await LabelDB.findOne({ key });
  }

  public async create(data: Label): Promise<ILabelDB> {
    return await LabelDB.create(data);
  }

  public async createBatch(items: Label[]): Promise<ILabelDB[]> {
    return await LabelDB.insertMany(items);
  }

  public async update(id: string, data: Partial<Label>): Promise<void> {
    await LabelDB.updateOne({ _id: id }, data);
  }

  public async upsertBatch(
    items: Array<{ key: string; translations: Record<string, string> }>
  ): Promise<number> {
    const ops = items.map((item) => ({
      updateOne: {
        filter: { key: item.key },
        update: { $set: { translations: item.translations } },
        upsert: true,
      },
    }));
    const result = await LabelDB.bulkWrite(ops);
    return result.modifiedCount + result.upsertedCount;
  }

  public async delete(id: string): Promise<void> {
    await LabelDB.deleteOne({ _id: id });
  }
}
