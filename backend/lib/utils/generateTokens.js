import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"14d",
    });

    res.cookie("jwt",token,{
        maxAge:14*24*60*60*1000, //milliseconds
        httpOnly:true, //cookie cannot be accessed by client side javascript,prevents XSS attacks
        sameSite:"strict", //cookie is sent only to the same site as the one that originated the request,prevents CSRF attacks
        secure:process.env.NODE_ENV !== "development", //cookie is sent only over HTTPS in production
    })
}