const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('/:id', editController.getEdit) //get the edit page with item id to be edited
router.get('/delete/:id', editController.deleteItem)// deletes item
router.post('/update/:id', editController.updateItem) // updates the item 


module.exports = router