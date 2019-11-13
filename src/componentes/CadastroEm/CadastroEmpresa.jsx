import React from 'react';

import { Link } from 'react-router-dom';
import './CadastroEmpresa.css';



const CadastroEmpresa = () => {
  return (
    <div className="CadastroEmpresa">
      <div>
        <h2>Cadastro Empresa</h2>
      </div>
      <div className='barrinhas'>
        
        <input  type="nome da empresa" placeholder="Nome Da Empresa" />
        
        <input type="email" placeholder="E-mail" />
        
        <input id="senha" type="password" placeholder="Senha" />
        
        <input type="cnpj" placeholder="CNPJ" />
       
        <input type="telefone" placeholder="Telefone" />
        
        <input type="endereco" placeholder="Endereço" />
         
        <input type="numero" placeholder="Contato" />
        
        <input type="cep" placeholder="CEP" />

      </div>

      <div id='trazB'>
        <Link to ='PerfilEmpresa'>
          <button>Cadastrar</button>
        </Link>
      </div>


    </div>
  );
}

export default CadastroEmpresa;
