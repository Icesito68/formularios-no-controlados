import { createContext, useReducer } from 'react';
import { questionReducer, initialState } from './QuestionsReducer';

export const QuestionsContext = createContext();

export const QuestionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(questionReducer, initialState);

  const addQuestion = (nueva) => {
    dispatch({ type: 'ADD_QUESTION', payload: nueva });
  };

  const borrarPregunta = (id) => {
    console.log("Borrando pregunta con id:", id);
    dispatch({ type: 'REMOVE_QUESTION', payload: id });
  };

  return (
    <QuestionsContext.Provider value={{ preguntas: state.questions, addQuestion, borrarPregunta }}>
      {children}
    </QuestionsContext.Provider>
  );
};
