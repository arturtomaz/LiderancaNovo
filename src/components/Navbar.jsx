function Navbar() {
  return (
    <div className="w-full h-40 flex items-center">
      {/* Container com margens fixas e largura máxima */}
      <div className="mx-auto w-full max-w-screen-xl px-[96px] flex justify-between items-center">
        {/* logo */}
        <img
          src="/media/logo-header.png"
          alt="logo-lideranca"
          className="w-52 object-contain hover:opacity-80 duration-300 cursor-pointer"
        />

        {/* nav menu */}
        <ul className="flex space-x-4 items-center mr-28">
          <li className="hover:bg-[#029ad7] p-2 duration-200 cursor-pointer hover:text-white">
            INÍCIO
          </li>
          <li className="hover:bg-[#029ad7] p-2 duration-200 cursor-pointer hover:text-white">
            EMPRESA
          </li>
          <li className="hover:bg-[#029ad7] p-2 duration-200 cursor-pointer hover:text-white">
            SERVIÇOS
          </li>
          <li className="hover:bg-[#029ad7] p-2 duration-200 cursor-pointer hover:text-white">
            NOTÍCIAS
          </li>
          <li className="hover:bg-[#029ad7] p-2 duration-200 cursor-pointer hover:text-white">
            CONTATO
          </li>
        </ul>

        {/* redirect winker button */}
        <div className=" flex h-7 bg-[#f28b20] p-4 items-center hover:bg-[#364d77] hover:scale-x-[103%] duration-[250ms] origin-right cursor-pointer">
          <a href="" className="text-white">
            CONDOMÍNIO ONLINE
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
