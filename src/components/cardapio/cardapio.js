import React, { useEffect, useState } from "react";
import axios from "axios";
import './cardapio.css'
import background_cardapio from './midia_cardapio/backgroundcardapio.png'
import baconbrazza from './midia_cardapio/baconbrazza.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Cardapio() {
    
    const [index_atual, setIndexAtual] = useState(0);
    const [lanches, setLanches] = useState([index_atual]);

    useEffect(() => {
      const fetchLanches = async () => {
        try {
          const response = await axios.get('https://back-end-brazza.vercel.app/'); 
          setLanches(response.data);
        } catch (error) {
          console.error('Erro ao buscar lanches:', error);
        }
      };
      fetchLanches();
    }, []);

    function setaDireita(){
        if(index_atual < lanches.length - 1){
            setIndexAtual(index_atual + 1);
            console.log(index_atual);
        } else{
            setIndexAtual(0);
            console.log(index_atual)
        }
    }

    function setaEsquerda(){
        if(index_atual > 0){
            setIndexAtual(index_atual - 1)
            console.log(index_atual)
        } else{
            setIndexAtual(lanches.length - 1)
            console.log(index_atual)
        }
    }

    let valor_artesanal = lanches[index_atual]?.valor_artesanal?.toFixed(2) || '0.00';
    let valor_combo = lanches[index_atual]?.valor_combo?.toFixed(2) || '0.00';
    let descricao_artesanal = lanches[index_atual].descricao_ingredientes;
    let descricao_combo = lanches[index_atual].descricao_combo;
    

    return (
        <div className="corpo-cardapio" id="corpo_cardapio">
            <div className="divisoria"></div>
            <img src={background_cardapio} alt="" className="backgroundcardapio"/>
            <div className="lanche">
                <div className="titulo-lanche-box">
                    <button className="seta-cardapio" onClick={setaEsquerda}><FontAwesomeIcon icon={faArrowLeft} className="fa-solid fa-arrow-left seta-titulo-lanche" /></button>
                    <h1 className="titulo-lanche">{lanches[index_atual].nome}</h1>
                    <button className="seta-cardapio" onClick={setaDireita}><FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right seta-titulo-lanche" /></button>
                </div>
                <img src={baconbrazza} alt="foto do lanche" className="foto-hamburguer"/>
                <button className="botao-embrazzar"> EMBRAZZAR </button>
            </div>
            
            <div className="info-lanche">
                <div className="box-valores">
                    <div className="valor-lanche-box">
                        <div className="texto-valor-lanche">
                            <h2 className="valor">R$ {valor_artesanal}</h2>
                            <h4>Artesanal</h4>
                        </div>
                    </div>

                    <div className="valor-lanche-box">
                        <div className="texto-valor-lanche">
                            <h2 className="valor">R$ {valor_combo}</h2>
                            <h4>Combo</h4>
                        </div>
                    </div>
                </div>

                <div className="ingredientes">
                    <div className="box-ingredientes">
                        <h2 className="titulo-box-ingredientes">Ingredientes</h2>
                        <ul>
                            <li>{descricao_artesanal}</li>
                        </ul>
                    </div>
                    <div className="box-ingredientes box-combo">
                        <h2 className="titulo-box-ingredientes">Combo</h2>
                        <ul>
                            <li>{descricao_combo}</li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
  )
}
