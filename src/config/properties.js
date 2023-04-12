import dotenv from 'dotenv';
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const properties = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'production',
  JWT_SECRET: process.env.JWT_SECRET,
  CLIENT_URL: process.env.CLIENT_URL,
  JWT_EXPIRE: process.env.JWT_EXPIRE,
  MONGO_URI:
    process.env.MONGO_URI ||
    'mongodb+srv://development:8HlA3ekRKZ1tKkdj@development.hewie.mongodb.net/meritspace_dev?retryWrites=true&w=majority',
};
export default properties;
