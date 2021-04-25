import { Router } from 'express';
import createExercise from '../controller/createExercise';
import getExerciseById from '../controller/getExerciseById';
import getExercises from '../controller/getExercises';
import updateExercise from '../controller/updateExercise';

const router = Router();

router.get('/api/exercises', getExercises);
router.get('/api/exercise/:id', getExerciseById);
router.post('/api/exercises', createExercise);
router.put('/api/exercise/:id', updateExercise);

export { router as exerciseRouter };
