import React from 'react';
import Card from '../../components/card/Card';
import './index.css'

const Precarta = () => {
    const lastDestinatario = "Para el amor de mi vida:"
    const lastMessage = "Llegó el gran día, hoy cumplimos un añito, mi amor. Es un placer para mí ser tu enamoradito, haber compartido tantos momentos juntos, haber sentido tantas emociones. Sé que ambos estamos en costante crecimiento, mejorando como personas y como pareja, y aunque cometamos tantos errores yo siempre voy a estar para apoyarte cada vez que te sientas frustrada, triste, decaída o cuando sientas que ya no puedes más con esta vida tan efímera. Sé que te he fallado muchas veces, pero ninguna ha sido intencional, solo que mi cerebro taaan crack no piensa las cosas bien cuando debe hacerlo. Aún así estoy trabajando mucho en poder ser cada vez mejor y ser tu ser amado por defecto. A veces me cuesta un poco poder notar mis errores, por eso te pido que me los digas y me tengas un poquiiiiito de paciencia, un poquito más. Gracias por permitirme ser parte de tu vida. Gracias por hablarme aquella primera vez y aceptar ver Shingeki conmigo. Gracias porque aunque te pido un poco más de paciencia, tú ya me has dado mucho y no tengo derecho a exigirte más. Grcias porque durante todo este tiempo en el que te he fallado tanto, me has permitido enmendar mis errores y poder ser un mejor compañerito de vida. Gracias porque a pesar de que has estado a punto de terminarme, al final te has quedado conmigo y me has dado otra oportunidad. Gracias por mostrarme lo bonita que puede ser la vida cuando tengo a alguien que amo a mi lado. Gracias por mostrarme que a pesar de la distancia y de todos los problemas que puedo estar pasando, estás ahí para mí. Gracias por escucharme, aconsejarme y demostrarme que no quiero morir a los 30 años, sino que quiero pasar una eternidad a tu lado, y que cuando nuestros cuerpos sean energía en el universo, sean un recordatorio de 2 seres que se dieron todo y se amaron con locura. Gracias por ser y estar. Y Como te he dicho ya en repetidas ocasiones te amo tanto como la cantidad de decimales de PI y aunque el amor que sienta por ti no se puede medir, sí te lo puedo demostrar. Te amo Marianna Elvira Guzmán Sebastián. Te amo y te adoro con toda mi alma, cuerpo y mente, todo lo que tengo, aunque no sea mucho, es tuyo. Te amo, esposita mía. ¡Feliz Primer Aniversario!💖"
    const lastURL = "https://www.youtube.com/watch?v=1G3-lhgD658"

    return(<div className='precarta'>
        <Card number={6} 
            destinatario={lastDestinatario} 
            mensaje={lastMessage} 
            url={lastURL} 
            ></Card>
    </div>)
}

export default Precarta