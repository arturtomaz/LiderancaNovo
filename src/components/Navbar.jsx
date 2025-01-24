import { useEffect } from 'react';

function Navbar() {
  useEffect(() => {
    const checkbox = document.querySelector('.menu-faketrigger');
    const body = document.querySelector('body');

    // Adiciona o ouvinte de evento para a checkbox
    const handleCheckboxChange = () => {
      if (checkbox.checked) {
        body.style.overflowY = 'hidden'; // Oculta a rolagem
      } else {
        body.style.overflowY = 'auto'; // Restaura a rolagem
      }
    };

    checkbox.addEventListener('change', handleCheckboxChange);

    // Cleanup do evento quando o componente for desmontado
    return () => {
      checkbox.removeEventListener('change', handleCheckboxChange);
    };
  }, []); // O array vazio [] garante que o efeito seja executado apenas uma vez

  useEffect(() => {
    const mobileNavItems = document.querySelectorAll('.menu-mobile--items a li');
    const body = document.querySelector('body');
  
    // Adiciona o ouvinte de evento para a checkbox
    const handleCheckboxChange = () => {
      document.querySelector('.menu-faketrigger').checked = false;
      body.style.overflowY = 'auto';
    };
  
    // Itera sobre todos os itens e adiciona o evento de clique
    mobileNavItems.forEach(item => {
      item.addEventListener('click', handleCheckboxChange);
    });
  
    // Cleanup do evento quando o componente for desmontado
    return () => {
      mobileNavItems.forEach(item => {
        item.removeEventListener('click', handleCheckboxChange);
      });
    };
  }, []);

  return (
    <div>
      <div className="w-full h-40 flex items-center mt-[20px] mb-[50px]" id="home">
        {/* Container com margens fixas e largura máxima */}
        <div className="mx-auto w-full max-w-screen-xl px-[96px] flex justify-between items-center">
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
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">INÍCIO</li>
              </a>
              <a href="#about-us">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">EMPRESA</li>
              </a>
              <a href="#services">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">SERVIÇOS</li>
              </a>
              <a href="#news">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">NOTÍCIAS</li>
              </a>
              <a href="#contact">
                <li className="hover:bg-[#029ad7] p-2 duration-200 hover:text-white">CONTATO</li>
              </a>
            </ul>

            {/* redirect winker button */}
            <div className="flex h-7 bg-[#f28b20] p-4 items-center hover:bg-[#364d77] hover:scale-x-[103%] duration-[250ms] origin-right cursor-pointer">
              <a href="" className="text-white">CONDOMÍNIO ONLINE</a>
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
        <span className="menu-mobile--lines mb-[30px]"></span>
        <span className="menu-mobile--lines mb-[30px]"></span>
        <span className="menu-mobile--lines"></span>
      </div>
      <ul
        className={`menu-mobile p-[100px] bg-[#364d77] w-screen h-full scrool absolute top-0 text-[50px] z-10 ${
          document.querySelector('.menu-faketrigger')?.checked ? 'block' : 'hidden'
        }`}
      >
        <div className="menu-mobile--items w-[80%]">
          <a href="#home">
            <li className="hover:bg-[#029ad7] p-2 duration-200 text-white">INÍCIO</li>
          </a>
          <a href="#about-us">
            <li className="hover:bg-[#029ad7] p-2 duration-200 text-white">EMPRESA</li>
          </a>
          <a href="#services">
            <li className="hover:bg-[#029ad7] p-2 duration-200 text-white">SERVIÇOS</li>
          </a>
          <a href="#news">
            <li className="hover:bg-[#029ad7] p-2 duration-200 text-white">NOTÍCIAS</li>
          </a>
          <a href="#contact">
            <li className="hover:bg-[#029ad7] p-2 duration-200 text-white mb-[120px]">CONTATO</li>
          </a>
          <a href="" className="text-white bg-[#f28b20] p-[20px]">CONDOMÍNIO ONLINE</a>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
