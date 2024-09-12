const userContext=require("../db/context/user.context")
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

module.exports={getUserDetailsController,updateUserController}