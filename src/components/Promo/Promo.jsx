import './promo.css'
import girlImage1 from '../../assets/images/girl1.png'
function Promo  ()  {
    return (<section className="promo">
        <div className="container">
            <div className="promo_text">
                <h1>LULU LOOK</h1>
            </div>
            <div className='promo_image'>
                <img src={girlImage1} alt="" />
            </div>
        </div>
        <div className="carousel_text">
            <h3>COLLECTION</h3>
            <p>Only high-quality products</p>
        </div>
    </section>);
}
 
export default Promo;