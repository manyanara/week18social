// username (string, uique, required and trimmed),
// email (string, required, unique, must match valid email),
// thoughts (array of id value referencing thought model),
// friends (array referencing usermodel using id value), 
//virtual frindCount that retrives length of user friend array

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        trim: true},
    email: { 
        type: String, 
        required: true, 
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email address'] },
    thoughts: [{
        type: mongoose.Types.ObjectId,
        ref: 'thought'
    }],
    friends: [{
        type: mongoose.Types.ObjectId, // this is an object of another user's ID
        ref: 'user'
    }],
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });


module.exports = mongoose.model('User', userSchema)

