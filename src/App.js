import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import CadastroEM from './componentes/CadastroEm/CadastroEmpresa.jsx';
import CadastroPessoas from './componentes/CadastroPessoas/Cadastro.jsx';
import home from './componentes/Home/Home';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={home} />
      <Route path='/cadastro' exact component={CadastroPessoas} />
      <Route path='/CadastroEmpresa' exact component={CadastroEM} />
      

    </BrowserRouter>
  );
}
export default App;