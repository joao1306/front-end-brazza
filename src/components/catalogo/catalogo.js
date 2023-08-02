import React from 'react';
import './catalogo.css';
import ItemCatalogo from './item_catalogo/itemCatalogo';
import ModalLanche from './modal/modalLanche'
import {useState} from 'react'
import backgroundCatalogo from './midia_catalogo/backgroundcatalogo.png'


export default function Catalogo() {

  const [modalOpen, setModalOpen] = useState( false );

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className='corpo_catalogo' id='corpo_catalogo'>
        <h1 className='titulo_catalogo'>CARDÁPIO</h1>
        <img src={backgroundCatalogo} alt='backgroundCatalogo' className='background_catalogo'></img>
        <div className='container_items'>
            <button onClick={openModal} className='modal_button'><ItemCatalogo></ItemCatalogo></button>
            <ItemCatalogo></ItemCatalogo>
            <ItemCatalogo></ItemCatalogo>
            <ItemCatalogo></ItemCatalogo>
            <ItemCatalogo></ItemCatalogo>
            <ItemCatalogo></ItemCatalogo>
            <ItemCatalogo></ItemCatalogo>
            <ItemCatalogo></ItemCatalogo>
            <ItemCatalogo></ItemCatalogo>
        </div>
        {modalOpen &&(<ModalLanche  onClose={closeModal}/>)}
    </div>
  )
}
