import React from 'react'
import './modalLanche.css'

export default function ModalLanche( {onClose} ) {
  return (
    <div className='corpo_modal'>
        <button onClick={onClose} className='close_button'> x </button>
        <div className='fotos'>
            <img src='https://yata-apix-12c626c1-c4e5-440f-9a8a-6cb1537cb8fa.s3-object.locaweb.com.br/c8f4943997624b90b9c5a73d77a18c89.png' className='imagem_modal'></img>
        </div>

        <div className='info_modal'>
            <h1 className='titulo_info_modal'>BIGBRAZZA</h1>
            <div className="ingredientes ingredientes_modal">
                <div className="box-ingredientes">
                    <h2 className="titulo-box-ingredientes">Ingredientes</h2>
                    <ul>
                        <li>sdasdad</li>
                        <li>sdasdad</li>
                        <li>sdasdad</li>
                    </ul>
                    <div className="valor-lanche-box valor_modal">
                        <div className="texto-valor-lanche">
                            <h2 className="valor">R$ 23,38</h2>
                            <h4>Artesanal</h4>
                        </div>
                    </div>
                </div>
                <div className="box-ingredientes box-combo">
                    <h2 className="titulo-box-ingredientes">Combo</h2>
                    <ul>
                        <li>sdasdad</li>
                        <li>sdasdad</li>
                        <li>sdasdad</li>
                    </ul>
                    <div className="valor-lanche-box valor_modal">
                        <div className="texto-valor-lanche">
                            <h2 className="valor">R$ 23,38</h2>
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
