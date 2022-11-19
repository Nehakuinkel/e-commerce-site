
let Product = require('../models/Product');


exports.getProducts = async(req,res,next) => {
    try{
        await Product.find().exec(( err, products) => {
            if(err){
                return res.status(400).json({
                    error
                })
            }
            if(products){
                return res.status(200).json({
                    products
                })
            }
        })
    }
    catch(error){
        console.log(error)
    }
   
    
}
exports.addProducts = async(req,res,next) => {
    let data = req.body
    console.log(req.body)
   const products = new Product(data)
    try{
        const result = await products.save();
        console.log(result)
        if(result){
            return res.status(201).json({
                msg: "Products added successfully"
            })
        }
    }
    catch(err) {
        return res.status(400).json({
            msg: msg
        })
    }
}