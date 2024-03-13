const express = require("express");
const router = express.Router()
const TodoController = require('../controllers/TodoController');



router.post('/create', TodoController.createTodo)
router.put('/update/:id', TodoController.updateTodo)
router.delete('/delete/:id', TodoController.deleteTodo)
router.get('/get-all-todo', TodoController.getAllTodo)



module.exports = router