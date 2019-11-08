import React from 'react';
import './Home.css';
import rel from '../img/gui-2.png'
import logo from '../img/gui-4.png'


const Home = () => {
  return (
    <div>
      <div className="Home">
       
        <img src={logo} alt="img-trabalho" />
        
        
      </div>
      

      <div className="relacao" >
        
        <img className="" src={rel} alt="img-relacao" />
        <h1>Está    Procurando   Emprego ? Você Está no lugar certo</h1>  

      </div>
      <footer>
        <div>jhrtdg</div>
      </footer>

    </div>
   


  )

}
export default Home;