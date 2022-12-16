import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Principal = () => {
    return(<div className='principal'>
        <h1>Buenas noches, mi amor</h1> <br></br>
      <p>
        Esta es una idea que tuve más o menos desde octubre, no sabía cómo concretarla y se me fueron ocurriendo algunas variaciones, pero bueno aquí tamos. Estoy comenzando esto exactamente un viernes 18 de noviembre, un día después de tu presentación en CEMDUC, mi ninfa favorita.&#10083;&#65039; 
      </p>
      <p>
        Te explico un poco cómo va esto, amore mio. Cada día esta página web se actualizará y te mostrará una pequeña carta para vos &#128140;. Habrá una cartita por día, empezará el domingo 11 de diciembre y terminará el viernes 16 uwu.
      </p>
      <p>*****Ya está lista tu quinta y penúltima cartita, amore mio &#10084;&#65039;.</p><br></br>
      <Link className='btn-1' to='/teamo'>Continuar</Link>
    </div>)
}

export default Principal