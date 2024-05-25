import mongoose from 'mongoose';

interface IExpense {
    userId: mongoose.Schema.Types.ObjectId;
    description: string;
    amount: number;
}

const expenseSchema = new mongoose.Schema<IExpense>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true },
    amount: { type: Number, required: true }
});

const Expense = mongoose.model<IExpense>('Expense', expenseSchema);
export default Expense;