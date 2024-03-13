const Todo = require('../models/TodoModel')



const createTodo = (newTodo) =>{
    return new Promise(async (resolve, reject)=>{
        const {title , description , status } = newTodo
        
        try{

            const checkTodo = await Todo.findOne({
                title: title
            })
            if(checkTodo !== null){
                resolve({
                    status: 'OK',
                    message: 'The name of todo is already'
                })
            }
            
            const newTodo = await Todo.create({
               title,
               description,
               status
            })
            if(newTodo){
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: newTodo
                })
            }
        }
        catch(e){
            reject(e)
        }
    })
}

const updateTodo = (id, data) => {
    return new Promise(async (resolve, reject)=>{
        try{
            const checkTodo = await Todo.findOne({
                _id: id
            })
            if(checkTodo === null){
                resolve({
                    status: 'OK',
                    message: 'The Todo is not defined'
                })
            }

            const updatedTodo = await Todo.findByIdAndUpdate(id, data, {new: true})
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: updatedTodo
                })
        } catch(e){
            reject(e)
        }

    })
}
const deleteTodo = (id) => {
    return new Promise(async (resolve, reject)=>{
        try{
            const checkTodo = await Todo.findOne({
                _id: id
            })
            if(checkTodo === null){
                resolve({
                    status: 'ERR',
                    message: 'The Todo is not defined'
                })
            }

            await Todo.findByIdAndDelete(id)
                resolve({
                    status: 'OK',
                    message: 'Delete Todo success'
                })
        } catch(e){
            reject(e)
        }

    })
}

const getAllTodo = (filter) => {
    
    return new Promise(async (resolve, reject)=>{
        try{
          
            let allTodo = await Todo.find().sort()
            
             
            resolve({
                status: 'OK',
                message: 'SUCCESS',
                data: allTodo,
            })

           
            
                if(filter){
                    const label = filter[0];
                    const allObjectFilter = await Todo.find({ [label]: {'$regex': filter[1]}})
                    resolve({
                        status: 'OK',
                        message: 'SUCCESS',
                        data: allObjectFilter,
                     
                    })
                }  
        } catch(e){
            reject(e)
        }

    })
}

module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
    getAllTodo
   }