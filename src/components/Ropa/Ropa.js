import './Ropa.css'
import { Link } from 'react-router-dom'

export const Ropa = () => {
  return (
    <div className='ropa_css'>
       <Link to='/category/remera' >remeras</Link>
       <Link to='/category/pantalon' >pantalones</Link>
       <Link to='/category/campera' >Camperas</Link>
       <Link to='/category/Buzo' >Buzos</Link>               
        
    </div>
  )
}
