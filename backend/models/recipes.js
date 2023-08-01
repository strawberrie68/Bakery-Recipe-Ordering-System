const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const recipeSchema = new Schema({

    recipeTitle: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    ingredients: [{
        quantity: { type: Number, required: false },
        quantityType: { type: String, required: false },
        ingredient: { type: String, ref: 'Ingredient' },
    }],

    prepTime:
        [{
            time: { type: Number, required: true },
            timeUnit: { type: String, required: true }
        }],

    category: {
        type: [String]
    },
    tag: {
        type: [String]
    },
    fav: {
        type: Boolean
    }


});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe