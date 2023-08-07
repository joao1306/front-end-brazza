import React from 'react';
import './catalogo.css';
import ModalLanche from './modal/modalLanche'
import {useState, useEffect} from 'react'
import backgroundCatalogo from './midia_catalogo/backgroundcatalogo.png'
import axios from 'axios';


export default function Catalogo() {

  const [modalOpen, setModalOpen] = useState( false );
  const [lanches, setLanches] = useState([]);
  const [fotoSelecionada, setFotoSelecionada] = useState('');
  const [nomeSelecionado, setnomeSelecionado] = useState('');
  const [ingredienteSelecionado, setingredienteSelecionado] = useState('');
  const [comboSelecionado, setcomboSelecionado] = useState('');
  const [valorArtSelecionado, setvalorArtSelecionado] = useState('');
  const [valorComboSelecionado, setvalorComboSelecionado] = useState('');



  const openModal = (foto, nome, descricao, combo, vArt, vCombo) => {
    setModalOpen(true);
    setFotoSelecionada(foto);
    setnomeSelecionado(nome);
    setingredienteSelecionado(descricao);
    setcomboSelecionado(combo);
    setvalorArtSelecionado(vArt);
    setvalorComboSelecionado(vCombo);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

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

  function mapItems(arr){
    return arr.map((ingrediente, index)=>(
      <button key={index} onClick={() => openModal(ingrediente.foto, ingrediente.nome, ingrediente.descricao_ingredientes, ingrediente.descricao_combo, ingrediente.valor_artesanal, ingrediente.valor_combo)} className='modal_button'>
        <div className='corpo_item_catalogo hvr'>
          <img className='foto_item_catalogo' src={ingrediente.foto} alt='foto catalogo'></img>
          <h1 className='titulo_item_catalogo'>{ingrediente.nome}</h1>
        </div>
      </button>
    ))
}



  return (
    <div className='corpo_catalogo' id='corpo_catalogo'>
        <h1 className='titulo_catalogo'>CARDÁPIO</h1>
        <img src={backgroundCatalogo} alt='backgroundCatalogo' className='background_catalogo'></img>
        <div className='container_items'>
            {mapItems(lanches)}
        </div>
        {modalOpen &&(<ModalLanche fotoSelecionada={fotoSelecionada} nomeSelecionado={nomeSelecionado} descricao={ingredienteSelecionado} combo={comboSelecionado} vArt={valorArtSelecionado} vCombo={valorComboSelecionado} onClose={closeModal}/>)}
    </div>
  )
}
