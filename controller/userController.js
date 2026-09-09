const user = require('../model/userModel')


exports.RegisterData = async(req, res) => {
    var findData = await user.find({email: req.body.email})
    if(findData.length >= 1)
    {
          res.status(200).json({
            status : "Email already exists"
        })
    }
    
    else
    {
        var data = await user.create(req.body);
        res.status(200).json({
        status : "Registered Successfully", data
    })
}
}

exports.LoginData = async(req, res) => {
    var data = await user.find({email : req.body.email})
    res.status(200).json({
        status : "Login Success"
    })
}