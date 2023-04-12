// User schema
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String },
  avatar: { type: String },
    artworks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' }],
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artwork' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

export default mongoose.model('User', userSchema);
