var express = require("express");
const { Products } = require("../service/collections/products");
const { Users } = require("../service/collections/users");
const { AcceptIncomingReq } = require("../service/function_config");
var router = express.Router();
require("dotenv").config();
const { messageRespone } = require("../ultis/messageRespone");

/* GET home page. */
router.get("/all", AcceptIncomingReq, function (req, res) {
  Products.find({ isDelete: false }, (err, data) => {
    if (err)
      res.send(messageRespone(400))
    else
      res.send(messageRespone(200, data))

  })
});
// router.get("/:id", AcceptIncomingReq, function (req, res) {
//   const id = req.params.id;
//   Products.findOne({ isDelete: false, _id: id }, (err, data) => {
//     if (err)
//       res.send(messageRespone(400))
//     else
//       res.send(messageRespone(200, data))

//   })
// });
// router.post("/bla", AcceptIncomingReq, function (req, res) {
//   Products.create({ ...req.body })
//   res.send(messageRespone(200));
// });
// router.delete("/", AcceptIncomingReq, function (req, res) {
//   const { id } = req.headers
//   console.log(req.headers)
//   Users.updateOne({ _id: id }, { $set: { isDelete: true } }, (err, data) => {
//     if (err)
//       res.send(messageRespone(400))
//     else
//       res.send(messageRespone(200, { ...data }))
//   })
// });
router.get("/by_category", async (req, res) => {
  if (!req.headers.category || req.headers.category.length < 3) {
    res.send({
      status: "missing some info", message: false, messageResponse: messageRespone("400")
    })
    return;
  }
  const {category} =req.headers;
  await Products.find({ category: category }, async (err, result) => {
    if (err) {
      console.log(err)
      res.send({ status: "error in server", messageResponse: messageRespone("400") });
      return;
    }
    if (result.length===0) {
      res.send({ status: "no result", messageResponse: messageRespone("200") });
      return;
    }
    else {
      res.send({
        status:"success retrieve category",
        data:result,
        messageRespone:messageRespone("200"),
      })
      return;
    }
  }).clone();
})
module.exports = router;
