export interface Exercise {
  _id: string;
  title: string;
  description: string;
  musclesUsed: string[];
  category: string;
}

export interface ExerciseDTO {
  title: string;
  description: string;
  musclesUsed: string[];
  category: string;
}
