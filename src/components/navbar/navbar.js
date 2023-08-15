import React from 'react'
import './navbar.css'
import logo_nome from './midia_navbar/nome.png'

export default function Navbar() {

  return (
    <div className="navbar">
        <div className="background-navbar"></div>
        <a href="#home" className='botao-logo-navbar'><img src={logo_nome} alt="BRAZZA" className="logo-nav"/></a>
        <div className="box-botoes">
            <button className="botao-nav"><a href="#home">Início</a></button>
            <button className="botao-nav"><a href="#corpo_cardapio">Espiar</a></button>
            <button className="botao-nav"><a href="#corpo_catalogo">Cardápio</a></button>
            <button className="botao-nav"><a href="#corpo_contatos">Contato</a></button>
        </div>
    </div>
  )
}
