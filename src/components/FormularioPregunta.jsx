import { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import {QuestionsContext} from "../App";

export default function FormularioPregunta() {

    const {addQuestion} = useContext(QuestionsContext);
    
    const [pregunta, setPregunta] = useState({
        enunciado: "Enunciado",
        respuesta1: "Respuesta 1",
        respuesta2: "Respuesta 2",
        respuesta3: "Respuesta 3",
        respuesta4: "Respuesta 4",
        respuestacorrecta: -1,
        favorita: false
    });

    const handleChange = (e) => {
        let nuevoValor = (e.target.type === "checkbox") ? e.target.checked : e.target.value;
    
        if (e.target.type === "radio") nuevoValor = parseInt(e.target.id[e.target.id.length - 1]);
    
        setPregunta({
            ...pregunta,
            [e.target.name]: nuevoValor
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addQuestion({
            ...pregunta
        })

        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            showConfirmButton: false,
            timer: 1200
          });
        console.log(pregunta);
    }

    return(
        <form onSubmit={handleSubmit}>
            <textarea 
            className="form-control mb-2"
            placeholder="Enunciado pregunta"
            name="enunciado"
            value={pregunta.enunciado}
            onChange={handleChange}>
            </textarea>
    
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck1"
                onChange={handleChange} />
    
                <input type="text" placeholder="Respuesta 1" className="form-control mb-2" name="respuesta1" htmlFor="inputCheck1" value={pregunta.respuesta1} onChange={handleChange}/>
            </div>
    
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck2"
                onChange={handleChange} />
    
                <input type="text" placeholder="Respuesta 2" className="form-control mb-2" name="respuesta2" htmlFor="inputCheck2" value={pregunta.respuesta2} onChange={handleChange}/>
            </div>
    
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck3"
                onChange={handleChange} />
    
                <input type="text" placeholder="Respuesta 3" className="form-control mb-2" name="respuesta3" htmlFor="inputCheck3" value={pregunta.respuesta3} onChange={handleChange}/>
            </div>
    
            <div className="form-check mb-2">
                <input type="radio" name="respuestacorrecta" className="form-check-input" id="inputCheck4"
                onChange={handleChange} />
    
                <input type="text" placeholder="Respuesta 4" className="form-control mb-2" name="respuesta4" htmlFor="inputCheck4" value={pregunta.respuesta4} onChange={handleChange}/>
            </div>
        
            <div className="form-check form-switch form-check-reverse mb-2">
                <input type="checkbox" name="favorita" className="form-check-input" id="InputCheckFavourite" checked={pregunta.favorita}
                // onChange={e} => (setRegistroForm({...setRegistroForm, priority: e.target.checked}))
                onChange={handleChange}/>
                <label className="form-check-label" htmlFor="InputCheckFavourite">Favorita</label>
            </div>

            <button type="submit" className="btn btn-primary btn-bloc">
                Agregar
            </button>
    
        </form>
    )    
}