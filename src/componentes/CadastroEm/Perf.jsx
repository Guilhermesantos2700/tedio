import React from 'react';
import './Perf.css';
import { Link } from 'react-router-dom';
import mercado from "../mercado/mercado";

const perf = () => {
    return (
        <div>
            <div className="Perf">
                <h1>Perfil da empresa</h1>

                <input placeholder="email" type="email" />
                <input placeholder="senha" type="password" />


                <div>
                    <Link to = 'Mercado'>
                        <button>Mercado</button>
                    </Link>
                </div>
                <div className="inform">
                    <h2>Informações Necessarias Para O Cargo</h2>

                    <p> O Que É Preciso ?:<input placeholder="" type="vagas" /></p>

                    <p> Quantas Vagas ?:<input placeholder="" type="vagas" /></p>

                    <p> Informações Adicionais:<input placeholder="" type="vagas" /></p>



                    <h3>Aviso:</h3>
                    <p>As Informações Acima Seram Mostrada A Público</p>


                </div>

            </div>


        </div>
    )
}
export default perf;