export const ModificationSchema = {
    createdAt: { type: Date, default: Date.now },
    createdBy: {
        type: String,
        required: true
    },
    createdByName: {
        type: String,
        required: true
    },
    updatedAt: { type: Date , default: null },
    updatedBy: {
        type: String,
        required: true
    },
    updatedByName: {
        type: String,
        required: true
    },
}