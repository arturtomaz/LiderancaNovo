import { useEffect } from "react";

function WinkerArea() {
  useEffect(() => {
    const transpBg = document.querySelector(".transparent-bg");
    const winkerArea = document.querySelector(".winker-area");
    const xButton = document.querySelector(".x-button");

    // Adiciona o ouvinte de evento para a checkbox
    const handleCheckboxChange = () => {
      if (winkerArea.style.display != "none") {
        winkerArea.style.display = "none";
      } else {
        winkerArea.style.display = "flex";
      }
    };
    transpBg.addEventListener("click", handleCheckboxChange);
    xButton.addEventListener("click", handleCheckboxChange);

    // Cleanup do evento quando o componente for desmontado
    return () => {
      transpBg.removeEventListener("click", handleCheckboxChange);
      xButton.removeEventListener("click", handleCheckboxChange);
    };
  }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez

  return (
    <div className="winker-area absolute w-[100vw] h-[100vh] hidden  z-30 justify-center items-center">
      {/* Background Escuro */}
      <div className="transparent-bg bg-[#000000] opacity-60 w-full h-full z-10"></div>

      {/* Winker Area */}
      <div className="bg-[url('/media/winker-redirect.jpg')] w-[100%] h-[100%] scale-[0.8] absolute z-20 ">
        <img className="x-button absolute top-[5px] right-[5px] w-[40px] h-[40px] cursor-pointer" src="/media/x-icon.png" alt="" />
        <div className="bg-blue-600">Clique aqui para entrar na página do Condomínio Online</div>
      </div>
    </div>
  );
}

export default WinkerArea;
