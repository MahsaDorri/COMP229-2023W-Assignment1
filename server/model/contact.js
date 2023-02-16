let mongoose = require('mongoose');
let contactModel = mongoose.Schema({
    name: String,
    email: String,
    number: String


},

{
    collection:"contact"
});

module.exports = mongoose.model('contact',contactModel);