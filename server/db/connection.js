const mongoose = require('mongoose')
const conn = mongoose.connect(process.env.ATLAS_URI)
    .then(db=>{
        console.log('Db connection successfull');
        return db;
    })
    .catch((err)=>{
        console.log('error in db connection');
    })

module.exports = conn;