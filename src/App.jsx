/* import Agregar from './pages/agregar.js'
import Home from './pages/home.js' */
import { BrowserRouter } from 'react-router-dom'
/* import Nav from "./components/Navbar2.js" */
import Primero from './components/Primero';
import CollapsibleExample from './components/Navbar';
import Aside2 from './components/Aside2';


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='background-container'>
          <CollapsibleExample />
          <Aside2 />
          <Primero />
          
{/*           <Route exact path="/" component={Home} />
          <Route path="/agregar" component={Agregar} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

