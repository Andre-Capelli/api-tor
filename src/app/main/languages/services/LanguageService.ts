import LanguageDB, { Language, ILanguage, ILanguageDB } from "../Language";

export class LanguageService {
  public async getAll(): Promise<ILanguage[]> {
    return await LanguageDB.find();
  }

  public async getById(id: string): Promise<ILanguage | null> {
    return await LanguageDB.findById(id);
  }

  public async getByCode(code: string): Promise<ILanguageDB | null> {
    return await LanguageDB.findOne({ code });
  }

  public async getActive(): Promise<ILanguage[]> {
    return await LanguageDB.find({ isActive: true });
  }

  public async create(data: Language): Promise<ILanguageDB> {
    return await LanguageDB.create(data);
  }

  public async update(id: string, data: Partial<Language>): Promise<void> {
    await LanguageDB.updateOne({ _id: id }, data);
  }

  public async delete(id: string): Promise<void> {
    await LanguageDB.deleteOne({ _id: id });
  }
}
