const express = require('express')
const { moviesControllers } = require('../controllers')

const router = express.Router()

router.get('/getmovies', moviesControllers.getMovie)
router.get('/getmovies/:id', moviesControllers.getMovieById)
router.delete('/deletemovie/:id', moviesControllers.deleteMovie)
router.post('/addmovie', moviesControllers.addMovie)
router.put('/editmovie/:id', moviesControllers.editMovie)

module.exports = router