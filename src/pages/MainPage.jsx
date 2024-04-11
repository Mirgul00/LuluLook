import End from "../components/End/End.jsx";
import Header from "../components/Header/Header.jsx";
import "../components/Header/Header.jsx";
import HoverPage from "../components/HoverPage/HoverPage.jsx";
import Look from "../components/Look/Look.jsx";
import Promo from "../components/Promo/Promo.jsx";
import Carousels from "../components/Carousel/Carousel.jsx"
import Showroom from "../components/Showroom/Showroom.jsx"
import Menu from '../components/Menu/Menu.jsx'
import Search from "../components/Search/Search.jsx";



function MainPage () {

    return (
        <>
            <Header />
            <Promo />
            <Carousels />
            <Showroom />
            <HoverPage />
            <Look />
            <End />
            <Menu />
            <Search />
        </>
    )
}
export default MainPage;