//This is the HOMEBASE for all the API routes, 
//ADD more API routes here if neceesary
const router = require('express').Router();

const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

//All Routes
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;