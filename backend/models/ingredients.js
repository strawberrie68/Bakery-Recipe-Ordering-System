const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ingredientsSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
});

const Ingredients = mongoose.model('ingredients', ingredientsSchema);

module.exports = Ingredients