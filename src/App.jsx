import './App.css'
import { Routes, Route } from "react-router";

import InstrumentosCards from './paginas/Cards/InstrumentosCards';
import InstrumentosTabela from './paginas/Tabela/InstrumentosTabela';
import Menu from './components/Menu/Menu'

function App() {

  return (
    <>
      <Menu></Menu>
      <Routes>
        <Route path="/" Component={InstrumentosCards}/>
        <Route path="/instrumentos-tabela" Component={InstrumentosTabela}/>
      </Routes>
    </>
  )
}

export default App
