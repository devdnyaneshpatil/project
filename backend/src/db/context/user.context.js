const { User } = require("../../models")

const getUserByEmail = async (email) => {
    const user = await User.findOne({ email })
    return user
}

const updateUserByUserId = async(userId,payload) =>{
    const updatedUser = await User.findByIdAndUpdate(userId, payload, {
        new:true
    })
    return updatedUser
}

const getProviderDetails = async (userId) => {
    const provider = await User.findOne({ _id: userId })
    return provider
}

module.exports={getUserByEmail,updateUserByUserId,getProviderDetails}