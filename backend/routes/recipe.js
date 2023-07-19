const router = require('express').Router();
let Recipe = require('../models/recipes')
let Supplier = require('../models/supplierItems')

router.get("/", async (req, res) => {
    const qtype = req.query.category;
    try{
        let recipe;
        if(qtype){
            recipe = await Recipe.find({
                type: {
                    $in: [qtype],
                }
            })
        }else{
            recipe = await Recipe.find();
        }
        res.status(200).json(recipe)
    }catch(err) {
        res.status(500).json('Error: ' + err)
    }
    

    // Recipe.find()
    //     .then(recipe => res.json(recipe))
    //     .catch(err => res.status(400).json('Error: ' + err))

})

router.route('/detail/:id').get((req, res) => {
    Recipe.findById(req.params.id)
        .then(Recipe => res.json(Recipe))
        .catch(err => res.status(404).json({ noRecipefound: 'No Recipe found' }))
})
    

router.route('/add').post((req, res) => {
    const recipeTitle = req.body.recipeTitle;
    const image = req.body.image;
    const servings = req.body.servings;
    const ingredients = req.body.ingredients;
    const prepTime = req.body.prepTime;
    const type = req.body.type;
    const tag = req.body.tag;
    const fav = req.body.fav


    const newRecipe = new Recipe({
        recipeTitle, servings, ingredients, prepTime, type, tag, fav, image
    })

    newRecipe.save()
        .then(() => res.json('Recipe added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// router.route('/:id').post((req, res) => {
//     Quote.create(req.body)
//         .then(function (dbQuotes) {
//             return Recipe.findOneAndUpdate({ _id: req.params.id },
//                 { $push: { quote: dbQuotes._id } },
//                 { upsert: true })
//         })
//         .then(function (dbRecipe) {
//             res.json(dbRecipe)
//         })
//         .catch(err => res.json(err))
// })


module.exports = router