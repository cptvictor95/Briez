import { createContext } from 'react';

export const ExerciseCtx = createContext(null);

export const ExerciseProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const state = { exercise: 'ok' };
  return (
    <ExerciseCtx.Provider value={{ state }}>{children}</ExerciseCtx.Provider>
  );
};
