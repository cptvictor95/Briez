import { Router } from 'express'
import createExercise from '../controller/createExercise'
import getExerciseById from '../controller/getExerciseById'
import getExercises from '../controller/getExercises'

const router = Router()

router.get('/api/exercises', getExercises)
router.get('/api/exercise/:id', getExerciseById)
router.post('/api/exercises', createExercise)

export { router as exerciseRouter }
