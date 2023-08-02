import './App.css';
import Navbar from './components/navbar/navbar'
import Home from './components/home/home';
import Cardapio from './components/cardapio/cardapio';
import Contatos from './components/contatos/contatos';
import Catalogo from './components/catalogo/catalogo';



function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Cardapio></Cardapio>
      <Catalogo></Catalogo>
      <Contatos></Contatos>
    </div>
  );
}

export default App;
