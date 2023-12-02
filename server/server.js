const express = require('express')
const app = express();
const cors = require('cors')
require('dotenv').config({path:'./config.env'});
const port = process.env.PORT || 6100;
// use middlewares

app.use(cors());
app.use(express.json());

// mongodb connection

const con = require('./db/connection')

// using routes
app.use(require('./routes/router'));

// listen to the valid connection only if we have database there
con.then(db=>{
    if(!db)return process.exit(1);
    app.listen(port,()=>{
        console.log(`Server is running on port: ${port}`)
    })

    app.on('error',err=>console.log(`Failed to connect with HTTP server: ${err}`))
}).catch((err)=>console.log(`Connection failed of db ${err}`))





