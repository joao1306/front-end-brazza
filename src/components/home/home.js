import React from 'react'
import './home.css'
import logotipo from './midia_home/logotipo.png'
import background from './midia_home/background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return (
  <div className="inicio" id="home">
          <img src={background} alt="background" className="background_inicio"/>
          <img src={logotipo} alt="logo" className="logo-apresentacao"/>
          <a href='#corpo_cardapio' className="seta">
          <FontAwesomeIcon icon={faArrowDown} />
          </a>
      </div>
  )
}
