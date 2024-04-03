import '../pagesStyles/ProductId.css'
import productPageImage from '../assets/icons/22222 1.png'
import basket from '../assets/icons/basket.png'

function ProductId () {
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
                        <li>XL</li>
                        <li>L</li>
                        <li>M</li>
                        <li>XS</li>
                    </div>

                    <button className='productPageButton'>
                        <p>Добавить в корзину</p>
                        <img src={basket} alt="" />
                    </button>

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