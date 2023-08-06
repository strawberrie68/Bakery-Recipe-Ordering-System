const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    ingredient: {
        type: String,
        required: true,
    },
    size: [{
        quantity: {type: Number, required: false},
        quantityType: {type: String, required: false},
    }],
    price: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },


});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier