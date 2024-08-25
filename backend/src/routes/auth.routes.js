const { registerController, verifyOtpController, loginController } = require("../controllers/auth.controllers")

const authRouter = require("express").Router()

authRouter.post("/sign-up", registerController)
authRouter.post("/verify-otp", verifyOtpController)
authRouter.post("/login",loginController)

module.exports=authRouter