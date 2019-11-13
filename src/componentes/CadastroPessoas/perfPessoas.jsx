import React from 'react';
import './perfPessoas.css'
import fun from './img/images.jpeg'
import { Link } from 'react-router-dom';




const perfPessoas = () => {
    return (
        <div>
            <div className="Certo">
                <h1>Perfil De Pessoas</h1>
            <input placeholder="Nome" type="nome"/>
            <input placeholder="E-mail" type="email"/>
            <input placeholder="Senha" type="senha"/>
            <input placeholder="Telefone" type="telefone"/>
            <input placeholder="Data De Nascimento" type="data de nascimento"/>
            <input placeholder="CPF" type="cpf"/>

            <Link to ='mercado'>
                <button>Mercado</button>
            </Link> 

            </div>
            <div>
                <div className="curriculo">


                    <h2>Curriculo</h2>
                    
                    <p> Quais seus objetivos:<input placeholder="" type="objetivo"/></p>
                    <p> Formaçao Academica:<input placeholder="" type="formacao"/></p>
                    <p> Experiencias :<input placeholder="" type="Experiencias"/></p>
                    <p> Qualificações:<input placeholder="" type="Qualificações"/></p>
                    <p> Informações Adicionais :<input placeholder="" type="informacoes"/></p>

                
                </div>
                
            </div>

        </div>
    )
}
export default perfPessoas;