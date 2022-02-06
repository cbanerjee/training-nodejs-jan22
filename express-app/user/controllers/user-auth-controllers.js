exports.register = (req, res)=>{
    console.log("This is a register request");
    res.end("This is register");
}

exports.login = (req,res)=>{
    console.log("This is a login req")
    res.end ("This is login");
}