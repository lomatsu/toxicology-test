import express, { Request } from "express"
import logger from "morgan"
import cors from "cors"
import authMiddleware from "./common/middlewares/auth"

const app = express()

const corsOptionsDelegate = function (
	req: Request,
	callback: (error: Error | null, options: any) => void
) {
	if (process.env.NODE_ENV !== "production") {
		return callback(null, { origin: true })
	}
	let corsOptions = { origin: false }
	callback(null, corsOptions)
}

app.use(cors(corsOptionsDelegate))
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(authMiddleware)

export default app
