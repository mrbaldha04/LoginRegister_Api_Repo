const user = require('../model/userModel')

exports.InsertData = async(req, res) => {
    var data = await user.create(req.body);
    res.status(200).json({
        status : "Data Insert",
        data
    })
}

exports.RegisterData = async(req, res) => {
    await user.create(req.body.email);
    res.status(200).json({
        status : "Registered Successfully"
    })
}

exports.LoginData = async(req, res) => {
    var data = await user.find({email : req.body.email})
    res.status(200).json({
        status : "Login Success"
    })
}