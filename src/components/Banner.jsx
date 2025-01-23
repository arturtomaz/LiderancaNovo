function Banner() {
  return (
    <div className="h-[576px]">
      {/* Container */}
      <div className="mx-auto w-full max-w-screen-xl px-[96px] flex justify-between items-center">
        {/* Textos */}
        <div>
          <h1 className="text-6xl text-[#364d77] font-extrabold">
            Especialista em gestão
            <br />
            de condomínios
          </h1>
          <h2 className="text-[35px] mt-12 text-[#029ad7] font-extralight">
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
        <div>
          <img
            src="/media/foto-neusa.png"
            alt=""
            className="fotoNeusa w-[600px] absolute top-[130px] right-[370px]"
          />
        </div>
      </div>
    </div>
  );
}

/* #029ad7 */

export default Banner;
