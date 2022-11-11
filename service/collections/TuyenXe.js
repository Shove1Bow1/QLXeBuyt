const {mongoose} = require('../mongoose_config');
var tuyenXe = new mongoose.Schema({
    // MaTuyenXe:String,
    DiemDi:String,
    DiemDen:String,
    ThoiGianDi:String,
    ThoiGianDen:String,
    GiaVe:Number,
    isDelete:{type:Boolean,default:false}
}, { timestamps: true })
const TuyenXe = mongoose.model('tuyenXe', tuyenXe);
module.exports = { TuyenXe }