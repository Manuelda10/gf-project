import React, {useState} from 'react';
import Modal from '../modal/Modal';
import ModalPortal from '../modalPortal/ModalPortal';
import './index.css'

const Card = ({number, destinatario, mensaje, url}) => {
    const [showModal, setShowModal] = useState(false)
    
    const handleOpenModal = () => {
        setShowModal(true)
    } 
    const handleCloseModal = () => {
        setShowModal(false)
    }

    return(<div id="card">
        <div class="heart" onClick={handleOpenModal}>
            <h3 className='number'>{number}</h3>
        </div>
        <div class="heart1"></div>
        <div class="heart2"></div>
        <div class="heart3"></div>
        <div class="heart4"></div>
        {showModal && <ModalPortal><Modal 
            closeModal = {handleCloseModal}
            number = {number}
            destinatario={destinatario}
            mensaje={mensaje}
            url={url}
            >
            </Modal></ModalPortal>}
    </div>)
}

export default Card