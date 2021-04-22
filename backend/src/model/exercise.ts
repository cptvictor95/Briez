import mongoose from 'mongoose'

export interface IExercise {
  title: string
  description: string
  musclesUsed: string[]
  category: string
}

interface exerciseModelInterface extends mongoose.Model<ExerciseDoc> {
  build(attr: IExercise): ExerciseDoc
}

interface ExerciseDoc extends mongoose.Document {
  title: string
  description: string
  musclesUsed: string[]
  category: string
}

const exerciseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  musclesUsed: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
})

exerciseSchema.statics.build = (attr: IExercise) => {
  return new Exercise(attr)
}

// // Model needs to be of type ModelInterface and return type Doc
const Exercise = mongoose.model<ExerciseDoc, exerciseModelInterface>(
  'Exercise',
  exerciseSchema
)

Exercise.build({
  title: 'Push Up',
  description: 'The best basic exercise for chest and triceps.',
  musclesUsed: ['Chest', 'Triceps', 'Shoulders'],
  category: 'Push',
})

export { Exercise }
