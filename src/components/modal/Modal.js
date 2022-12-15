import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './index.css'

const Modal = () => {

    
    
    const closeModal = (e) => {
        const $modal = document.querySelector('.modal')
        $modal.classList.remove('open')
    } 

    return(<div className='modal'>
        <p className='resaltar'>Para el amor de mi vida, parte 4: &#10024;</p>
        <p> 
        Ha pasado ya casi un año desde la primera vez que fui a tu ksita&#127969;. Con un poco de miedito al inicio, le pasé la ubicación a mi hermano por si las dudas&#129437;. No me esperaba que tu familia me recibiera tan bien, bueno en realidad no había tenido experiencias parecidas así antes, por lo tanto, no sabía qué era lo que me esperaba, pero creo que les caí bien, no? Wiu súper happy por eso, ahora le tengo mucho cariño a tu fam, los tkm&#128155;. Me llevaste a caminar por todo Chincha y yo bien happy de pasar tiempo contigo, mi amor, aunque terminé morido, ah y perdimos mi gorrita&#128577;. Me acuerdo que tu mami estaba un poco mal, así que tuve que irme a mimir al hotel/hostal, igual yo bien happy happy porque me sentía muy cerquita de ti&#128150;. Luego fui para San Valentín wiuuu, ese día me hice tarde y había pedido las flores por wsp para las 5pm (según yo a esa hora llegaría jeje&#129312;), pero llegué casi las 9pm y felizmente me atendieron wii&#128037;, sino me moría&#128128;. Tú me habías dicho que te gustaban mucho los girasoles así que girasoles tenían que ser, sí señor&#127803;. Luego fui a comprar doritos y un six de cervezas para la people wiuu. La vdd no esperaba que tus amix me cayeran tan bien, con que no me cayeran mal para mí ya era suficiente jajaja, de hecho, la primera vez creo que no hablamos mucho, ya para la 2da y tercera agarramos más confianza, sobre todo con Dylan, lo considero un buen pana y compañero de bebida jeje&#127866;. Por otro lado, Ale siempre me cayó bien, desde el día uno que supe de su existencia wii&#128057;. Por cierto, toda una diosa el día de tu cumple, Dios mío, creo que era la primera vez que te veía con vestido y ufffffffff, mi amorrrr, hace hambre&#128293;. Esa madrugada me dijiste que me amabas y otras cositas más, ay mi corazoncito&#129402;&#128147;. Luego te quedaste mimidita en tu sillón, mientras nos agarrábamos de las manitos, tan linda tú&#129392;. Recordar estas cositas me dan tanta nostalgia, pensar que pasamos todo un añito sin poder vernos&#128532;, pero al final todo valió la pena wiii&#128149;. Te amo muchito muchito, esposita mía&#128158;.
        </p>
        <p className='resaltar'>&#128140; Esta fue la cuarta cartita y mañana vamos por la quinta wii. Como ya es costumbre, te dejo otra<a className='cancion' href='https://www.youtube.com/watch?v=ohfoV4i2YfM' rel="noreferrer" target='_blank'> cancioncita bonita.</a>&#128157;</p>
        <button className='close' onClick={closeModal}><CloseIcon className='close-icon'></CloseIcon></button>
    </div>)
}

export default Modal