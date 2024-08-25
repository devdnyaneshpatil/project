const { getUserDetailsController } = require("../controllers/user.controllers")
const auth = require("../middlewares/auth.middleware")

const userRouter=require("express").Router()

userRouter.get("/get-user",auth,getUserDetailsController)
module.exports=userRouter