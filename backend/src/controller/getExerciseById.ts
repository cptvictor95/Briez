import { Request, Response } from 'express'
import { Exercise } from '../model/exercise'

const getExerciseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const exercise = await Exercise.findById(id)

    return res.status(200).send({
      message: `Success! Exercise searched by Id.`,
      exercise: exercise,
    })
  } catch (err) {
    throw new Error(err.message)
  }
}

export default getExerciseById
