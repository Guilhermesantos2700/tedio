import React from 'react';
//import '../componentes/HomeDecore.scss';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    
    <div className="Home">
      <header>
        <a href="/home">Home</a>
        <Link to="/home">
          <a>Home</a>
        </Link>
        
        <Link to='/cadastra'>
          <a>Cadastrar</a>
        </Link>
      </header>
      <div>oiiiii</div>


    </div>
  )
}
export default Home;