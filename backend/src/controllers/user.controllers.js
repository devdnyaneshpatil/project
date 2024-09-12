const userContext = require("../db/context/user.context")
const CustomError = require("../utils/customError")

//this is the route to show user hid profile 
const getUserDetailsController = async (req, res, next) => {
    try {
        const user = await userContext.getUserByEmail(req.user.email)
        return res.status(200).json({data:user})
    } catch (error) {
        next(error)
    }
}

const updateUserController = async (req, res, next) => {
    try {
        const updatedUser = await userContext.updateUserByUserId(req.user._id, req.body)
        return res.status(200).json({msg:"User updated successfully",data:updatedUser})
    } catch (error) {
        next(error)
    }
}

//this is the specific route to get providers details to show it on the all-services page
const getProviderDetailsController = async (req, res, next) => {
    const providerId=req.params.id
    try {
        const data = await userContext.getProviderDetails(providerId)
        return res.status(200).json({data})
    } catch (error) {
        const err = new CustomError(`Internal Server Error:-${error.message}`, 500)
        return next(err)
    }
}

module.exports={getUserDetailsController,updateUserController,getProviderDetailsController}