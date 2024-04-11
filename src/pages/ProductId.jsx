import '../pagesStyles/ProductId.css'
import productPageImage from '../assets/icons/22222 1.png'
import basket from '../assets/icons/basket.png'
import React from 'react'

function ProductId () {
    const [ active, setActive ] = React.useState(1)

    return (
        <section className="productPage">
            <div className='productPageImage'>
                <img src={productPageImage} alt="" srcset="" />
            </div>
            <div className='productPageDescription'>
                <h2>Приталенное платье макси на бретелях с асимметричной сборкой</h2>
            
                <div className='productPageNum'>
                    <h6>DR05328</h6>
                </div>
                <div className='productPagePrice'>
                    <h4>200$</h4>
                </div>
                <div className='productPageColor'>
                    <h3>Cерый</h3>
                    <div className="circle"></div>
                </div>
 
                    <div className='productPageSize'>
                        <h1>Размеры</h1>
                    </div>
                    <div className='size2'>
                        <li 
                            className={active == 1 ? 'active' : null}
                            onClick={() => setActive(1)}
                        >
                            XL
                        </li>
                        <li 
                            className={active == 2 ? 'active' : null}
                            onClick={() => setActive(2)}
                        >
                            L
                        </li>
                        <li 
                            className={active == 3 ? 'active' : null}
                            onClick={() => setActive(3)}
                        >
                            M
                        </li>
                        <li 
                            className={active == 4 ? 'active' : null}
                            onClick={() => setActive(4)}
                        >
                            XS
                        </li>
                    </div>

                    <div className='productButton'>
                        <button>
                            <p>Добавить в корзину</p>
                        </button>
                    </div>
                    {/* <div class='productPageButto'>
                        <a href='#' class='button'>
                            <p>Добавить в корзину</p>
                        <img src={basket} alt="" />
                        </a> */}
                    {/* </div> */}
            </div>
        </section>
        
    )
}

export default ProductId;