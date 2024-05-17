import { Link } from 'react-router-dom';
import './header.css'

function Header({setStateBurgerMenu, stateBurgerMenu}) {
    return (
        <>
            <header className="header" >
                <div className="header__container">
                    <div className="header__logo"><Link to='/'>StoreForge</Link></div>
                    <div className="header__nav">
                        <ul className='nav'>
                            <li><Link to='/help' className="nav__item">Поддержка</Link></li>
                            <li><Link to='/register' className="nav__item">Регистрация</Link></li>
                            <li><Link to='/login' className="nav__item">Войти</Link></li>
                        </ul>
                        <div onClick={() => {setStateBurgerMenu(!stateBurgerMenu)}} className={stateBurgerMenu ? "header__burgerMenuCross" : "header__burgerMenu"}></div>
                        <div className={stateBurgerMenu ? 'header__navbar header__navbar_active' : 'header__navbar'}>
                        <ul className='navbar'>
                            <li><Link to='/help' className="navbar__item">Поддержка</Link></li>
                            <li><Link to='/register' className="navbar__item">Регистрация</Link></li>
                            <li><Link to='/login' className="navbar__item">Войти</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </header >
        </>

    )
}
export default Header;