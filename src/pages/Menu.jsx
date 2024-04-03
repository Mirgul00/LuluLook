import '../pagesStyles/Menu.css'

function Menu () {
    return (
        <body>
            <header className='header'>
                <div className='comtainer header__container'>
                    <button className='header__burger-btn'>
                        <span></span><span></span><span></span>
                    </button>
                    <a href="#" className='logo'>
                        {/* <img className="ligi__img" src="/img/logo.svg" alt="logotip" /> */}
                    </a>
                    <div className='menu'>
                        <ul className='menu__list'>
                            <li className='menu__item'>
                                <a className="menu__link" href="#">j hfeifo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </body>
    )
}


export default Menu