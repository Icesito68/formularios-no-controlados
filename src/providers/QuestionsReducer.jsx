export const initialState = { questions: [] };

let idActualPregunta = 1;

export const questionReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return { 
        questions: [...state.questions, { ...action.payload, id: idActualPregunta++ }] 
      };
    case 'REMOVE_QUESTION':
      return { 
        ...state,
        questions: state.questions.filter(pregunta => pregunta.id !== action.payload) 
      };
    default:
      return state;
  }
};
