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
  window.addEventListener("scroll", checkBoxes);
  
  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;
    const allBoxes = [...document.querySelectorAll(".transform-out"), ...document.querySelectorAll(".service-area")];
  
    allBoxes.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top;
  
      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
  
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
