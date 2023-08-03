import React from 'react'
import {useEffect,useState} from 'react'
import './modalLanche.css'
import axios from 'axios';
import Catalogo from '../catalogo'

export default function ModalLanche( {fotoSelecionada, nomeSelecionado, descricao, combo, vArt, vCombo, onClose} ) {

    function mapItems(arr){
        return arr.map((ingrediente, index)=>(
            <li key={index}>{ingrediente}</li>
        ))
    }

    let valor_artesanal = vArt.toFixed(2);
    let valor_combo = vCombo.toFixed(2);
    let descricao_artesanal = JSON.parse(descricao);
    let descricao_combo = JSON.parse(combo);

  return (
    <div className='corpo_modal'>
        <button onClick={onClose} className='close_button'> x </button>
        <div className='fotos'>
            <img src={fotoSelecionada} alt='#' className='imagem_modal'></img>
        </div>

        <div className='info_modal'>
            <h1 className='titulo_info_modal'>{nomeSelecionado}</h1>
            <div className="ingredientes ingredientes_modal">
                <div className="box-ingredientes">
                    <h2 className="titulo-box-ingredientes">Ingredientes</h2>
                    <ul>
                        {mapItems(descricao_artesanal)}
                    </ul>
                    <div className="valor-lanche-box valor_modal">
                        <div className="texto-valor-lanche">
                            <h2 className="valor">R$ {valor_artesanal}</h2>
                            <h4>Artesanal</h4>
                        </div>
                    </div>
                </div>
                <div className="box-ingredientes box-combo">
                    <h2 className="titulo-box-ingredientes">Combo</h2>
                    <ul>
                        {mapItems(descricao_combo)}
                    </ul>
                    <div className="valor-lanche-box valor_modal">
                        <div className="texto-valor-lanche">
                            <h2 className="valor">R$ {valor_combo}</h2>
                            <h4>Artesanal</h4>
                        </div>
                    </div>
                </div>
            </div>
            <button className='pedir_wpp_modal'> EMBRAZZAR </button>
        </div>

    </div>
  )
}
