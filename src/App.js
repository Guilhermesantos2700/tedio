import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navebar';
import Home from './componentes/Home/Home';
import CadastroEM from './componentes/CadastroEm/CadastroEmpresa.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/cadastra' component={CadastroEM} />
    </BrowserRouter>
  );
}
export default App;