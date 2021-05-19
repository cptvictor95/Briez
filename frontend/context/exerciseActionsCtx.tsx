import axios from 'axios';
import React, { createContext } from 'react';
import { ExerciseDTO } from '../interface/Exercise';

export const ExerciseActionsCtx = createContext(null);

export const ExerciseActionsProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const create = async (exercise: ExerciseDTO) => {
    try {
      const response = await axios.post(`${baseUrl}/exercises`, exercise);

      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const actions = { create };
  return (
    <ExerciseActionsCtx.Provider value={{ actions }}>
      {children}
    </ExerciseActionsCtx.Provider>
  );
};
