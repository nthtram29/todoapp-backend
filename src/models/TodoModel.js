const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema(
    {
    title: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    status: {type: String, required: true},
      
    },
    {
        timestamps: true,
    }
);
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;