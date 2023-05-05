
import './App.css';
import Footer from './components/Footer/Footer';
import ImgMove from './components/ImgMove/ImgMove';
import { Inicio } from './components/Inicio/Inicio';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import { Slogan } from './components/Slogan';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>   
     
        <Slogan/>     {/* Comp. Slogan de la pagina*/}

        <ImgMove/>    {/* comp. de imagenes que se mueven */}

        

          <Routes>

            <Route path='/' element={<Inicio greeting={"Bienvenidos a nuestra Tienda"}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"producto categoria"}/>} />
            
            
            
          </Routes>

            <Footer/> 
      </BrowserRouter>
       
    </div>
  );
}

export default App;


