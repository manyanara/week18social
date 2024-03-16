const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { userData, thoughtData } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

  await User.collection.insertMany(userData);
  console.log(userData);

  await Thought.collection.insertMany(thoughtData);
  console.log(thoughtData);
  process.exit(0);
});
