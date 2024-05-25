import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import dashboardRoutes from './routes/dashboardRoutes';
import expenseRoutes from './routes/expenseRoutes';
import groupRoutes from './routes/groupRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

console.log(process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/groups', groupRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
