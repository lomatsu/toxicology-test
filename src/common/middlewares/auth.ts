import { Request, Response, NextFunction } from "express";
const secret: string = process.env.SECRET as string;

export default (req: Request | any, res: Response, next: NextFunction) => {
  const unauthorized = () => {
    res.status(401).json({
      message: "Unauthorized user",
    })
  }
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer")) {
      return unauthorized()
    }
    const token = authorization.split(" ")[1];

    if (!token) {
      return unauthorized()
    }

    if (token === secret) {
      next()
    } else {
      return res.sendStatus(403);
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
} 
