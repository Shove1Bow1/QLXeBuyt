require("dotenv").config();
const {mongoose} = require('../mongoose_config');
var xe = new mongoose.Schema({
    // MaXe:String,
    SoChoNgoi:Number,
    BienSo:String,
    NamSX:String,
    isDelete:{type:Boolean,default:false}
}, { timestamps: true })
const Xe = mongoose.model('xe', xe);
module.exports = { Xe }