
const Categories = require('../model/model');
exports.create_categories = async(req,res) => {
    try{
        const {type,color} = req.body;
        const response = await Categories.create({type,color});
        res.status(200).json({
            success:true,
            message:'Entry of categories created successfully'
        })
    }
    catch(err){
        console.log('error in creating categories');
        res.status(500).json({
            success:false,
            message:'Error in creating categories'
        })
    }
};

exports.getCategories = async(req,res)=>{
    let data = await Categories.find({});
    return res.json(data);
};
















