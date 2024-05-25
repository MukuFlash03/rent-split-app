import { Router } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';

const router = Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        res.send('User logged in successfully');
    } catch (error) {
        res.status(500).json({ message: (error as Error).message });
    }
});

export default router;