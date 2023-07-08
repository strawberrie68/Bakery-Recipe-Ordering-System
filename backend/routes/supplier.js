const router = require('express').Router();
let Supplier = require('../models/supplierItems')

router.route('/').get((req, res) => {
    Supplier.find()
        .then(Supplier => res.json(Supplier))
        .catch(err => res.status(400).json('Error: ' + err))

})


router.route('/add').post((req, res) => {
    const ingredient = req.body.ingredient;
    const size = req.body.size;
    const price = req.body.price;
    const category = req.body.category;


    const newSupplier = new Supplier({
        ingredient, size, price, category
    })

    newSupplier.save()
        .then(() => res.json('Supplier added'))
        .catch(err => res.status(400).json('Error: ' + err))
})


module.exports = router