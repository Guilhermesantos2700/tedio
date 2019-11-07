import React from 'react';
import './Home.css';
import tra from '../img/images.jpeg';
import rel from '../img/relacao.png'
import log from '../img/gmail.png'
import face from '../img/facebook.png'
import git from '../img/github.png'


const Home = () => {
  return (
    <div>
      <div className="Home">
        <h1> Venha Conhecer Nossos Servicos De Melhoria Para Empregabilidade </h1>
        <img src={tra} alt="img-trabalho" />
      </div>

      <div className="relacao" >
        <h2>Está a Procura De Emprego ? </h2>
        <h3>Você Está No Lugar Certo !!!</h3>
        <img className="relacaoimg" src={rel} alt="img-relacao" />



      </div>


    </div>


  )

}
export default Home;