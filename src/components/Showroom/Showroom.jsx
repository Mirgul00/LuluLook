import './Showroom.css'
import ShowroomImg from '../../assets/images/unsplash_MGJACXj89tE.png'
import Girl2Image from '../../assets/images/girl2.png'
import Girl3Image from '../../assets/images/girl3.png'
function Showrooms () {
    return (
        <div className='showrooms'>
            <img className="showroomImage" src={ShowroomImg} alt="" />
            {/* <button href='#' class='button'>View the selection</button> */}
            <div className='girl2Image'>
                <img src={Girl2Image} alt="" />
                <p>You are Beautiful, <br />no matter what they say</p>
            </div>
            <dir className="girl3Image">
                <img src={Girl3Image} alt="" />
                <p>You are Beautiful, <br />no matter what they say</p>
            </dir>
        </div>

    )
}

export default Showrooms;