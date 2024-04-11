import './HoverPage.css';
import Image1Hover from '../../assets/images/Anim.Girl1.jpeg'
import Image2Hover from '../../assets/images/Anim.Girl2.png'
import Image3Hover from '../../assets/images/Anim.Girl3.jpeg'
import Image4Hover from '../../assets/images/Anim.girl4.jpg.webp'
import Image5Hover from '../../assets/images/Anim.Girl5.jpg'
import Image6Hover from '../../assets/images/Anim.Girl6.jpg'
function HoverPage () {
    return (
        <div className='hover' >
           <div className='box1'>
                <img src={Image1Hover} alt="" />
                <img className='top-img' src={Image6Hover} alt="" />
           </div>
           <div className='box2'>
                <img src={Image3Hover} alt="" />
                <img className='top-img2' src={Image4Hover} alt="" />
           </div>

           <div className='box3'>
            <img src={Image5Hover} alt="" />
            <img className='top-img3' src={Image2Hover} alt="" />
           </div>

        </div>
    )
}
export default HoverPage;