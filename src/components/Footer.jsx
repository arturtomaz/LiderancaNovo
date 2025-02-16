function Footer() {
  return (
    <div className="bg-[#364d77] w-full h-auto min-h-fit flex flex-wrap justify-evenly px-8 pt-[30px] pb-[40px] footer overflow-hidden">
      {/* Logo e Redes Sociais */}
      <div className="logo-footer--area flex justify-start md:justify-center transform-out t-left">
        <div className="">
          <a href="">
            <img
              className="logo-footer w-[384px] mb-[30px] hover:opacity-80 duration-200"
              src="/media/logo-mail.png"
              alt=""
            />
          </a>
          <div className="mb-[20px]">
            <h1 className="text-[32px] text-[#f0f0f0] leading-[40px]">
              Redes Sociais
            </h1>
            <div className="risco-azul1 bg-[#029ad7] w-[214px] h-[3px]"></div>
          </div>
          <p className="text-[21px] text-[#f0f0f0] mb-[25px]">
            Siga-nos nas redes sociais e fique por dentro das novidades.
          </p>
          <div className="flex">
            <a href="https://www.facebook.com/liderancacond/" target="_Blank">
              <img
                className="social-icons w-[50px] h-[50px] mr-[32px]"
                src="/media/facebook.png"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/liderancacond/" target="_Blank">
              <img
                className="social-icons w-[50px] h-[50px] mr-[32px]"
                src="/media/instagram.png"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/company/liderancacond/"
              target="_Blank"
            >
              <img
                className="social-icons w-[50px] h-[50px] mr-[32px]"
                src="/media/linkedin.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      {/* Contato */}
      <div
        className="flex flex-col justify-start items-start transform-out t-right"
        id="contact"
      >
        <div>
          <div className="mb-[32px]">
            <h1 className="text-[32px] text-[#f0f0f0] leading-[40px]">
              Contato
            </h1>
            <div className="risco-azul2 bg-[#029ad7] w-[125px] h-[3px]"></div>
          </div>
          <div className="text-[21px] text-[#f0f0f0]">
            <p className="mb-[40px]">
              Rua Wanderley Júnior, nº 05 - Sala 904 <br />
              Edifício Di Bernadi Tower <br />
              Campinas <br />
              São José - SC
            </p>
            <p>
              48{" "}
              <a href="tel:3241-4413" className="underline">
                3241-4413
              </a>{" "}
              /{" "}
              <a href="tel:3035-4413" className="underline">
                3035-4413
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
