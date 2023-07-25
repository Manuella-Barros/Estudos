import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Produtos from './Pages/produtos';
import Contato from './Pages/Contato';
import './index.css';
import Navbar from './Componentes/navbar';
import ProdutoItem from './Pages/produtoItem';

function App() {
  return (
    <main id='body_home'>
      <BrowserRouter>
        <Navbar/>
    
        <Routes>
          <Route path='' element={<Produtos/>}/>
          <Route path='contato' element={<Contato/>}/>
          <Route path='produto/:id' element={<ProdutoItem/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App