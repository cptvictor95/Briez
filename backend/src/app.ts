import express, { Express } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { exerciseRouter } from './routes/exercise'

const app: Express = express()

app.use(express.json())
app.use(cors())

// const uri = process.env.MONGODB_URI || ''

const uri =
  `mongodb+srv://cptvictor:ysyHE9iPR6JB0JAp@cluster0.isn7u.mongodb.net/brav?retryWrites=true&w=majority` ||
  ''
const dbName = process.env.MONGODB_DB

if (!uri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env'
  )
}

try {
  mongoose.connect('mongodb://localhost:27017/brav', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.info(`Connected to MongoDB`)
} catch (err) {
  console.error(err.message)
}

app.use(exerciseRouter)
export default app
