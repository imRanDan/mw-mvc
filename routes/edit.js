const express = require("express")
const router = express.Router()
const editController = require('../controllers/edit')

router.get('', editController.getEdit) //get the edit page with item id to be edited
router.get('', editController.deleteItem)// deletes item
router.post('', editController.updateItem) // updates the item 


module.exports = router