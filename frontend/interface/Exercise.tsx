export interface Exercise {
  id: string;
  name: string;
  description: string;
  muscleGroups: [];
  categories: [];
}

export interface ExerciseDTO {
  name: string;
  description: string;
  muscleGroups: [];
  categories: [];
}
