
import './App.css';
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

          <Routes>

            <Route path='/' element={<ItemListContainer greeting={"Bienvenidos a nuestra Tienda"}/>} />
            
          </Routes>

            <Ropa/>
      
      </BrowserRouter>
       
    </div>
  );
}

export default App;


