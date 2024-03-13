const TodoRouter = require('./TodoRouter')


const routes = (app) =>{
    app.use('/api/todo', TodoRouter)
}

module.exports = routes