import dotenv from 'dotenv'
dotenv.config()

import express, { Request } from "express"
import logger from "morgan"
import cors from "cors"
import authMiddleware from "./common/middlewares/auth"

const app = express()

app.use(
	cors({
		origin: ["https://toxicology-test.herokuapp.com"],
		methods: ["GET", "POST", "DELETE"],
		credentials: true,
	})
);

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(authMiddleware)

export default app
