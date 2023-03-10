import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () =>{       //componente 1
    return (
        <nav className="NavBar">
            <h1 className='titulo'>CrowerStore</h1>
                <div>
                    <button>Inicio</button>                    
                    <button>Galeria</button>
                    <button>Contactenos</button>
                    <button>productos</button>
                                    
                </div>
                    <CartWidget/>
        </nav>
    )
}

export default NavBar

