const secret = process.env.SECRET || ""

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

export default (req: any, res: Response, next: NextFunction): void => {
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
      res.status(401).json({ message: "Access denied" });
    }
    jwt.verify(token, secret, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403);
      }

      req = user;
      next();
    });
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
}


