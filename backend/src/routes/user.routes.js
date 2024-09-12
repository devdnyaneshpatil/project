const { getUserDetailsController, updateUserController, getProviderDetailsController } = require("../controllers/user.controllers")
const auth = require("../middlewares/auth.middleware")

const userRouter=require("express").Router()

userRouter.get("/get-user", auth, getUserDetailsController)
userRouter.patch("/update-user", auth, updateUserController)
userRouter.get("/get-user/:id",getProviderDetailsController)
module.exports=userRouter