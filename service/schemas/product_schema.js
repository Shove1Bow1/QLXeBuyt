const {mongoose} = require("../mongoose_config");
var productSchema=new mongoose.Schema({
    productName:String,
    quanity:{type:Number,min:0,max:200000},
    description:String,
    image:String,
    starQuality:{type:Number,min:0,max:5},
    price:{type:Number,min:1000,max:200000000},
    category:String,
    review:[String],
    isDelete:{type:Boolean,default:false}
});
const Products=mongoose.model('products',productSchema);
module.exports={Products}