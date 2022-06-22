// export const DB_HOST = process.env.DB_HOST || "ec2-52-86-115-245.compute-1.amazonaws.com"
// export const POSTGRES_DB = process.env.POSTGRES_DB || "d17k891jkqv4tb"
// export const DB_PORT = process.env.DB_PORT || "5432"
// export const POSTGRES_USER = process.env.POSTGRES_USER || "rcvldffqzhteot"
// export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD || "a09790e2eb0736ce9c1658bf4f9a059220d51b9cb86ed2d01aa73ed8d2b8e70f"

// export * from './knexfile'
import 'dotenv/config'

export const DB_HOST = process.env.DB_HOST
export const POSTGRES_DB = process.env.POSTGRES_DB
export const DB_PORT = process.env.DB_PORT
export const POSTGRES_USER = process.env.POSTGRES_USER
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD

export * from './knexfile'
