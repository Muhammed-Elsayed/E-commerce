const Product = require("../models/Product")
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken")
const express = require("express")
const router = express.Router()


// Create Product 

router.post("/", verifyTokenAndAdmin, async(req, res)=> {
  const newproduct = new Product(req.body);
  try{
    const savedproduct = await newproduct.save();
    res.status(201).json(savedproduct);
  }catch(err){
    res.status(500).json(err)
  }
})

// Update product
router.put("/:id", verifyTokenAndAdmin, async(req, res)=>{
  try{
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {$set : req.body},
      {new: true}
    );
    res.status(200).json(updatedProduct)
  }catch(err){
    res.status(500).json(err)
  }
})

// Delete Product
router.delete("/:id", verifyTokenAndAdmin, async(req, res)=> {
  try{
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted successfully");
  }catch(err){
    res.status(500).json(err);
  }
})


module.exports = router;