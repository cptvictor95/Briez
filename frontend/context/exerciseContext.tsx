import React, { createContext, useContext, useEffect, useState } from 'react';
import { Exercise } from '../interface/Exercise';
import { ExerciseActionsCtx } from './exerciseActionsCtx';

export interface ExerciseContextType {
  state: {
    exercises: Exercise[];
  };
  actions: {
    setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
  };
}

export const ExerciseCtx = createContext({} as ExerciseContextType);

export const ExerciseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const exerciseActions = useContext(ExerciseActionsCtx);

  useEffect(() => {
    exerciseActions.actions.getExercises().then((res) => setExercises(res));
  }, []);

  const state = { exercises };
  const actions = { setExercises };

  return (
    <ExerciseCtx.Provider value={{ state, actions }}>
      {children}
    </ExerciseCtx.Provider>
  );
};
