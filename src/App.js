
import React , {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import TblCitas from './components/TblCitas';

function App() {

    // Consultamos las citas guardadas en localStorage
    let lsCitas = JSON.parse(localStorage.getItem('citas'));

    // Si no hay citas, iniciamos un arreglo vacio
    if(!lsCitas){
        lsCitas = [];
    }

    //pasamos el arreglo de citas de LS al State
    const [citas, setCitas] = useState(lsCitas);

    // usamos useEffect para detectar cualquier cambio en las citas y poder actualizar estos cambios en el LocalStorage
    useEffect( () => {
        if(lsCitas){
            localStorage.setItem('citas', JSON.stringify(citas)) 
        }
        else{
            localStorage.setItem('citas', JSON.stringify([]));
        }
    }, [citas])


    // Función para agregar una nueva cita
    const agregaCita = cita => {
        setCitas([...citas, cita])
     }

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formulario 
                            agregaCita = {agregaCita}
                        />
                    </div>

                    <div className="one-half column">
                        <TblCitas 
                            citas = {citas}
                            setCitas = {setCitas}
                        />
                    </div>

                </div>
            </div>
        </Fragment>
       
        
    );
}

export default App;
