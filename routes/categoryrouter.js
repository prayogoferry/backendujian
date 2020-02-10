const express = require('express')
const { categoriesControllers } = require('../controllers')

const router = express.Router()

router.get('/getcategory', categoriesControllers.getCategory)
router.get('/getcategory/:id', categoriesControllers.getCategoryById)
router.delete('/deletecategory/:id', categoriesControllers.deleteCategory)
router.post('/addcategory', categoiesControllers.addCategory)
router.put('/editcategory/:id', categoriesControllers.editCategory)

module.exports = router