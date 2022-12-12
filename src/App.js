import './App.css';
import Card from './components/card/Card';
import Modal from './components/modal/Modal';

function App() {
  return (
    <div className="app">
      <h1>Buenas noches, mi amor</h1> <br></br>
      <p>
        Esta es una idea que tuve más o menos desde octubre, no sabía cómo concretarla y se me fueron ocurriendo algunas variaciones, pero bueno aquí tamos. Estoy comenzando esto exactamente un viernes 18 de noviembre, un día después de tu espectacular presentación en CEMDUC, mi ninfa favorita. 
      </p>
      <p> <br></br>
        Te explico un poco cómo va esto, amore mio. Cada día esta página web se actualizará y te mostrará una pequeña carta para vos. Empezará el domingo 11 de diciembre y terminará el viernes 16 uwu.
      </p>
      <button className='btn-1'>Continuar</button>
      <Card></Card>
      <Modal></Modal>
    </div>
  );
}

export default App;
