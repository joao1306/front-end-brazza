import React from 'react'
import './navbar.css'
import logo_nome from './midia_navbar/nome.png'

export default function Navbar() {





  return (
    <div className="navbar">
        <div className="background-navbar"></div>
        <img src={logo_nome} alt="BRAZZA" className="logo-nav"/>
        <div className="box-botoes">
            <button className="botao-nav"><a href="#home">Início</a></button>
            <button className="botao-nav"><a href="#corpo_cardapio">Cardápio</a></button>
            <button className="botao-nav"><a href="#corpo_contatos">Contato</a></button>
        </div>
    </div>
  )
}
