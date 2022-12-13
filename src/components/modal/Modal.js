import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './index.css'

const Modal = () => {

    
    
    const closeModal = (e) => {
        const $modal = document.querySelector('.modal')
        $modal.classList.remove('open')
    } 

    return(<div className='modal'>
        <p className='resaltar'>Para el amor de mi vida, parte 2: &#10024;</p>
        <p> 
        Las malas costumbres siempre han abundado en nuestra vida, durmiendo 3 o 4am y despertando las 10 u 11 wiii, un placer cada minuto a tu lado, amore mio&#128105;&#8205;&#10084;&#65039;&#8205;&#128104;. Pensar que así me fui enamorando cada día más de ti, con cada llamadita y mensajito tuyo &#128151;. He de confesar que antes de conocerte, me parecía una absoluta tontería lo de enamorarme de alguien virtualmente, gracias por demostrarme lo contrario, muuchas muchas gracias &#128149;. Si no me equivocoo, tú me dijiste, cuando aún éramos amix, que eras bien controladora, mmmm cada vez toman más sentido las cosas jajaja, nah mentira, yo bien happy de seguir siendo tu esclavito, ESCLAVITO NUMBER ONE, OJO, IMPORTANTE, NUMBER ONE, mi patroncitaaaa hermosa &#128525;. Recuerdo que en ese entonces eras miss dramita, DPD dramita por doquier, hasta que salió a luz mi yo oculto, mi yo dramáticooooo chan chan chan &#128520;. (Por ciertooo, totalmente fuera de tema pero me acordé mientras escribía esto, ¿por qué hasta ahora no he tenido la oportunidad de alguno de tus postrecitos eh?, exijoo, me lo merezco &#128544;). Ahora que me acuerdo también hicimoos karaokeee wiii, deberíamos hacer karaoke un día que estemos juntitos y solos, porque me da paltita si hay gente &#128073;&#128072;. Ademáaas, estoy seguro que solo fue una vez, pero tú me dijiste que cantabas bonito y hasta ahora no me has cantado nadita :c(También exijooo). Me acuerdo las veces que tomamos juntitous y tú ahí con un vasito ya tabas borrachita, aunque eso fue solo una vez porque las otras me dejaste tomar solito -.-. Ahhh y el día de tu Primera Comunióon, me hubiera gustado ir y verte toda preciosa con tu vestido AAAAA &#129402;&#128152;, envidio a tus amix que sí te vieron. Aunque en realidad NO me invitaste, recuerdo que dijiste que tu papá te había preguntado por qué no me invitabas y tú le dijiste que yo no podía ir, pero en realidad NO ME INVITASTE, sabes qué, ya me resentí, bai &#128530;. Mentira, igual voy a tener que hacer el bautismo y primera comunión para casarme contigo, así que yo sí te invitaré a la mía jeje &#128150;. Teee amooo muchooo, mi amor, beshito. &#128536;

        </p>
        <p className='resaltar'>&#128140; Espero te haya gustado esta segunda parte, continuará el día de mañana wiiww. Mientras tanto, te dejo otra <a className='cancion' href='https://www.youtube.com/watch?v=rSskvxt6YBo' rel="noreferrer" target='_blank'>cancioncita bomnita.</a>&#127926;</p>
        <button className='close' onClick={closeModal}><CloseIcon className='close-icon'></CloseIcon></button>
    </div>)
}

export default Modal