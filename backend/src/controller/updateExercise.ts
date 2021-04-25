import { Request, Response } from 'express';
import { Exercise } from '../model/exercise';

const updateExercise = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const id = req.params.id as string;
    const { title, description, musclesUsed, category } = req.body;

    console.log(id);

    const exercise = await Exercise.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
        musclesUsed: musclesUsed,
        category: category,
      }
    );

    return res.status(200).send({ status: 'Success!', exercise: exercise });
  } catch (error) {
    return res.status(400).send({ status: 'Failed!', message: error.message });
  }
};

export default updateExercise;
