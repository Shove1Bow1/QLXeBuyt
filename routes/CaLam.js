const express=require("express");
const router=express.Router();
require("dotenv").config();
const {CaLam}=require("../service/collections/CaLam");
const { messageRespone } = require("../ultis/messageRespone");
router.get("/all",async (req,res)=>{
    await CaLam.find({isDelete:false},(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        if(result)
            res.send(messageRespone("200",result));
        else
            res.send(messageRespone("400"));
    })
})
router.get("/by/:id",async (req,res)=>{
    await CaLam.find({_id:req.params.id, isDelete:false},(err,result)=>{
        if(err){
            console.log(err)
            return;
        }
        if(result)
            res.send(messageRespone("200",result));
        else
            res.send(messageRespone("400"));
    })
})
router.post("/update",async (req,res)=>{
    // const ThoiGianDen=req.body.ThoiGianDen;
    // const ThoiGianDi=req.body.ThoiGianDi;
    // const DiemDi=req.body.DiemDi;
    // const DiemDen=req.body.DiemDen;
    // const {ThoiGianDen,ThoiGianDi,DiemDi,DiemDen,GiaVe}=req.body;
    var doc =await CaLam.updateOne({_id:req.headers.id,isDelete:false},{...req.body},(err)=>{
        if(err){
            console.log(err)
            return;
        }
    }).clone();
    if(doc.modifiedCount>0){
        res.send(messageRespone("200"));
    }
    else
        res.send(messageRespone("400"));
})
router.delete("/delete",async (req,res)=>{
    const {id}=req.headers;
    await CaLam.updateOne({_id:id},{isDelete:true},(err)=>{
        if(err){
            console.log(err)
            res.send(messageRespone("400"));
            return;
        }
        res.send(messageRespone("200",result));
    })
})
router.post("/create", async(req,res)=>{
    var doc=await CaLam.create({...req.body},(err)=>{
        if(err)
            console.log(err);
    })
    await doc.save();
    if(doc.createdAt){
        res.send(messageRespone("200"))
    }
    else
        res.send(messageRespone("400"));
})
module.exports=router;