import express from 'express';
import connectDB from './src/config/db.js'
import cors from 'cors'
import bodyparser from 'body-parser'
import properties from './src/config/properties.js'
import userRoute from './src/api/routes/userRoute.js'
import adminRoutes from './src/api/routes/adminRoutes.js'
import artworkRoutes from './src/api/routes/artworkRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
  res.status(200).json({ status: 'online' });
});
app.use('/api/users', userRoute);
app.use('/api/admin', adminRoutes);
app.use('/api/artworks', artworkRoutes);


//server
const PORT = properties.PORT;
app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`);
    connectDB();
  } catch (err) {
    console.log(err);
  }
});
