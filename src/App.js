import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos';
import ComunicacionComponentes from './components/ComunicacionComponentes';
import CicloVida from './components/CicloVida';
import AjaxApi from './components/AjaxApis';
import ContadorHook from './components/ContadorHook';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import HooksPersonalizados from './components/HooksPersonalizados';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';


function App() {


  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />

          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un Componente desde una props"/>
          <hr/>
          <Propiedades 
            cadena="Esto es una cadena de texto" 
            numero={19} 
            booleano={false} 
            arreglo={[1,2,3]}
            objeto={{nombre: "Christian", correo:"manzi@dev.com"}}
            funcion={num => num*num }
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg="Soy un componente pasado como props"/>}
          />
          <hr/>
          <Estado />
          <hr/>
          <RenderizadoCondicional  />
          <hr/>
          <RenderizadoElementos  />
          <hr/>
          <EventosES6 />
          <hr/>
          <EventosES7 />
          <hr/>
          <MasSobreEventos />
          <hr/>
          <ComunicacionComponentes />
          <hr/>
          <CicloVida/>
          <hr/>
          <AjaxApi/>
          <hr/>
          <ContadorHook />
          <hr/>
          <ScrollHooks />
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
          <HooksPersonalizados/>
          <hr/>
          <Referencias/>
          <hr/>
          <Formularios/>


          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </section>
        <br/><br/>
      </header>
    </div>
  );
}

export default App;
