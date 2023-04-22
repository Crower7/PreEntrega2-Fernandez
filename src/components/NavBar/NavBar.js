import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () =>{       //componente del nav (inicio-galeria-contactos-etc.)
    return (
        <nav className="NavBar">
            <h1 className='titulo'>CrowerStore</h1>
                <div>
                
                    <button><Link to='/'>Inicio</Link></button>
                    <button>Galeria</button>
                    <button>Contactenos</button>
                    <button>productos</button>
                                    
                </div>
                    <CartWidget/>
        </nav>
    )
}

export default NavBar

