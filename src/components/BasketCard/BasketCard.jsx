import  '../BasketCard/BasketCard.css';
import photodress from '../../assets/img.png';

function BasketCard () {
    return (
            <div className='BasketCart'>
                <h1 className='namebasket'>My basket Cart</h1>
                <hr className='line'/>
            <div className='photo'>
                <img src={photodress} alt="" />
            </div>
                <ul className='word1'> This is so good dress buy it you have to buy it  </ul>
                <ul className='word2'> 700$ </ul>
            <div>

                 <ul className='wordcombo'>Size </ul>
                 <ul className='wordcombo1'>Color </ul>
                 <ul className='wordcombo2'>Article </ul>
                 <ul className='wordcombo3'>Const </ul>
                   {/* <li> Size  Color <br /> Article <br /> Const</li> */}
            </div>
            <div className='wordsall'>
                <ul className='wordscombo'>S </ul>
                 <ul className='wordscombo1'>Black </ul>
                 <ul className='wordscombo2'>dr123456 </ul>
                 <ul className='wordscombo3'>1 </ul>
            </div>
            <div class='button-container1'>
                <a href='#' class='button'>Go to checkout</a>
            </div>
                <hr className='line2'/>


        </div>

        
    )
}

export default BasketCard;