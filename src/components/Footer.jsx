function Footer() {
  return (
    <div className="bg-[#364d77] flex pt-[50px] justify-evenly pb-[30px]">
      {/* Logo e Redes Sociais */}
      <div className="w-[384px]">
        <a href="">
          <img
            className="w-[384px] mb-[30px] hover:opacity-80 duration-200"
            src="/media/logo-mail.png"
            alt=""
          />
        </a>
        <div className="mb-[20px]">
          <h1 className="text-[32px] text-[#f0f0f0] leading-[40px]">
            Redes Sociais
          </h1>
          <div className="bg-[#029ad7] w-[214px] h-[3px]"></div>
        </div>
        <p className="text-[21px] text-[#f0f0f0] mb-[25px]">
          Siga-nos nas redes sociais e fique por dentro das novidades.
        </p>
        <div className="flex">
          <a href="https://www.facebook.com/liderancacond/" target="_Blank">
            <img
              className="w-[50px] h-[50px] mr-[32px]"
              src="/media/facebook.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/liderancacond/" target="_Blank">
            <img
              className="w-[50px] h-[50px] mr-[32px]"
              src="/media/instagram.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/company/liderancacond/" target="_Blank">
            <img
              className="w-[50px] h-[50px] mr-[32px]"
              src="/media/linkedin.png"
              alt=""
            />
          </a>
        </div>
      </div>

      {/* Contato */}
      <div className="flex flex-col justify-center items-start h-[400px]">
        <div className="mb-[32px]">
          <h1 className="text-[32px] text-[#f0f0f0] leading-[40px]">Contato</h1>
          <div className="bg-[#029ad7] w-[125px] h-[3px]"></div>
        </div>
        <div className="text-[21px] text-[#f0f0f0]">
          <p className="mb-[40px]">
            Rua Wanderley Júnior, nº 05 - Sala 904 <br />
            Edifício Di Bernadi Tower <br />
            Campinas <br />
            São José - SC
          </p>
          <p>48 3241-4413 / 3035-4413</p>
        </div>
      </div>

      {/* Instagram */}
      <div>
        <div className="bg-[#F00] w-[355px] h-[480px]"></div>
      </div>
    </div>
  );
}

export default Footer;
