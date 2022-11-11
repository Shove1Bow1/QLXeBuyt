const {mongoose} = require('../mongoose_config');
var luuThong = new mongoose.Schema({
//    MaPhuXe:String,
   MaTaiXe:String,
   MaTuyenXe:String,
   MaXe:String,
   MaCa:String,
   NgayDi:Date,
   SLVe:String,
   SoVeBanDuoc:Number,
   ChiPhiXang:Number,
   isDelete:{type:Boolean,default:false}
},{timestamps:true})
const LuuThong=mongoose.model("bills",luuThong);
module.exports={
    LuuThong
}