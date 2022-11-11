require("dotenv").config();
const {mongoose} = require('../mongoose_config');
var admin = new mongoose.Schema({
    TenDangNhap:String,
    MatKhau:String,
    isDelete:{type:Boolean,default:false}
}, { timestamps: true })
const Admin = mongoose.model('admin', admin);
module.exports = { Admin }