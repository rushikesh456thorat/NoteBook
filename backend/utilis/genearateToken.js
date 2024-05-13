import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) =>{
    const notebook_jwt = jwt.sign({userId}, process.env.JWT_SECRET,
        {expiresIn: '15d'});

    res.cookie('notebook_jwt', notebook_jwt, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== 'production',
    });
}

export  default generateTokenAndSetCookie;