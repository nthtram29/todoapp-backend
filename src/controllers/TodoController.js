const TodoService = require('../services/TodoService')

const createTodo = async(req, res) =>{
    try{
        
        const {title , description , status } = req.body
       
        if(!title || !description || !status ){
            return res.status(200).json({
                status: "ERR",
                message: 'The input is required'
            })
        }
       const response = await TodoService.createTodo(req.body)
       return res.status(200).json(response)
    }
    catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

const updateTodo = async(req, res) =>{
    try{
      const todoId = req.params.id 
      const data = req.body 
      if(!todoId){
        return res.status(200).json({
            status: 'ERR',
            message: 'The todoID is required'
        })
      }
     
      const response = await TodoService.updateTodo(todoId, data)
      return res.status(200).json(response)
    }
    catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

const deleteTodo = async(req, res) =>{
    try{
      const todoId = req.params.id 
    
      if(!todoId){
        return res.status(200).json({
            status: 'ERR',
            message: 'The todoID is required'
        })
      }
   
      const response = await TodoService.deleteTodo(todoId)
      return res.status(200).json(response)
    }
    catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

const getAllTodo = async(req, res) =>{
    try{
        const { limit, page, sort, filter } = req.query
      const response = await TodoService.getAllTodo(Number(limit) || null, Number(page) || 0, sort, filter)
      return res.status(200).json(response)
    }
    catch(e){
        return res.status(404).json({
            message: e
        })
    }
}

module.exports ={
    createTodo,
    updateTodo,
    deleteTodo,
    getAllTodo
 }