import { useEffect } from "react";

// PARA COLOCAR A IMAGEM WINKER VERSÃO MOBILE
// USAR AS TAGS PICTURE E SOURCE
// <picture>
//   <source media="(min-width: px)"></source>
//   <source></source>
//   <img src="" alt="" />
// </picture>

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
    <div className="winker-area fixed top-0 left-0 w-screen h-screen hidden z-40 justify-center items-center">
      {/* Background Escuro */}
      <div className="transparent-bg bg-[#000000] opacity-60 w-full h-full z-10"></div>

      {/* Winker Area */}
      <div className="winker-image absolute z-20 w-[1200px] h-auto">
        <picture className="">
          <source
            media="(max-width: 500px)"
            srcSet="/media/winker-redirect-mobile.svg"
          ></source>
          <img className="rounded-[20px]" src="/media/winker-redirect.png" alt="" />
          <div>
            <img
              className="x-button absolute top-[10px] right-[10px] w-[30px] h-[30px] invert cursor-pointer"
              src="/media/x-icon.png"
              alt=""
            />
          </div>
          <div className="botoes-winker flex absolute right-[30px] bottom-[30px]">
            <a
              href="https://www.winker.com.br/sobre/"
              target="_blank"
              className="saiba-mais bg-[#029ad7] shadow-md px-[20px] py-[10px] mr-[30px] text-[20px] text-[#ffffff] text-center rounded-full"
            >
              Saiba mais
            </a>
            <a
              href="https://app.winker.com.br/intra/default/login"
              target="_blank"
              className="acesse-plataforma shadow-md bg-[#f28b20] px-[20px] py-[10px] text-[20px] text-[#ffffff] text-center rounded-full"
            >
              Acesse a plataforma
            </a>
          </div>
        </picture>
      </div>
    </div>
  );
}

export default WinkerArea;
