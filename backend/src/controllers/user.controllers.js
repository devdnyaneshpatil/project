const userContext=require("../db/context/user.context")
const getUserDetailsController = async (req, res, next) => {
    try {
        const user = await userContext.getUserByEmail(req.email)
        return res.status(200).json({data:user})
    } catch (error) {
        next(error)
    }
}

const updateUserController = async (req, res, next) => {
    const userId=req.params.id
    try {
        const updateUser = await userContext.updateUserByUserId(userId, req.body)
        return res.status(200).json({msg:"User updated successfully"})
    } catch (error) {
        next(error)
    }
}

module.exports={getUserDetailsController,updateUserController}