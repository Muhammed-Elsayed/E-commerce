const jwt = require("jsonwebtoken");
const User = require("../models/User");

const verifyToken =(req, res, next) => {
  const header = req.headers.token;
  if (header){
    const token = header.split(" ")[1] 
    jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
      if(err) res.status(401).json("token is invalid");
      req.user = user;
      next()
    })

  }else{
    return (res.status(401).json("This token is not valid"))
  }
  
}
const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};

