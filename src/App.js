
import './App.css';
import ImgMove from './components/ImgMove/ImgMove';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import { Ropa } from './components/Ropa/Ropa';
import { Slogan } from './components/Slogan';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar/>   
     
        <Slogan/>

        <ImgMove/>

        <Ropa/>
        <Ropa/>

          <Routes>

            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a nuestra Tienda"}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={"producto categoria"}/>} />
            
            
            
          </Routes>

            
      
      </BrowserRouter>
       
    </div>
  );
}

export default App;


