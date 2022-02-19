const jwt = require("jsonwebtoken");

const verify = (req,res, next) =>{
    const token = req.headers["authorization"];

    if(!token) {
        res.status(401).send("Unauthorized");
    }

    try
    {
    const payload = jwt.verify(token, "This is my secret key");
    req.user = payload;
    }catch (err){
        return res.status(401).send("Invalid Token");
    }
    next();
}

module.exports = verify;