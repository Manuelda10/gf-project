import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './index.css'

const Modal = () => {

    
    
    const closeModal = (e) => {
        const $modal = document.querySelector('.modal')
        $modal.classList.remove('open')
    } 

    return(<div className='modal'>
        <p className='resaltar'>Para el amor de mi vida, parte 5: &#10024;</p>
        <p> 
        Esta cartita te llegará el día del cumple de Ale, para cuando lo leas, supongo que ya la habrán pasado súper bonito wii&#127775;. Hemos pasado por muchas cosas en todo este tiempo que hemos estado juntitos, hemos discutido, peleado y la he malogrado muchas veces &#9785;&#65039;, pero a pesar de todo creo que hemos podido solucionar las cosas como una buena parejita&#128145;. Hemos tenido algunos momentos difíciles y aunque parezca que el mundo se viene abajo, estoy seguro que tú y yo podremos superar los obstáculos que se nos presenten, sé que muchas yo soy mi propio obstáculo, pero siempre trabajo por mejorar eso &#128035;. Estoy muy feliz de poder ser tu amorcito, tu bb, tu chikito beio, bellaco &#128526; jajaja. Sé que ha sido muy difícil para ti estar aquí en Lima, alejadita de tu ksita y todo, por eso siempre he tratado de pasar el mayor tiempo posible contigo, además que obvio me encanta poder verte, darte besitos&#128536; y abracitos&#129303;, aunque te incomode jeje. Me acuerdo las primeras veces que te recogía e íbamos a Marquez, lo sentía súper lejos de mi ksita. Ah pero mírame ahora, como si nada yendo a Ventanilla y saliendo a media noche, yendo a tonear y volviendo en la mañana&#129395;, pasando la nochecita juntos&#129402;, me encantaaa &#10084;&#65039;. Cómo te dije alguna vez, por ti beibi yo sería Batman&#129415;. Estoy encantado de poder ser tu futuro esposo y compañerito de aventuras, te pido por favor que no te vayas de mi ladito y me acompañes en este camino lleno de incertidumbre llamado vida&#128145;.
        </p>
        <p className='resaltar'>&#128140; Esta fue la quinta cartita y mañana vamos por la sexta y última gg. Te dejo una nueva<a className='cancion' href='https://www.youtube.com/watch?v=krR41oGDmVk' rel="noreferrer" target='_blank'> cancioncita bonita.</a>&#128157;</p>
        <button className='close' onClick={closeModal}><CloseIcon className='close-icon'></CloseIcon></button>
    </div>)
}

export default Modal