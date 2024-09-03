const router = require("express").Router()

router.use("/auth", require("./auth.routes"))
router.use("/user", require("./user.routes"))
router.use("/service",require("./service.routes"))

module.exports=router