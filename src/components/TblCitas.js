import React, {Fragment} from 'react';

const TblCitas = ({citas, setCitas}) => {

    const eliminarCita = id_cita => {
        const citasVigentes = citas.filter( cita => cita.id != id_cita);
        setCitas(citasVigentes);
    }

    const titulo = (citas.length > 0) ? 'Lista de Citas' : 'No hay citas agendadas';

    return ( 
        <Fragment>


            <h2>{titulo}</h2>

            

            {citas.map( cita => (
                <div className="cita">
                    <p>Mascota : <span>{cita.mascota}</span></p>
                    <p>propietario : <span>{cita.propietario}</span></p>
                    <p>fecha : <span>{cita.fecha}</span></p>
                    <p>hora : <span>{cita.hora}</span></p>
                    <p>sintomas : <span>{cita.sintomas}</span></p>
                    <button
                        className="button eliminar u-full-width"
                        onClick={ () => eliminarCita(cita.id)}
                    >Eliminar &times;</button>
                    
                </div>
            ))}
        </Fragment>
     );
}
 
export default TblCitas;