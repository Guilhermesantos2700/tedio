import React from 'react';
import './Cadastro.css';
import './perfPessoas';
import { Link } from 'react-router-dom';




const cadastro = () => {
    return (
        <div className="Cadastro">
         <div>
           <h1>CADASTRO PESSOA</h1>
        </div>
        
        <div className="barra">
            <h2>Seu Nome</h2>
        <input type="nome cliente" placeholder="Nome" />
            <h2>E-mail</h2>
        <input type="email" placeholder="Email"/>
            <h2>Senha</h2>
        <input id="senha" type="password" placeholder="Senha"/>
            <h2>Numero</h2>
        <input type="numero" placeholder="Numero"/>
            <h2>Data De Nacimento</h2>
        <input type="date" name="data" id=""/>


        <div id='Botao'>
        <Link to ='PerfilPessoa'>
          <button>Cadastrar</button>
        </Link>
      </div>


        
        </div>

         </div>
        
    )
}
export default cadastro;