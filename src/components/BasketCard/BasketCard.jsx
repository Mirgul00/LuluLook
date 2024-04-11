import  '../BasketCard/BasketCard.css';
import photodress from '../../assets/img.png';
import dress1 from '../../assets/dress1.png';
import dress11 from '../../assets/dress11.png';
import dress3 from '../../assets/dress3.png';
import dress4 from '../../assets/dress4.png';




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
                   
            </div>
            <div className='wordsall'>
                <ul className='wordscombo'>S </ul>
                 <ul className='wordscombo1'>Black </ul>
                 <ul className='wordscombo2'>dr123456 </ul>
                 <ul className='wordscombo3'>1 </ul>
            </div>
               <div class='button-container'>
                <a href='#' class='button'>GO TO  CHECKOUT</a>
                

               </div>
               
                <hr className='line2'/>



                {/* /////////////////////////////////////////////////////////////////////// */}
            <div className='all1'>       
            <div className='photo'>
                <img src={dress1} alt="" />
            </div>
                <ul className='word1'> This is so good dress buy it you have to buy it  </ul>
                <ul className='word2'> 700$ </ul>
            <div>

                 <ul className='wordcombo'>Size </ul>
                 <ul className='wordcombo1'>Color </ul>
                 <ul className='wordcombo2'>Article </ul>
                 <ul className='wordcombo3'>Const </ul>
                   
            </div>
            <div className='wordsall'>
                <ul className='wordscombo'>S </ul>
                 <ul className='wordscombo1'>Black </ul>
                 <ul className='wordscombo2'>dr123456 </ul>
                 <ul className='wordscombo3'>1 </ul>
            </div>
            <div class='button-container'>
                <a href='#' class='button'>GO TO  CHECKOUT</a>
                

               </div>
        </div> 
        <hr className='line2'/>
        {/* ///////////////////////////////////////////////////////////////////////// */}
        <div className='all2'>       
            <div className='photo'>
                <img src={dress11} alt="" />
            </div>
                <ul className='word1'> This is so good dress buy it you have to buy it  </ul>
                <ul className='word2'> 700$ </ul>
            <div>

                 <ul className='wordcombo'>Size </ul>
                 <ul className='wordcombo1'>Color </ul>
                 <ul className='wordcombo2'>Article </ul>
                 <ul className='wordcombo3'>Const </ul>
                  
            </div>
            <div className='wordsall'>
                <ul className='wordscombo'>S </ul>
                 <ul className='wordscombo1'>Black </ul>
                 <ul className='wordscombo2'>dr123456 </ul>
                 <ul className='wordscombo3'>1 </ul>
            </div>
            <div class='button-container'>
                <a href='#' class='button'>GO TO  CHECKOUT</a>
                

               </div>
        </div> 
        <hr className='line2'/>
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='all3'>       
            <div className='photo'>
                <img src={dress3} alt="" />
            </div>
                <ul className='word1'> This is so good dress buy it you have to buy it  </ul>
                <ul className='word2'> 700$ </ul>
            <div>

                 <ul className='wordcombo'>Size </ul>
                 <ul className='wordcombo1'>Color </ul>
                 <ul className='wordcombo2'>Article </ul>
                 <ul className='wordcombo3'>Const </ul>
                   
            </div>
            <div className='wordsall'>
                <ul className='wordscombo'>S </ul>
                 <ul className='wordscombo1'>Black </ul>
                 <ul className='wordscombo2'>dr123456 </ul>
                 <ul className='wordscombo3'>1 </ul>
            </div>
               <div class='button-container'>
                <a href='#' class='button'>GO TO  CHECKOUT</a>
                

               </div>
        </div> 
        <hr className='line2'/>
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <div className='all4'>       
            <div className='photo'>
                <img src={dress4} alt="" />
            </div>
                <ul className='word1'> This is so good dress buy it you have to buy it  </ul>
                <ul className='word2'> 700$ </ul>
            <div>

                 <ul className='wordcombo'>Size </ul>
                 <ul className='wordcombo1'>Color </ul>
                 <ul className='wordcombo2'>Article </ul>
                 <ul className='wordcombo3'>Const </ul>
                   
            </div>
            <div className='wordsall'>
                <ul className='wordscombo'>S </ul>
                 <ul className='wordscombo1'>Black </ul>
                 <ul className='wordscombo2'>dr123456 </ul>
                 <ul className='wordscombo3'>1 </ul>
            </div>
               <div class='button-container'>
                <a href='#' class='button'>GO TO  CHECKOUT</a>
                

               </div>
        </div> 
        <hr className='line2'/>

        </div>

        
    )
}

export default BasketCard;