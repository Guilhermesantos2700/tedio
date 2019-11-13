import React from 'react';
import './Home.css';
import rel from '../img/gui-2.png'
import logo from '../img/gui-4.png'
import face from '../img/facebook.png'
import git from '../img/github.png'
import gm from '../img/gmail.png'


const Home = () => {
  return (
    <div>
      <div className="Home">
       
        <img src={logo} alt="img-trabalho"/>
        
        
      </div>
      

      <div className="relacao" >
        
        <img className="" src={rel} alt="img-relacao" />
        <h1>Se Cadastre, Podemos Ajudar Em Sua Vida!! Deixando-a Mais Dinamica...
        </h1>  

      </div>
      <footer>
        <img src={face} alt="facebook"/>
        <img src={git} alt="github"/>        
        <img src={gm} alt="gmail"/>
          
       
      </footer>

    </div>
   


  )

}
export default Home;