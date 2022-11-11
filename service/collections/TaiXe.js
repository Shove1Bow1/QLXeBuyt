var {mongoose}=require("../mongoose_config")
var  taiXe=new mongoose.Schema({
    // MaTaiXe:String,
    HoTen:String,
    NgaySinh:String,
    SoCMT:String,
    DienThoai:String,
    DiaChi:String,
    Luong:Number,
    GioiTinh:Boolean,
    TinhTrang:String,
    isDelete:{type:Boolean,default:false}
})
const TaiXe=mongoose.model('taiXe',taiXe);
module.exports={TaiXe}