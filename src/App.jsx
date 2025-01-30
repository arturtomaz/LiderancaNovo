import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import SquaresArea from "./components/SquaresArea";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Credits from "./components/Credits";
import WinkerArea from "./components/WinkerArea";
import "@fontsource/inter";

function App() {
  return (
    <div className="w-full flex flex-col h-[66rem] bg-[url('/media/fundo-antigo.jpg')] font-inter background-banner z-0">
      <WinkerArea />
      <Navbar />
      <Banner />
      <SquaresArea />
      <AboutUs />
      <Services />
      <Footer />
      <Credits />
    </div>
  );
}

export default App;
