import './Menu.css'
import { Link } from 'react-router'


function Menu() {
    return(
        <div>
            <nav className='menu'>
                <Link to='/'><button className='btn-menu' type='button'>Tela de Cards</button></Link>
                <Link to='/instrumentos-tabela'><button className='btn-menu' type='button'>Tela com Tabela</button></Link>
            </nav>
        </div>
    )
}

export default Menu