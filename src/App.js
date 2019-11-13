import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './componentes/Navbar/Navbar';
import CadastroEM from './componentes/CadastroEm/CadastroEmpresa.jsx';
import CadastroPessoas from './componentes/CadastroPessoas/Cadastro.jsx';
import home from './componentes/Home/Home';
import Perf from './componentes/CadastroEm/Perf';
import PerfUsuario from './componentes/CadastroPessoas/perfPessoas'
import './componentes/mercado/mercado';
import mercado from './componentes/mercado/mercado';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path='/' exact component={home} />
      <Route path='/cadastro' exact component={CadastroPessoas} />
      <Route path='/mercado' exact component={mercado} />
      <Route path='/CadastroEmpresa' exact component={CadastroEM} />
      <Route path='/PerfilEmpresa' exact component={Perf} />
      <Route path='/PerfilPessoa' exact component={PerfUsuario} />
      

    </BrowserRouter>
  );
}
export default App;