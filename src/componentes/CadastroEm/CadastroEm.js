import React from 'react';
import './CadastroEmpresa';



const CadastroEmpresa = () => {

    const nomeEm = React.useRef("");
    const email = React.useRef("");
    const senha = React.useRef("");
    const cnpj = React.useRef("");
    const telefone = React.useRef("");
    const endereco = React.useRef("");
    const numero = React.useRef("");
    const cep = React.useRef("");

    const CadastroEmpresa = (event) => {
        event.preventDefaut();
        

        fetch('http://localhost:3000/CadastroEmpresa/', {
            method: 'post',
            body: JSON.stringify({
                nome: nomeRef.current.value,
                email: emailRef.current.value,
                senha: senhaRef.current.value,
                cnpj: cnpjRef.current.value,
                telefone: telefoneRef.current.value,
                numero: numeroRef.current.value,
                cep: cepRef.current.value,
            })
        headers: {
                'Content-Type': 'application/json'
            }
        }).then(value => {
            return value.json()
        }).then(value => {
            if (value.id) {
                alert("")
            }
        })



    }

    export default CadastroEmpresa;