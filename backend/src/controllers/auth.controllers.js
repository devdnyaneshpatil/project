const CustomError = require("../utils/customError");
const validator = require("../utils/validator");
const authContext = require("../db/context/auth.context");
const jwt=require("jsonwebtoken");
const sendMail = require("../utils/mailer");
const { JWT_SECRET } = require("../config/constants");
const redis = require("../utils/redis");

const registerController = async (req, res, next) => {
  const { name,email } = req.body;
  try {
    const isValidData = validator(req.body, ["email","name"]);
    if (isValidData !== true) {
      const err = new CustomError(isValidData, 400);
      return next(err);
    }
    const isUserExist = await authContext.getUserByEmail(email);
    if (isUserExist) {
      const err = new CustomError(
        `User Already Exist With Email:-${email}`,
        404
      );
      return next(err);
    }
    const otp = Math.floor(1000 + Math.random() * 9000) + '';
    redis.set(`user_otp_${email}`, JSON.stringify({ name, email, otp }), 'EX', 300);
    sendMail(email,"Registration",otp)
    return res.status(201).json({msg:"Otp sent successfully"})
  } catch (error) {
    next(error); 
  }
};

const loginController = async (req, res, next) => { 
  const {email}=req.body
  try {
    const isValidData = validator(req.body, ["email"]);
    if (isValidData !== true) {
      const err = new CustomError(isValidData, 400);
      return next(err);
    }
    const isUserExist = await authContext.getUserByEmail(email);
    if (!isUserExist) {
      const err = new CustomError(
        `User Doesn't Exist With Email:-${email}`,
        404
      );
      return next(err);
    }
    const otp = Math.floor(1000 + Math.random() * 9000) + '';
    await redis.set(`user_otp_${email}`, JSON.stringify({ email, otp }), 'EX', 300);
    sendMail(email,"Login",otp)
    return res.status(201).json({msg:"Otp sent successfully"})
  } catch (error) {
    next(error);
  }
};

const verifyOtpController = async (req, res, next) => {
  const {email,otp}=req.body
  try {
    const isValidData = validator(req.body, ["email","otp"]);
    if (isValidData !== true) {
      const err = new CustomError(isValidData, 400);
      return next(err);
    }
    const redisKey = `user_otp_${email}`;
    const userOtpData = await redis.get(redisKey);
    if (!userOtpData) {
      const err = new CustomError("OTP expired or invalid", 400);
      return next(err);
    }

    const parsedData = JSON.parse(userOtpData);
    const { name, otp: storedOtp } = parsedData;

    // Check if the provided OTP matches the stored OTP
    if (storedOtp !== otp) {
      const err = new CustomError("Invalid OTP", 400);
      return next(err);
    }
    // OTP is valid, proceed to register the user
    if (name) {
      const user = await authContext.createNewUser({ name, email })
    }
    // Optionally, delete the OTP data from Redis after successful verification
    await redis.del(redisKey);

    const token = jwt.sign({ userEmail: email }, JWT_SECRET)
    
    const tokenKey = `user_token_${email}`;
    await redis.set(tokenKey, token, 'EX', 3600);

    return res.status(201).json({ msg: "User registered successfully" ,token});
  } catch (error) {
    next(error); 
  }
}

module.exports = { registerController, loginController,verifyOtpController };
