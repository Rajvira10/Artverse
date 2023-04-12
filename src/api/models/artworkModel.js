// Artwork schema
import mongoose from 'mongoose';

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  image: { type: String, required: true },
  description: { type: String },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
  collections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collection' }],
  price: {
    type: Number, required: true
  },
  feedback: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rating: { type: Number, required: true },
    comment: { type: String }
  }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});


export default mongoose.model('Artwork', artworkSchema);
