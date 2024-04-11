import End from "./components/End";
import Header from "./components/Header";
import HoverPage from "./components/HoverPage/HoverPage";
import Look from "./components/Look/Look";
import Promo from "./components/Promo";
import Showroom from "./components/Showroom"

import Carousels from "./components/Carousel/Carousel";
function App() {
  return (
    <div className="App">
      Lulu Look 
      <Header />
      <Promo />
      <Carousels />
      <Showroom />
      <HoverPage />
      <Look />
      <End />
    </div>
  );
}

export default App;
