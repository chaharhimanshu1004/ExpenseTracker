

const Transaction = require('../model/modelTrans');
exports.createTransactions = async(req,res)=>{
    try{
        const {name,type,amount} = req.body;
        const response = await Transaction.create({name,type,amount});
        res.status(200).json({
            success:true,
            message:'Entry of Transaction created successfully'
        })
    }
    catch(err){
        console.log('error in creating Transactions');
        res.status(500).json({
            success:false,
            message:'Error in creating Transactions'
        })
    }
}
exports.getTransactions = async(req,res)=>{
    let data = await Transaction.find({});
    return res.json(data);
};

exports.deleteTransaction = async(req,res)=>{
    try{
        // const {id} = req.params;
        // if req.params --- then api/v1/transactions/:id -- yeh must
        const {id} = req.query;
        console.log(id);
        await Transaction.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:'Transaction deleted successfully'
        })
    }
    catch(err){
        console.log('error in deleting Transactions');
        res.status(500).json({
            success:false,
            message:'Error in deleting Transactions'
        })
    }
};

exports.deleteBody = async(req,res)=>{
    try{
        
        await Transaction.deleteOne(req.body);
        res.status(200).json({
            success:true,
            message:'Transaction deleted successfully from body'
        })
    }
    catch(err){
        console.log('error in deleting Transactions from body');
        res.status(500).json({
            success:false,
            message:'Error in deleting Transactions from body'
        })
    }
};



exports.getLabels = async (req,res)=>{
    Transaction.aggregate([
        {
            $lookup:{
                from:"categories",
                localField:'type',
                foreignField:'type',
                as:"categories_info"
            }
        },
        {
            $unwind:"$categories_info"

        }
    ]).then(result=>{
        let data = result.map(v=>Object.assign({},{_id:v._id,name:v.name,type:v.type,amount:v.amount,color:v.categories_info['color']}));
        res.json(data);
    }).catch(error=>{
        res.status(400).json("LookUp Collection Error");
    })
};


