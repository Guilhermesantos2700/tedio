import React from 'react';
import './perfPessoas.css'



const perfPessoas = () => {
    return (
        <div>
            <div className="Certo">
                <h1>perfil da pessoa</h1>
            <input placeholder="Nome" type="nome"/>
            <input placeholder="E-mail" type="email"/>
            <input placeholder="Senha" type="senha"/>
            <input placeholder="Telefone" type="telefone"/>
            <input placeholder="Data De Nascimento" type="data de nascimento"/>
            <input placeholder="CPF" type="cpf"/>

            </div>
            <div>
                
            </div>

        </div>
    )
}
export default perfPessoas;