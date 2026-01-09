const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({    // Crete Schema
    shortId:{
        type : String,
        required : true,   //shortId field
        unique: true,
    },
    redirectURL:{
        type : String,  //redirectURL field(original url store krega)
        required : true,
    },
    visitHistory:[{timestamp:{type: Number} }],  //visitHistory field(Har baar jab koi short URL open kare, time store hoga)
},{timestamps : true }
);

const URL = mongoose.model('url' , urlSchema);

module.exports = URL;
