import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.scss';
import job from './ima/gui-5.png'



const Navbar = () => {
  const [menuAtivo, setMenuAtivo] = useState(false);


  const abrirMenu = () => {
    setMenuAtivo(!menuAtivo);
  };

  const fecharMenu = () => {
    setMenuAtivo(false)
  }

  return (
    <div className="Navbar">
      <div className="nav2">

      <nav>
        <div className="logo">
        <img className="logoimg" src={job} alt=""/>
         </div>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      </div>
   
    
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/mercado"></Link>
        <Link onClick={fecharMenu} to="/">HOME</Link>
        <Link onClick={fecharMenu} to="/CadastroEmpresa">CADASTRA EMPRESA</Link>
        <Link onClick={fecharMenu} to="/cadastro">CADASTRO PESSOA</Link>
      </section>
    </div>
  );
};

export default Navbar;