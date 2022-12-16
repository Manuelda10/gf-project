import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Principal = () => {
    return(<div className='principal'>
        <h1>Hola, mi amor, hoy es el gran día</h1> <br></br>
        <p>Espero que te hayan gustado todas las cartitas que te escribí. Hoy cumplimos un añito y seguro cuando leas esto ya estaré en camino a verte. Te amo mucho. Disfruta la última cartita. ❣️</p><br></br>
      <Link className='btn-1' to='/teamo'>Continuar</Link>
    </div>)
}

export default Principal