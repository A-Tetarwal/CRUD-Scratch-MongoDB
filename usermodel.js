const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`); // database created

const userSchema = mongoose.Schema({ // this is a method that accepts an object
    name: String,
    username: String,
    email: String
})

// neeche model create kr rhe hain, usse collection banega. Aur usko kisi bhi route mein use krne ke liye export krna hoga
module.exports = mongoose.model('user', userSchema); // likha user hai, banega users