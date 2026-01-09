const {v4 : uuidv4}=  require("uuid")
const User = require("../models/user")

async function handlUserSignup(req,res){
const {name , email,password} = req.body;
await User.create({
    name,
    email,
    password,
});
return res.render("/");
}
async function handlUserLogin(req,res){
const {email,password} = req.body;
 const user= await User.findOne({
     email,
    password,
});
if(!user) return res.render("login",{
    error : "Invalid Username or Password"
})
const sessionid = uuidv4();
return res.redirect("/");
}


module.exports = {
    handlUserSignup,
    handlUserLogin,
}