import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './index.css'

const Modal = () => {

    
    
    const closeModal = (e) => {
        const $modal = document.querySelector('.modal')
        $modal.classList.remove('open')
    } 

    return(<div className='modal'>
        <p className='resaltar'>Para el amor de mi vida, parte 3: &#10024;</p>
        <p> 
        Cómo olvidar la primera vez que salimos juntitos, estuve varios días ansioso sin saber a dónde podríamos ir, por mi mente pasaron varias opciones, pero no me decidía, hasta que pensé: 'Cómo buen chalaco tengo que invitarla a un lugar del Callao, sí señor &#128298;' y bueno, surgió la idea de ir a Monumental Callao, buena decisión ¿sí o no?&#128299;. Verte con tu pantaloncito negro, tu blusa roja y tus botas negras uffff, una diosa &#128591;&#128150;(No sé si eran exactamente botas, las recuerdo claramente, pero no sé si es el término correcto&#129300;). Sentir que ya te conocía tanto, pero nunca haberla pasado contigo, era una combinación de emociones espectacular&#10024;. Ahora que me acuerdooo, días antes te había dicho que te daría besitos cuando nos viéramos en persona, lo cual estuve pensando todo el tiempo, pero dije: 'Mmm y si piensa que soy un MA LE DU CA DO y luego ya no quiere nada conmigo, nonono, no me arriesgo&#129312;', de hecho, hasta el último momento pensé en darteee un besote&#128139;, pero el respeto y la caballerosidad primero jajaja&#129302;. Uy ese día, comiendo arroz con mariscos y tomando alcohol luego de haberme vacunado, claro que sí, la pasé taaan bien junto a ti wiii&#128126;, aunque por alguna razón tenía miedito de que luego de esa vez ya no quisieras estar conmigo *grititos, gracias por quererme muchito &#129402;. Para la segunda vez ya estaba decidido a ir a por vos, estaba en modo conquista, dije hoy sí o sí Mariannita pasa a ser mi amorcito, sí señor&#128036;. Ah pero ahí me ves llegando tarde a recogerte, entrando a ver spiderman tarde y encima invitándote alcohol, me caigo mal la verdad&#128545;. He de confesar que luego de eso pensé seriamente en pasar mi pedida de patita para otro día, pero sería muy difícil vernos otro día, así que me lancé nomás, di un salto de fe, no le temí a la muerte, me lancé a la boca del lobo, me dije a mí mismo: 'el que tenga miedo a morir que no nazca' &#128520;. Y me dijiste que siuuuuuuuuuuuuuuuuuuuuuuuuuuuuu &#129395;, en ese momento fui el hombre más jueliz del mundo mundial, me fui emocionado a mi ksita y estaba como loquito sonriendo en la calle, aunque con la mascarilla no se me veía, pero igual &#129392;. Mil gracias por darme un lugar en tu corazoncito&#128147;.
        </p>
        <p className='resaltar'>&#128140; Esta fue la tercer parte, mañana sale otra wiuuuu. Mientras tanto, aquí va otra <a className='cancion' href='https://www.youtube.com/watch?v=mloIJgaia44' rel="noreferrer" target='_blank'>cancioncita bomnita.</a>&#128157;</p>
        <button className='close' onClick={closeModal}><CloseIcon className='close-icon'></CloseIcon></button>
    </div>)
}

export default Modal