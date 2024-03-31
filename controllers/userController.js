const User = require('../models/User');

module.exports = {
    // gets all users 
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // gets single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // create a new user
  async createUser(req, res) {
    try {
      const dbUserData = await User.create(req.body);
      res.json(dbUserData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // update user to add new friend
  async addFriend(req, res){
    try{
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.body.username } },
          { new: true }
        );
        if (!user) {
            return res.status(404).json({
              message: 'no user with that ID',
            });
          }
    
          res.json('Added friend 🎉')
    
    } catch (err){
        console.log(err);
        res.status(500).json(err);
    }
  },
  // delete user
  async deleteUser(req, res){
    try {
      const user = await User.findOneAndDelete({_id: req.params.userId});

      if (!user){
        return res.status(404).json({message: "no user found!"});
      }

      res.json("user deleted")
    } catch (err){
      console.log(err);
      return res.status(500).json(err)
    }
  }
};

