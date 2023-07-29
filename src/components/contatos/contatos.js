import React from 'react'
import './contatos.css'
import logotipo from './midia_contatos/logotipo.png'
import background from './midia_contatos/backgroundcontatosgeral.png'
import ifood from './midia_contatos/ifood.png'
import whatsapp from './midia_contatos/whatsapp.png'
import instagram from './midia_contatos/instagram.png'
import facebook from './midia_contatos/facebook.png'

export default function Contatos() {
  return (

    <div className="corpo" id='corpo_contatos'>
        <div className='divisoria'></div>
        <div className='background'>
            <img src={background} alt="background" className='fundo'/>
        </div>
        <div className="logo">
            <img src={logotipo} alt="logo" className="logo-contato"/>
        </div>

        <div className="info">
            <div className="info-box">
                <h1>CONTATOS</h1>
                <div className="line"></div>
                <div className="text">
                    <p>Funcionamos de <span className="dia">Quarta</span> a <span className="dia">Domingo</span> das</p>
                    <p><span className="hora">19h</span> às <span className="hora">00h</span></p>
                </div>
                <div className="icon-box">
                    <a href="www.google.com" className="link-contato"><img src={whatsapp}  className='i' /></a>
                    <a href="www.google.com" className="link-contato"><img src={instagram} className='i' /></a>
                    <a href="www.google.com" className="link-contato"><img src={facebook}  className='i' /></a>
                    <a href="www.google.com" className="link-contato"><img src={ifood} alt="ifood" className="ifood-icon"/></a>
                </div>
                <div className="text">
                    <p className="chamada">é só <span className="embrazzar">clicar!</span></p>
                </div>
            </div>
        </div>
    </div>

  )
}
