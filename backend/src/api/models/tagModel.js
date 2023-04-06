// Tag schema
import mongoose from 'mongoose';

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

export default mongoose.model('Tag', tagSchema);
