import { Router } from 'express';
import Group from '../models/Group';

const router = Router();

// Get all groups for a user
router.get('/', async (req, res) => {
    try {
        const userId = req.body.userId;
        const groups = await Group.find({ userId });
        res.json(groups);
    } catch (error) {
        const message = (error as Error).message;
        res.status(500).json({ message });
    }
});

// Add a new group
router.post('/', async (req, res) => {
    const { userId, name } = req.body;
    try {
        const newGroup = new Group({ userId, name });
        await newGroup.save();
        res.status(201).json(newGroup);
    } catch (error) {
        const message = (error as Error).message;
        res.status(500).json({ message });
    }
});

// Update a group
router.put('/:id', async (req, res) => {
    const { name } = req.body;
    try {
        const updatedGroup = await Group.findByIdAndUpdate(req.params.id, { name }, { new: true });
        res.json(updatedGroup);
    } catch (error) {
        const message = (error as Error).message;
        res.status(500).json({ message });
    }
});

// Delete a group
router.delete('/:id', async (req, res) => {
    try {
        await Group.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        const message = (error as Error).message;
        res.status(500).json({ message });
    }
});

export default router;