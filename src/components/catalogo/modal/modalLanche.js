import React from 'react'
import './modalLanche.css'


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
                <div className="box_ingredientes">
                    <h2 className="titulo_box_ingredientes">Ingredientes</h2>
                    <ul className='bloco_de_itens'>
                        {mapItems(descricao_artesanal)}
                    </ul>
                    <div className="valor_lanche_box valor_modal">
                        <div className="texto_valor_lanche">
                            <h2 className="valor">R$ {valor_artesanal}</h2>
                            <h4>Artesanal</h4>
                        </div>
                    </div>
                </div>
                <div className="box_ingredientes box_combo">
                    <h2 className="titulo_box_ingredientes">Combo</h2>
                    <ul className='bloco_de_itens'>
                        {mapItems(descricao_combo)}
                    </ul>
                    <div className="valor_lanche_box valor_modal">
                        <div className="texto_valor_lanche">
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
