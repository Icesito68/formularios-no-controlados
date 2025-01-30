import {createContext, useReducer } from 'react'
import './App.css'
import FormularioPregunta from './components/FormularioPregunta.jsx'
import PreguntasCreadas from './components/PreguntasCreadas.jsx'

let idActualPregunta = 1;

export const QuestionsContext = createContext("");

const reducer = (state, action) => {
switch (action.type) {
  case 'ADD_QUESTION':
    return { 
      questions: [...state.questions, {...action.payload, id: idActualPregunta++}] 
    };
  case 'REMOVE_QUESTION':
      //Devolvemos el nuevo valor del estado eliminadole la  tarea
    return { 
      ...state,
      questions: state.questions.filter(pregunta => pregunta.id !== action.payload) 
    };
  default:
      //Caso de que la action no esté definida
    return state;
}
};


function App() {
  // const [preguntas, setPreguntas] = useState([]);
  const [state, dispatch] = useReducer(reducer, { questions: [] });

  
  const addQuestion = (nueva) => {
    // nueva.id = idActualPregunta++;
    dispatch({ type: 'ADD_QUESTION', payload: nueva });
  };
  
  const borrarPregunta = (id) => {
    console.log("Borrando pregunta con id: ", id);
    // setPreguntas(preguntas.filter(pregunta => pregunta.id !== id)
    dispatch({ type: 'REMOVE_QUESTION', payload: id });
  }

  return (
    <>
    <QuestionsContext.Provider value={{ preguntas: state.questions, addQuestion, borrarPregunta }}>
    <FormularioPregunta/>
    <PreguntasCreadas/>
    </QuestionsContext.Provider>
    </>
  )
}

export default App
