const authorize = (permittedRole) => {
    return (req, res, next) => {
        if(permittedRole.includes(req.user.role)){
            next()
        }else{
            res.status(200).json({msg:"not authorized"})
        }
    }
}

module.exports=authorize