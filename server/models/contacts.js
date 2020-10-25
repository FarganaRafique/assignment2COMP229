let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "businessContacts"
});

module.exports = mongoose.model('Contacts', contactsModel);