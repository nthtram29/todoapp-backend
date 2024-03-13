const express = require("express");
const dotenv = require('dotenv');
const routes = require('./src/routes')
const { default: mongoose } = require("mongoose");

dotenv.config()

const app = express()
const port = process.env.PORT || 3002

app.use(express.json({ limit: '50mb' }));
routes(app);
// 
mongoose.connect(`${process.env.MONGO_DB}`)
    .then(()=>{
        console.log('Connect db success!')
    })
    .catch((err)=>{
        console.log(err)
    })
app.listen(port, ()=>{
    console.log('server is running in port: ', + port)
})

