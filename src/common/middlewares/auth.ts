import dotenv from 'dotenv'
dotenv.config({ path: "../../../.env" })

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
const secret: string = process.env.SECRET as string;

export default (req: Request | any, res: Response, next: NextFunction) => {
  const unauthorized = () => {
    res.status(401).json({
      message: "Unauthorized user",
    })
  }
  try {
    const authorization = req.headers.authorization;
    console.log("authorization", typeof  authorization, authorization)    

    if (!authorization || !authorization.startsWith("Bearer")) {
      return unauthorized()
    }
    const token = authorization.split(" ")[1];

    if (!token) {
      return unauthorized()
    }

    jwt.verify(token, secret, (err: any, user: any) => {
      if (err) {
        console.log(err)
        return res.sendStatus(403);
      }
      req.user = user
      next();
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
} 
