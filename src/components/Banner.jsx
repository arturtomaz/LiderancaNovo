function Banner() {
  return (
    <div className="h-[576px]">
      {/* Container */}
      <div className="container overflow-hidden">
        {/* Textos */}
        <div>
          <h1 className="company-subtitle text-[60px] leading-none text-[#364d77] font-extrabold text-wrap w-[720px]">
            Especialista em gestão de condomínios
          </h1>
          <h2 className="company-description text-[35px] mt-12 text-[#029ad7] font-extralight">
            A <b className="text-[#364d77] font-extrabold">Liderança</b> oferece
            profissionais <br /> qualificados para apoiar o corpo <br />
            diretivo do condomínio com <br /> serviços personalizados e <br />
            informações confiáveis para <br />
            <b className="text-[#364d77] font-extrabold">
              decisões estratégicas
            </b>
            .
          </h2>
        </div>
        {/* Área Foto Neusa */}
        <img
          src="/media/foto-neusa.png"
          alt=""
          className="fotoNeusa w-[600px] absolute top-[130px] right-[370px] z-0"
        />
      </div>
    </div>
  );
}

/* #029ad7 */

export default Banner;
