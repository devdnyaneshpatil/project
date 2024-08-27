const { User } = require("../../models")

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email })
    return user
}

const updateUserByUserId = async(userId,payload) =>{
    const updatedUser=await User.findByIdAndUpdate(userId,payload)
}

module.exports={getUserByEmail,updateUserByUserId}