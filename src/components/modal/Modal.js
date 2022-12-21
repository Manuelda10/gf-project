import React from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import './index.css'

const Modal = ({closeModal, number, destinatario, mensaje, url}) => {

    const redirectLast = () => {
        closeModal()
    }

    return(
        <div className='modal-container'>
            <p className='resaltar'>{destinatario} &#10024;</p>
            <p> 
            {mensaje}
            </p>
            <p className='resaltar'>&#128140;<a className='cancion' href={url} rel="noreferrer" target='_blank'> {number === 6 ? "Cancioncita para ti" : `Click aquí para escuchar una cancioncita bonita x${number}`}.</a>
&#10083;&#65039;</p>
            <button className='close' onClick={redirectLast}><CloseIcon className='close-icon'></CloseIcon></button>

        </div>)
}

export default Modal