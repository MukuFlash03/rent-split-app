import { Router } from 'express';
import User from '../models/User';
import Expense from '../models/Expense';  // Correct the casing here
import Group from '../models/Group';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const userId = req.body.userId;  // Assuming you pass userId in the body for simplicity
        const user = await User.findById(userId);
        const expenses = await Expense.find({ userId });
        const groups = await Group.find({ userId });

        res.json({
            user,
            expenses,
            groups
        });
    } catch (error) {
        const message = (error instanceof Error) ? error.message : 'Unknown error';
        res.status(500).json({ message });
    }
});

export default router;