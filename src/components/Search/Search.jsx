import'./Search.css'
import {FaSearch} from 'react-icons/fa';
function Search () {
    return (
        <div>
            <form className='Search__Form' action="">
                <input type="search" placeholder="Search here ..." /> 
                    <FaSearch className="fa fa-search" />
                 
            </form>
        </div>
    )
}
export default Search;