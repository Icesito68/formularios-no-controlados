import { useState, createContext } from 'react'
import './App.css'
import FormularioPregunta from './components/FormularioPregunta.jsx'
import PreguntasCreadas from './components/PreguntasCreadas.jsx'

let idActualPregunta = 1;

export const QuestionsContext = createContext("");

function App() {
  const [preguntas, setPreguntas] = useState([]);
  
  const addQuestion = (nueva) => {
    nueva.id = idActualPregunta;
    idActualPregunta++;
    setPreguntas([...preguntas, nueva]);
  }
  
  const borrarPregunta = (id) => {
    console.log("Borrando pregunta con id: ", id);
    setPreguntas(preguntas.filter(pregunta => pregunta.id !== id)
  )}

  return (
    <>
      <QuestionsContext.Provider value={{preguntas, addQuestion, borrarPregunta}}>
        <FormularioPregunta />
        <PreguntasCreadas />
      </QuestionsContext.Provider>
    </>
  )
}

export default App
