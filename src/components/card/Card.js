import React from 'react';
import './index.css'

const Card = () => {
    
    const openModal = (e) => {
        const $modal = document.querySelector(".modal")
        $modal.classList.add("open")
    }

    return(<div id="card">
        <div class="heart" onClick={openModal}></div>
        <div class="heart1"></div>
        <div class="heart2"></div>
        <div class="heart3"></div>
        <div class="heart4"></div>
    </div>)
}

export default Card