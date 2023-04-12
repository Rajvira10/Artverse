import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  seller: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  artwork: { type: mongoose.Schema.Types.ObjectId, ref: 'Artwork', required: true },
  price: {
    amount: { type: Number, required: true },
    currency: { type: String, required: true }
  }
}, { timestamps: true });

export default mongoose.model('Transaction', transactionSchema);
