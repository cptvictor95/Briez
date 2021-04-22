import { Request, Response } from 'express'
import { Exercise } from '../model/exercise'

const createExercise = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { title, description, musclesUsed, category } = req.body

    const exercise = Exercise.build({
      title: title,
      description: description,
      musclesUsed: musclesUsed,
      category: category,
    })

    await exercise.save()

    return res
      .status(201)
      .send({ message: 'Exercise created!', exercise: exercise })
  } catch (err) {
    throw new Error(err.message)
  }
}

export default createExercise
