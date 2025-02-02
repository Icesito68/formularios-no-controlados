import Pregunta from './Pregunta.jsx'
import {QuestionsContext} from "../providers/QuestionsProvider";
import {useContext } from 'react';

 const PreguntasCreadas = () => {
    const {preguntas} = useContext(QuestionsContext);
     return (
         <div>
             <ul className="list-group">
             {
                 preguntas.map( p => {
                     return (<Pregunta key={p.id} pregunta={p}/>)
                 })
             }
             </ul>
         </div>
     )
 }


export default PreguntasCreadas;