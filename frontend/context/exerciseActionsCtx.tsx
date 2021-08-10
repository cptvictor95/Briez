import React, { createContext, useEffect, useState } from 'react';
import { Exercise } from '../interface/Exercise';

interface ExerciseActionsType {
  actions: {
    getExercises: () => Promise<Exercise[]>;
  };
}

export const ExerciseActionsCtx = createContext<ExerciseActionsType>(
  {} as ExerciseActionsType
);

export const ExerciseActionsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const getExercises = async () => {
    const res = await fetch('http://localhost:8080/exercises');
    const exercises: Exercise[] = await res.json();

    return exercises;
  };

  const actions = { getExercises };

  return (
    <ExerciseActionsCtx.Provider value={{ actions }}>
      {children}
    </ExerciseActionsCtx.Provider>
  );
};
