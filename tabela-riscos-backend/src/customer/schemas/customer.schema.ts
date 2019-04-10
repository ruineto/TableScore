import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
    name: String,
    col1: String,
    col2: String,
    col3: String,
    col4: String,
    col5: String,
    col6: String,
    col7: String,
    created_at: { type: Date, default: Date.now }
})