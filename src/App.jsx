import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SquaresArea from "./components/SquaresArea";
import AboutUs from "./components/AboutUs";
import "@fontsource/inter";

function App() {
  return (
    <div className="w-full bg-red-500 h-[66rem] bg-[url('/media/fundo-antigo.jpg')]">
      <Navbar />
      <Banner />
      <SquaresArea />
      <AboutUs />
    </div>
  );
}

export default App;
