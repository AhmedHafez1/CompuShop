import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    const mongooseConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to db: ${mongooseConnection.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDatabase;
