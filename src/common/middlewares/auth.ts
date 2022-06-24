import dotenv from 'dotenv'
dotenv.config({ path: "../../../.env" })

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
const secret: string = process.env.SECRET as string;

export default (req: Request, res: Response, next: NextFunction) => {
  const unauthorized = () => {
    res.status(401).json({
      message: "Unauthorized user",
    })
  }
  try {
    const authorization = req.headers.authorization || "";

    if (!authorization || !authorization.startsWith("Bearer")) {
      return unauthorized()
    }
    const token = authorization.split(" ")[1];

    if (!token) {
      return unauthorized()
    }
    console.log("token", token)
    console.log("secret", secret)

    jwt.verify(token, secret, (err: any) => {
      if (err) {
        return res.sendStatus(403);
      }

      next();
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
} 
