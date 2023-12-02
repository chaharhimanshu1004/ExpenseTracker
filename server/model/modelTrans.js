
const mongoose =  require('mongoose')
const Schema = mongoose.Schema;

// transactions  => field => ['name', 'type', 'amount', 'date']
const transaction_model = new Schema({
    name: { type : String, default:"Anonymous"},
    type: { type : String, default:"Investment"},
    amount: { type : Number},
    date: { type : Date, default : Date.now}
})

module.exports = mongoose.model("Transaction",transaction_model);