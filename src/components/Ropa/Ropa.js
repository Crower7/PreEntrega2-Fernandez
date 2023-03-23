import './Ropa.css'
import { Link } from 'react-router-dom'

export const Ropa = () => {
  return (
    <div className='ropa_css'>
       <Link to='/remeras' >remeras</Link>
       <Link to='/pantalones' >pantalones</Link>
       <Link to='/Camperas' >Camperas</Link>
       <Link to='/Buzos' >Buzos</Link>               
        
    </div>
  )
}
