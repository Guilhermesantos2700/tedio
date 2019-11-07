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
        <label>Nome </label>
        <input  type="nome da empresa" placeholder="Nome Da Empresa" />
        <label>E-mail </label>
        <input type="email" placeholder="E-mail" />
        <label>Senha </label>
        <input id="senha" type="password" placeholder="Senha" />
        <label>CNPJ </label>
        <input type="cnpj" placeholder="CNPJ" />
        <label>Telefone </label>
        <input type="telefone" placeholder="Telefone" />
        <label>Endereço </label>
        <input type="endereco" placeholder="Endereço" />
        <label>Numero </label>
        <input type="numero" placeholder="Contato" />
        <label>CEP </label>
        <input type="cep" placeholder="CEP" />

      </div>

      <div id='trazB'>
        <button >Cadastrar</button>
      </div>


    </div>
  );
}

export default CadastroEmpresa;
