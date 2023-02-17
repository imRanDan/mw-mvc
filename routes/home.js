// Handles initial GET request for the homepage
// Handles POST method request for adding a new item

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //read only
router.post('/new', homeController.createItem) // create route

module.exports = router 