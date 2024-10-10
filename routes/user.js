const User = require("../models/User");
const express = require("express")
const router = express.Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");


//Updating profile
router.put("/:id", verifyTokenAndAuthorization, async(req, res)=> {
  try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set : req.body}, {new : true});
    res.status(200).json(updatedUser)
  }catch(err){res.status(500).json(err)}
})


//Delete User
router.delete("/:id", verifyTokenAndAuthorization, async(req, res)=>{
  try{
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("deleted successfully");
  }catch(err){
    res.status(500).json(err);
  }
});

 //Get all Users

router.get("/", verifyTokenAndAdmin, async(req, res)=> {
  try {
    const allusers = await User.find({})
    res.status(200).json(allusers);
  } catch (err){
    res.status(500).json(err)
  }
})

//Get User
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;