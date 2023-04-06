// Review schema
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reviewee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  artwork: { type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' },
  rating: { type: Number, required: true },
  comment: { type: String },
}, { timestamps: true });

export default mongoose.model('Review', reviewSchema);
