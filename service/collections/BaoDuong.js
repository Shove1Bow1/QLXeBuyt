var {mongoose}=require('../mongoose_config');
var baoDuong=new mongoose.Schema({
    // MaXe:String,
    NoiDungBaoDuong:String,
    PhiBaoDuong:Number,
    NgayBatDau:String,
    NgayKetThuc:String,
    isDelete:{type:Boolean,default:false}
},{timestamps:true});
const BaoDuong=mongoose.model("baoDuong",baoDuong);
module.exports={BaoDuong}