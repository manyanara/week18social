const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    // gets all users 
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // gets single thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // post a new thought
  async createThought(req, res) {
    try {
      const dbThoughtData = await Thought.create(req.body);
      // find user and add thought by id
      const user= await User.findOneAndUpdate(
        {_id: req.body.userId },
        { $addToSet: {thoughts: dbThoughtData._id}},
        {new: true}
      );
      if (!user) {
        console.log("no user found!");
        return res.status(404).json({message: 'no user found!'})
      }
      res.json(dbThoughtData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // post a reaction
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: {reactions: req.body}},
        { runValidators: true, new: true }
      );

      if (!thought) {
        console.log('no thought found');
        return res.status(404).json({message: "no thought found!"});
      }
      res.json(thought);
    } catch (err){
      console.log(err);
      res.status(500).json(err);
    }
  },
  // delete a thought

  // delete a reaction


};

