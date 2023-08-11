const mongoose = require("mongoose")

const mobileSchema = new mongoose.Schema({

category:{type:String,required:true},
brand:{type:String,required:true},
name:{type:String,required:true},
price:{type:Number,required:true},
mrp:{type:Number,required:true},
percent_off:{type:String},
img_1:{type:String},
img_2:{type:String},
img_3:{type:String},
description:{type:String,required:true},


})



const MobileModel = mongoose.model("Mobile", mobileSchema)
const HomepagedealsofdayModel = mongoose.model("Homepagedealsofday", mobileSchema)
const HomepagegadgetstoreModel = mongoose.model("Homepagegadgetstore", mobileSchema)
const HomepagefestivalstoreModel = mongoose.model("Homepagefestivalstore", mobileSchema)
const HomepagefashionzoneModel = mongoose.model("Homepagefashionzone", mobileSchema)
const HomepagesportsModel = mongoose.model("Homepagesports", mobileSchema)
const HomepagebrandstoreModel = mongoose.model("Homepagebrandstore", mobileSchema)
const HomepagebranddealsModel = mongoose.model("Homepagebranddeals", mobileSchema)
const MensModel = mongoose.model("Men", mobileSchema)
const WomenModel = mongoose.model("Women", mobileSchema)


module.exports = { MobileModel,HomepagedealsofdayModel,
    HomepagegadgetstoreModel,
    HomepagefestivalstoreModel,
    HomepagefashionzoneModel,
    HomepagesportsModel,
    HomepagebrandstoreModel,
    HomepagebranddealsModel,MensModel,WomenModel }




