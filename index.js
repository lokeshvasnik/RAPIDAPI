import express from 'express';
import mongoose from 'mongoose';
import frontEndSchema from './model/frontendSchema.js';
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB

mongoose.connect(
    process.env.URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log('Connected to MongoDB')
);

// Routes
app.get('/front-end-frameworks', async (req, res) => {
    try {
        const frontEnd = await frontEndSchema.find();
        return res.json(frontEnd);
    } catch (err) {
        console.log(err);
    }
});

app.post('/front-end-frameworks', async (req, res) => {
    try {
        const { name, usage } = req.body;
        const frontEnd = frontEndSchema.create({
            name,
            usage,
        });
        return res.json(frontEnd);
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
