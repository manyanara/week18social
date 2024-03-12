// reactionID (mongooses ObjectId data type), 
//reactionBody (string, required 280 character max), 
//username (string, required), 
//createdAt( date, default value to current time, getter method to format atimestamp on query)
// schmea only

const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionId: {type: Schema.Types.ObjectId},
    reactionBody: { type: String, max: 280 },
    username: { type: String, required: true},
    createdAt: {type: Date}, 
})