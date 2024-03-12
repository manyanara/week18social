// thoughtText (string, required, 1-280 character),
// createdAt (Datea, set default value to current timestamp, getter method to format tiemstamp),
// username (user that created thought, string, requried),
// reactions (array of nexted docuemnts created with reaction Schema),
// virtual reactinonCoutn that retrives length of thoughts reactions
const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {type: Schema.Types.ObjectId},
    reactionBody: { type: String, max: 280 },
    username: { type: String, required: true},
    createdAt: {type: Date}, 
});

const thoughtSchema = new mongoose.Schema({
    thoughtText: {},
    createdAt: {type: Date,},
    username: {},
    reactions: reactionSchema,
},{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
)