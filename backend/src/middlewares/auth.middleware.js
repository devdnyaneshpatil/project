const CustomError = require("../utils/customError");
const redis = require("../utils/redis");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/constants");
const authContext=require("../db/context/auth.context")
const auth = async (req, res, next) => {
  try {
    const tokenKey = `user_token`;
    const token = await redis.get(tokenKey);
    if (!token) {
      const err = new CustomError("Please Login Again", 400);
      return next(err);
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) {
      const err = new CustomError("Invalid token", 400);
      return next(err);
    }
    const user= await authContext.getUserByEmail(decoded.userEmail)
    req.user=user
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
