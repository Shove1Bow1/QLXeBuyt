const {mongoose} = require("../mongoose_config");
var caLam=new mongoose.Schema({
    // MaCa:String,
    ThoiGianBatDau:String,
    ThoiGianKetThuc:String,
    isDelete:{type:Boolean,default:false}
});
const CaLam=mongoose.model('products',caLam);
module.exports={CaLam}