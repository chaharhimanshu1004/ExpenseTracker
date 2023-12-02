const mongoose =  require('mongoose')
const Schema = mongoose.Schema;

// categories => field => ['type', 'color']
const categories_model =new Schema({
    type: { type : String, default: "Investment"},
    color : {type: String, default: '#FCBE44'}
})

module.exports = mongoose.model("Categories",categories_model);



