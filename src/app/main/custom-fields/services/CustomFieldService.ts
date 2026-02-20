import CustomFieldDB, { CustomField, ICustomField, ICustomFieldDB } from "../CustomField";
import CustomFieldValueDB, { CustomFieldValue, ICustomFieldValue, ICustomFieldValueDB } from "../CustomFieldValue";

export class CustomFieldService {
  // --- Field Definitions ---

  public async getAll(organizationId?: string): Promise<ICustomField[]> {
    const filter: Record<string, any> = {};
    if (organizationId) {
      // Return system-wide (null) + org-specific fields
      filter.$or = [
        { organizationId: null },
        { organizationId },
      ];
    }
    return await CustomFieldDB.find(filter);
  }

  public async getById(id: string): Promise<ICustomField | null> {
    return await CustomFieldDB.findById(id);
  }

  public async getByTarget(
    targetCollection: string,
    organizationId?: string
  ): Promise<ICustomField[]> {
    const filter: Record<string, any> = { targetCollection };
    if (organizationId) {
      filter.$or = [
        { organizationId: null },
        { organizationId },
      ];
      delete filter.targetCollection;
      filter.$or[0].targetCollection = targetCollection;
      filter.$or[1].targetCollection = targetCollection;
    }
    return await CustomFieldDB.find(filter);
  }

  public async create(data: CustomField): Promise<ICustomFieldDB> {
    return await CustomFieldDB.create(data);
  }

  public async update(id: string, data: Partial<CustomField>): Promise<void> {
    await CustomFieldDB.updateOne({ _id: id }, data);
  }

  public async delete(id: string): Promise<void> {
    // Also delete all values for this field
    await CustomFieldValueDB.deleteMany({ customFieldId: id });
    await CustomFieldDB.deleteOne({ _id: id });
  }

  // --- Field Values ---

  public async getValues(
    targetCollection: string,
    targetDocumentId: string
  ): Promise<ICustomFieldValue[]> {
    return await CustomFieldValueDB.find({ targetCollection, targetDocumentId });
  }

  public async setValue(data: CustomFieldValue): Promise<ICustomFieldValueDB> {
    // Upsert: update if exists, create if not
    const result = await CustomFieldValueDB.findOneAndUpdate(
      {
        customFieldId: data.customFieldId,
        targetDocumentId: data.targetDocumentId,
      },
      data,
      { upsert: true, new: true }
    );
    return result;
  }

  public async setValues(values: CustomFieldValue[]): Promise<ICustomFieldValueDB[]> {
    const results: ICustomFieldValueDB[] = [];
    for (const data of values) {
      const result = await this.setValue(data);
      results.push(result);
    }
    return results;
  }

  public async deleteValue(id: string): Promise<void> {
    await CustomFieldValueDB.deleteOne({ _id: id });
  }

  public async deleteValuesByDocument(
    targetCollection: string,
    targetDocumentId: string
  ): Promise<number> {
    const result = await CustomFieldValueDB.deleteMany({
      targetCollection,
      targetDocumentId,
    });
    return result.deletedCount || 0;
  }
}
