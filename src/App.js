
import './App.css';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from './components/NavBar/NavBar';
import { Slogan } from './components/Slogan';



function App() {
  return (
    <div className="App">
      <NavBar/>
     
      <ItemListContainer greeting={"Bienvenidos a nuestra Tienda"}/>
      
      <Slogan/>
       
    </div>
  );
}

export default App;


