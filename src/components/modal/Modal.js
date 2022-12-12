import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './index.css'

const Modal = () => {

    
    
    const closeModal = (e) => {
        const $modal = document.querySelector('.modal')
        $modal.classList.remove('open')
    } 

    return(<div className='modal'>
        <p className='resaltar'>Para el amor de mi vida:</p>
        <p> 
        Aún recuerdo la primera vez que me hablaste por whatsapp diciéndome que te parecía lindo. Curioso que Santiago haya sido uno de los precursores de nuestra historia de amor, un agradecimiento especial para él &#128516;. Llegaste y cambiaste mi mundo por completo, una niña bonita que aceptó ver Shingeki no Kyojin conmigo, qué tal maratón nos metimos esos días eh. Me acuerdo que estaba bieen nervioso cuando te vi por primera vez por zoom, es más, yo siempre me baño, pero ese día me metí la real bañada &#128703;. Poquito a poquito comenzamos a hablar por las noches y a dormir juntitooous wiuuu. Ya para ese momento estaba comenzado a sentir cosas por ti y mi corazón hacía tucún tucún cuando hablábamos, yo ahí bien templadito uwu. Cómo olvidar el día de tu cumpleaños, tú ahí celebrando con tus amigos y haciendo videollamadita conmigo mientras estabas en tu columpio, te pusiste a bailar y terminaste acostadita en el piso, tan linda usted &#128152;. Ay esa noche, recuerdo ver el mensaje que me mandaste diciendo 'Me gustas un poquito', no sabes cuán feliz me sentí en aquel momento, recuerdo haberte dicho que el feeling era mutuo y en la llamadita lo volvimos a confirmar, aunque tú estabas un poquito borrachita y al día siguiente te hiciste la loca. Ahhh y cuando me escuchaste roncar por primera vez jajaajaa diooos, terrible &#128534;. Las veces que 'terminabas conmigo' en modo dramita cuando aún éramos solo amix, tan linda tú. Pensar que sigo siendo tu fresita cubierta de chocolate &#128147;. Menos mal no estoy escribiendo en papel sino ya estaría mojadísimo de tanta lágrima derramada. Cada día estoy más enamorado de ti, mi amor. Te amo. &#128150;
        </p>
        <p className='resaltar'>&#128140; Esta solo es la primera parte, continuará el día de mañana. Mientras tanto te dejo una <a className='cancion' href='https://www.youtube.com/watch?v=pLVMgZ7QQDk' rel="noreferrer" target='_blank'>cancioncita bomnita.</a>&#127926;</p>
        <button className='close' onClick={closeModal}><CloseIcon className='close-icon'></CloseIcon></button>
    </div>)
}

export default Modal