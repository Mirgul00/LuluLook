
import '../CatalogCard/CatalogCard.css';
import menuIcon from '../../assets/img.png';
import alima2 from '../../assets/Rectangle 44 (1).png';
import heart1 from '../../assets/icons/ph_heart-thin.png';
import elipse from '../../assets/icons/Ellipse 31.png'






function CatalogCard (){
    return (
        <div className='header '>
            <div className='1 '>
            <ul className='filter'>Filter</ul>
            <hr className='line11'/>
            <ul className='word22'>Category</ul>
            <ul className='word3'>    Women </ul>
            <ul className='word4'>    Men </ul>
            <ul className='word5'>    Sale </ul>
            <hr className='line222'/>
        </div>

        <div className='price'>
            <ul className='price1'>Price</ul>
            <ul className='word11'>from50$  to150$</ul>
            <hr className='line3' />
        </div>
        

        <div className='Material'>
               <ul classNamMaterial> Material</ul>
               <ul className='num1 '></ul>
           
        </div>
        
                <hr className='line4'/>
        <div className='Color'>
                <lu className='color'>Color</lu>
                <li className='color1'>Black </li>
                <li className='color2'>Green</li>
                <li className='color3'>Red</li>
                <li className='color4'>Blue</li>
                <lu className='word7'>See all</lu>
                
        </div>
            
                <hr className='line4' />
        <div className='Style'>
                <ul className='style'>Style</ul>
                <hr className='line5'/>
        </div>

        <div className='print'>
                <ul className='prinT'>Print</ul>
                <li className='coz1'>Geometry</li>
                <li className='coz2'>Animalistic</li>
                <li className='coz3'>Peas</li>
                <ul className='last'>See all</ul>
                <hr className='line6'/>
        </div>

        <div class='button1-container'>
               <a href='#' class='button1'>Apply</a>
        </div>
        {/* карточка........................................ */}

        <div className='alima'>
                <img src={menuIcon} alt="" />
        </div>

        <div class="vl"></div>


        <div className='alima2'>
             <img src={alima2} alt="" />
        </div>

        <div className='heart'>
            <img src={heart1} alt="" />
        </div>

        <div className='namedress'>
            <ul className='namedres'> Beaches <br /> dress</ul>
            <ul className='sum'> 300$</ul>
        </div>

        <div className='elips'>
             <img src={elipse} alt="" />
        </div>
        
            
        
        </div>

        
        
        
    )
}

export default CatalogCard;