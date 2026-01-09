const {nanoid} = require("nanoid");   //nanoid import
const URL = require("../models/url")   //URL Model import

async function handlegenerateNewShortURL(req,res){
   const body = req.body;
   if(!body.url) return res.status(400).json({error : "url is required"})

   const  shortID = nanoid(8);  //Short ID generate
   await URL.create({
    shortId : shortID, 
    redirectURL : body.url,  //Database me data save
    visitHistory : [],

});
return res.json({id: shortID})   //Client ko response

}
async function handleGetAnalytics(req,res){
    const shortId= req.params.shortId; //URL se shortId lena
     const result = await URL.findOne({shortId})  //Database se data find
     return res.json({totalClicks:result.visitHistory.length ,
         analytics:result.visitHistory});  //Analytics response
}
module.exports = {
 handlegenerateNewShortURL,
 handleGetAnalytics,
};