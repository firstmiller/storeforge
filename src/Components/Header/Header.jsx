import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return (
        <header className="header" >
            <div className="header__container">
                <div className="header__logo"><Link to='/' >StoreForge</Link></div>
                <div className="header__nav">
                    <ul className='nav'>
                        <Link to='/help' className="nav__item">Поддержка</Link>
                        <Link to='/login' className="nav__item">Войти</Link>
                    </ul>
                </div>
            </div>
        </header >
    )
}
export default Header;