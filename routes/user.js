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

module.exports = router;