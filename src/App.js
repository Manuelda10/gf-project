import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import Principal from './pages/principal/Principal'
import Precarta from './pages/pre-carta/Precarta'
import Carta from './pages/carta/Carta'

function App() {

  const location = useLocation()
  let cName = "app"

  if(location.pathname === "/teamo"){
    cName = "app teamo"
  }

  return (
    <div className={cName}>
      <Routes>
        <Route path='/' element={<Principal></Principal>}></Route>
        <Route path='/teamo' element= {<Precarta></Precarta>}></Route>
        <Route path='/preciosa' element={<Carta></Carta>}></Route>
      </Routes>
    </div>
  );
}

export default App;
