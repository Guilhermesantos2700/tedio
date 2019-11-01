import React from 'react';

import './CadastroEmpresa.css';



const CadastroEmpresa = () => {
  return (
    <div className="CadastroEmpresa">
      <div>
        <h1>Caieiras Job</h1>
        <h2>Cadastro Empresa</h2>
      </div>
      <div className='barrinhas'>
        <input type="email" placeholder="Email"/>
        <input id="senha" type="password" placeholder="Senha"/>
        <input type="nome da empresa" placeholder="Nome Da Empresa" />
        <input type="cnpj" placeholder="CNPJ" />
        <input type="telefone" placeholder="Telefone" />
        <input type="endereco" placeholder="Endereco" />
        <input type="numero" placeholder="Contato"/>
        <input type="cep" placeholder="CEP" />
        
      </div>
      <div id='botao'>
        <button>
          <h3>cadastrar</h3>
        </button>
      </div>


    </div>
  );
}

export default CadastroEmpresa;