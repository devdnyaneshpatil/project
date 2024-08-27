const { getUserDetailsController, updateUserController } = require("../controllers/user.controllers")
const auth = require("../middlewares/auth.middleware")

const userRouter=require("express").Router()

userRouter.get("/get-user", auth, getUserDetailsController)
userRouter.patch("/update-user/:id",auth,updateUserController)
module.exports=userRouter