import mongoose from 'mongoose';

interface IGroup {
    userId: mongoose.Schema.Types.ObjectId;
    name: string;
}

const groupSchema = new mongoose.Schema<IGroup>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: { type: String, required: true }
});

const Group = mongoose.model<IGroup>('Group', groupSchema);
export default Group;