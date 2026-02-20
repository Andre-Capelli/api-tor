"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFieldService = void 0;
const CustomField_1 = __importDefault(require("../CustomField"));
const CustomFieldValue_1 = __importDefault(require("../CustomFieldValue"));
class CustomFieldService {
    // --- Field Definitions ---
    async getAll(organizationId) {
        const filter = {};
        if (organizationId) {
            // Return system-wide (null) + org-specific fields
            filter.$or = [
                { organizationId: null },
                { organizationId },
            ];
        }
        return await CustomField_1.default.find(filter);
    }
    async getById(id) {
        return await CustomField_1.default.findById(id);
    }
    async getByTarget(targetCollection, organizationId) {
        const filter = { targetCollection };
        if (organizationId) {
            filter.$or = [
                { organizationId: null },
                { organizationId },
            ];
            delete filter.targetCollection;
            filter.$or[0].targetCollection = targetCollection;
            filter.$or[1].targetCollection = targetCollection;
        }
        return await CustomField_1.default.find(filter);
    }
    async create(data) {
        return await CustomField_1.default.create(data);
    }
    async update(id, data) {
        await CustomField_1.default.updateOne({ _id: id }, data);
    }
    async delete(id) {
        // Also delete all values for this field
        await CustomFieldValue_1.default.deleteMany({ customFieldId: id });
        await CustomField_1.default.deleteOne({ _id: id });
    }
    // --- Field Values ---
    async getValues(targetCollection, targetDocumentId) {
        return await CustomFieldValue_1.default.find({ targetCollection, targetDocumentId });
    }
    async setValue(data) {
        // Upsert: update if exists, create if not
        const result = await CustomFieldValue_1.default.findOneAndUpdate({
            customFieldId: data.customFieldId,
            targetDocumentId: data.targetDocumentId,
        }, data, { upsert: true, new: true });
        return result;
    }
    async setValues(values) {
        const results = [];
        for (const data of values) {
            const result = await this.setValue(data);
            results.push(result);
        }
        return results;
    }
    async deleteValue(id) {
        await CustomFieldValue_1.default.deleteOne({ _id: id });
    }
    async deleteValuesByDocument(targetCollection, targetDocumentId) {
        const result = await CustomFieldValue_1.default.deleteMany({
            targetCollection,
            targetDocumentId,
        });
        return result.deletedCount || 0;
    }
}
exports.CustomFieldService = CustomFieldService;
