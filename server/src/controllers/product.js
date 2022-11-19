
let Product = require('../models/Product');

let data = [{
    name:"Neha",
    title:"hello"
}]
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
    console.log("first")
    const products = new Product({
        title: "hello",
        description:"hello world"
    })
    try{
        const result = await products.save();
        console.log("Result");
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