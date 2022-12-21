import './App.css';
import {Routes, Route, useLocation} from 'react-router-dom'
import Principal from './pages/principal/Principal'
import Precarta from './pages/pre-carta/Precarta'
import Resumen from './pages/resumen/Resumen'

function App() {

  const location = useLocation()
  let cName = "app" 

  if(location.pathname === "/teamo"){
    cName = "app teamo"
  }

  if(location.pathname === "/"){
    cName = "app w-100"
  }

  return (
    <div className={cName}>
      <Routes>
        <Route path='/' element={<Resumen></Resumen>}></Route>
        <Route path='/preciosa' element={<Principal></Principal>}></Route>
        <Route path='/teamo' element= {<Precarta></Precarta>}></Route>
      </Routes>
    </div>
  );
}

export default App;
