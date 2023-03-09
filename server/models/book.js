let mongoose = require('mongoose');

let bookModel = mongoose.Schema({
    name: String,
    email: String,
    phone: String
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);