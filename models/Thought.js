// thoughtText (string, required, 1-280 character),
// createdAt (Datea, set default value to current timestamp, getter method to format tiemstamp),
// username (user that created thought, string, requried),
// reactions (array of nexted docuemnts created with reaction Schema),
// virtual reactinonCoutn that retrives length of thoughts reactions

const mongoose = require('mongoose');
const { Schema } = require('./User');

const reactionSchema = new mongoose.Schema({
    reactionId: {type: mongoose.Types.ObjectId},
    reactionBody: { type: String, max: 280 },
    username: { type: String, required: true},
    createdAt: {type: Date}, 
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, max: 280},
    createdAt: {type: Date,},
    username: { 
        type: String, 
        required: true 
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reactions: [reactionSchema]
},{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });


  const Thought = mongoose.model('Thought', thoughtSchema);
  module.exports = Thought;