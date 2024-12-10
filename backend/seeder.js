import dotenv from 'dotenv';
import connectDatabase from './config/db.js';
import User from './models/user.model.js';
import Product from './models/product.model.js';
import Order from './models/order.model.js';
import users from './data/users.js';
import products from './data/products.js';
import colors from 'colors';

dotenv.config();

connectDatabase();

const seedData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const insertedUsers = await User.insertMany(users);
    const adminUser = insertedUsers[0]._id;

    const seedProducts = await products.map((p) => ({ ...p, user: adminUser }));

    await Product.insertMany(seedProducts);

    console.log('Successfully seeded data!'.bgGreen);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log('Successfully deleted data!'.bgYellow);
    process.exit();
  } catch (error) {
    console.log(`${error}`.bgRed);
    process.exit(1);
  }
};

process.argv[2] === '-d' ? deleteData() : seedData();
