// thoughtText (string, required, 1-280 character),
// createdAt (Datea, set default value to current timestamp, getter method to format tiemstamp),
// username (user that created thought, string, requried),
// reactions (array of nexted docuemnts created with reaction Schema),
// virtual reactinonCoutn that retrives length of thoughts reactions
const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
    thoughtText: {},
    createdAt: {type: Date,},
    username: {},
    reactions: [],
},{
    toJSON: {
        virtuals: true,
    },
    id: false,
}
)