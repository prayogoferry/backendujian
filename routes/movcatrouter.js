const express = require('express')
const { movCat} = require('../controllers')

const router = express.Router()

router.get('/getmovcat', movCat.getMoveCat)
router.delete('/deletemovcat/:id', movCat.deleteMoveCat)
router.post('/addmovcat', movCat.addMoveCat)


module.exports = router