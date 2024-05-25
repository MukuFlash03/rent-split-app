import { Router } from 'express';
import Expense from '../models/Expense';

const router = Router();

// Get all expenses for a user
router.get('/', async (req, res) => {
    try {
        const userId = req.body.userId;  // Assuming you pass userId in the body
        const expenses = await Expense.find({ userId });
        res.json(expenses);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

// Get an expense by ID
router.get('/:id', async (req, res) => {
    try {
        const expense = await Expense.findById(req.params.id);
        if (!expense) {
            return res.status(404).send('Expense not found');
        }
        res.json(expense);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

// Add a new expense
router.post('/', async (req, res) => {
    const { userId, description, amount } = req.body;
    try {
        const newExpense = new Expense({ userId, description, amount });
        await newExpense.save();
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

// Update an expense
router.put('/:id', async (req, res) => {
    const { description, amount } = req.body;
    try {
        const updatedExpense = await Expense.findByIdAndUpdate(req.params.id, { description, amount }, { new: true });
        res.json(updatedExpense);
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

// Delete an expense
router.delete('/:id', async (req, res) => {
    try {
        await Expense.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;
