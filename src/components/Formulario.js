import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({agregaCita}) => {

    const [cita, setCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:'',
    })

    const actualizarState = e => {
        setCita({ ...cita, [e.target.name] : e.target.value})
    }

    const [error, setError] = useState(false);

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const validaCita = e => {

        e.preventDefault();

        if(mascota.trim() === "" || propietario.trim() === "" || fecha.trim() === "" || hora.trim() === ""
            || sintomas.trim() === ""){
            setError(true);
            return;
        }

        setError(false);

        cita.id = uuidv4();

        agregaCita(cita);

        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:'',
        })

       
    }

   
    return (
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="alerta-error">Debe ingresar todos los campos</p> : null }

           

            <form
                onSubmit={validaCita}
            >

                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha Alta</label>
                <input
                    type="date" 
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora Alta</label>
                <input
                    type="time" 
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width" 
                    onChange={actualizarState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}

export default Formulario;