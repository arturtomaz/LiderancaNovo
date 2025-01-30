import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const winkerButton = document.querySelectorAll(".winkerButton");
    const winkerArea = document.querySelector(".winker-area");

    // Adiciona o ouvinte de evento para a checkbox
    const handleCheckboxChange = () => {
      if (winkerArea.style.display != "none") {
        winkerArea.style.display = "none";
      } else {
        winkerArea.style.display = "flex";
      }
    };
    winkerButton.forEach((item) => {
      item.addEventListener("click", handleCheckboxChange);
    });

    // Cleanup do evento quando o componente for desmontado
    return () => {
      winkerButton.forEach((item) => {
        item.removeEventListener("click", handleCheckboxChange);
      });
    };
  }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez

  useEffect(() => {
    const checkbox = document.querySelector(".menu-faketrigger");
    const body = document.querySelector("body");

    // Adiciona o ouvinte de evento para a checkbox
    const handleCheckboxChange = () => {
      if (checkbox.checked) {
        body.style.overflowY = "hidden"; // Oculta a rolagem
      } else {
        body.style.overflowY = "auto"; // Restaura a rolagem
      }
    };

    checkbox.addEventListener("change", handleCheckboxChange);

    // Cleanup do evento quando o componente for desmontado
    return () => {
      checkbox.removeEventListener("change", handleCheckboxChange);
    };
  }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez

  useEffect(() => {
    const mobileNavItems = document.querySelectorAll(
      ".menu-mobile--items a li"
    );
    const winkerButton = document.querySelector('.winker-button')
    const body = document.querySelector("body");

    const handleCheckboxChange = () => {
      document.querySelector(".menu-faketrigger").checked = false;
      body.style.overflowY = "auto";
    };

    mobileNavItems.forEach((item) => {
      item.addEventListener("click", handleCheckboxChange);
    });
    winkerButton.addEventListener("click", handleCheckboxChange);

    return () => {
      mobileNavItems.forEach((item) => {
        item.removeEventListener("click", handleCheckboxChange);
      });
    };
  }, []);

  return (
    <div>
      <div
        className="w-full h-[100px] flex items-center mt-[10px] mb-[50px]"
        id="home"
      >
        {/* Container com margens fixas e largura máxima */}
        <div className="container">
          {/* logo */}
          <img
            src="/media/logo-header.png"
            alt="logo-lideranca"
            className="logo-header w-52 object-contain hover:opacity-80 duration-300 cursor-pointer"
          />

          {/* Menu Default */}
          <div className="menu-default--area flex">
            <ul className="flex space-x-4 items-center mr-28">
              <a href="#home">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">
                  INÍCIO
                </li>
              </a>
              <a href="#about-us">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">
                  EMPRESA
                </li>
              </a>
              <a href="#services">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">
                  SERVIÇOS
                </li>
              </a>
              <a href="#news">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">
                  NOTÍCIAS
                </li>
              </a>
              <a href="#contact">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">
                  CONTATO
                </li>
              </a>
            </ul>

            {/* redirect winker button */}
            <div className="winkerButton flex h-7 bg-[#f28b20] p-4 items-center hover:bg-[#364d77] hover:scale-x-[103%] duration-[250ms] origin-right cursor-pointer">
              <div className="text-white">
                CONDOMÍNIO ONLINE
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <input
        type="checkbox"
        className="menu-faketrigger absolute top-[50px] right-[60px] opacity-0 w-[160px] h-[130px] z-30 cursor-pointer"
      />
      <div className="menu-mobile--lines--area absolute top-[50px] right-[60px] cursor-pointer z-20">
        <span className="menu-mobile--lines mb-[30px] bg-[#364d77]"></span>
        <span className="menu-mobile--lines mb-[30px] bg-[#364d77]"></span>
        <span className="menu-mobile--lines mb-[30px] bg-[#364d77]"></span>
      </div>
      <ul
        className={`menu-mobile p-[100px] bg-[#029ad7] w-screen h-full absolute top-0 text-[50px] z-10 ${
          document.querySelector(".menu-faketrigger")?.checked
            ? "block"
            : "hidden"
        }`}
      >
        <div className="menu-mobile--items w-[85%]">
          <a href="#home">
            <li className="hover:bg-[#364d77] p-2 duration-200 text-white">
              INÍCIO
            </li>
          </a>
          <a href="#about-us">
            <li className="hover:bg-[#364d77] p-2 duration-200 text-white">
              EMPRESA
            </li>
          </a>
          <a href="#services">
            <li className="hover:bg-[#364d77] p-2 duration-200 text-white">
              SERVIÇOS
            </li>
          </a>
          <a href="#news">
            <li className="hover:bg-[#364d77] p-2 duration-200 text-white">
              NOTÍCIAS
            </li>
          </a>
          <a href="#contact">
            <li className="hover:bg-[#364d77] p-2 duration-200 text-white">
              CONTATO
            </li>
          </a>
          <div
            href=""
            className="winker-button winkerButton text-white bg-[#f28b20] p-[20px]"
          >
            CONDOMÍNIO ONLINE
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
