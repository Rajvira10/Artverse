// Collection schema
import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  artworks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' }]
});

export default mongoose.model('Collection', collectionSchema);
