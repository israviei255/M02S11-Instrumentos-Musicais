import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";

import InstrumentosCards from './paginas/InstrumentosCards';
import InstrumentosTabela from './paginas/Tabela/InstrumentosTabela';

function App() {

  return (
    <Routes>
      <Route path="/" Component={InstrumentosCards}/>
      <Route path="/instrumentos-tabela" Component={InstrumentosTabela}/>
    </Routes>
  )
}

export default App
