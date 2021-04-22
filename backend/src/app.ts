import express, { Express } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { exerciseRouter } from './routes/exercise'

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

const uri = process.env.CLUSTER_URI || ''

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  )
}

try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.info(`Connected to MongoDB`)
} catch (err) {
  console.error(err.message)
}

app.use(exerciseRouter)
export default app
