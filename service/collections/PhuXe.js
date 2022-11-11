const {mongoose} = require('../mongoose_config');
var phuXe = new mongoose.Schema({
    // MaPhuXe:String,
    HoTen:String,
    NgaySinh:String,
    SoCMT:String,
    DienThoai:String,
    DiaChi:String,
    Luong:String,
    TinhTrang:String,
    GioiTinh:Boolean,
    isDelete:{type:Boolean,default:false}
},{timestamps:true});
const PhuXe=mongoose.model("phuXe",phuXe);
module.exports={PhuXe}