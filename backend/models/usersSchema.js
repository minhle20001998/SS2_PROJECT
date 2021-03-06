const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UsersSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String
    },
    authority: String,
    contacts: {
        email: {
            type: String,
            unique: true,
        }
    },
    avatar: String,
});

module.exports = mongoose.model('Users', UsersSchema);