const userContext=require("../db/context/user.context")
const getUserDetailsController = async (req, res, next) => {
    try {
        const user = await userContext.getUserByEmail(req.email)
        return res.status(200).json({data:user})
    } catch (error) {
        next(error)
    }
}

module.exports={getUserDetailsController}