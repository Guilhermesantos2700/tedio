import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.scss';


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
      <nav>
        <div onClick={abrirMenu} id="menu-hamburguer">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <section className={`menu ${menuAtivo ? "ativo" : ""}`}>
        <Link onClick={fecharMenu} to="/">HOME</Link>
        <Link onClick={fecharMenu} to="/pagamento">EMPREGOS</Link>
        <Link onClick={fecharMenu} to="/CadastroEmpresa">CADASTRA EMPRESA</Link>
        <Link onClick={fecharMenu} to="/cadastro">CADASTRO PESSOA</Link>
      </section>
    </div>
  );
};

export default Navbar;