import { useEffect } from "react";

function WinkerArea() {
  useEffect(() => {
    const transpBg = document.querySelector(".transparent-bg");
    const winkerArea = document.querySelector(".winker-area");
    const xButton = document.querySelector(".x-button");
    const body = document.querySelector("body");

    // Adiciona o ouvinte de evento para a checkbox
    const handleCheckboxChange = () => {
      winkerArea.style.display = "none";
      body.style.overflowY = "auto";
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
      <div className="winker-image absolute z-20 w-[1200px] h-auto">
        <img className="" src="/media/winker-redirect.png" alt="" />
        <img
          className="x-button absolute top-[8px] right-[8px] w-[30px] h-[30px] invert cursor-pointer"
          src="/media/x-icon.png"
          alt=""
        />
        <div className=" flex absolute right-[30px] bottom-[30px]">
          <a
            href="https://www.winker.com.br/sobre/" target="_blank"
            className="bg-[#029ad7] px-[20px] py-[10px] mr-[30px] text-[20px] text-[#ffffff] text-center rounded-full"
          >
            Saiba mais
          </a>
          <a
            href="https://app.winker.com.br/intra/default/login"
            target="_blank"
            className="bg-[#f28b20] px-[20px] py-[10px] text-[20px] text-[#ffffff] text-center rounded-full"
          >
            Acesse a plataforma
          </a>
        </div>
      </div>
    </div>
  );
}

export default WinkerArea;
