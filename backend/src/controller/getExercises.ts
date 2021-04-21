import { Request, Response } from 'express'
import { Exercise } from '../model/exercise'

const getExercises = async (req: Request, res: Response): Promise<Response> => {
  try {
    const exercises = await Exercise.find({})

    return res
      .status(200)
      .send({ message: 'Success! Full exercise list.', exercises: exercises })
  } catch (err) {
    throw new Error(err.message)
  }
}

export default getExercises
