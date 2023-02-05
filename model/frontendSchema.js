import mongoose from 'mongoose';

const frontEndSchema = new mongoose.Schema(
    {
        name: String,
        usage: [
            {
                year: Number,
                percentage: Number,
            },
            {
                year: Number,
                percentage: Number,
            },
            {
                year: Number,
                percentage: Number,
            },
            {
                year: Number,
                percentage: Number,
            },
            {
                year: Number,
                percentage: Number,
            },
            {
                year: Number,
                percentage: Number,
            },
            {
                year: Number,
                percentage: Number,
            },
        ],
    },
    {
        versionKey: false,
    }
);

export default mongoose.model('FrontEnd', frontEndSchema);
