function AboutUs() {
  return (
    <div className="h-[770px] pb-[160px]" id="about-us">
      <div className="about-us--ctrl container flex-col">
        <h1 className="flex font-bold text-[64px] text-[#364d77] mb-[20px]">
          Quem somos?
        </h1>

        <div className="flex">
          <img
            className="w-[500px] object-contain"
            src="/media/SamirNeusa.jpg"
            alt=""
          />
          <div className="p-about flex flex-col text-[#364d77] text-[23px] ml-[30px]">
            <p className="mb-[10px]">
              Fundada em 2002, a Liderança Administradora de Condomínios é uma
              empresa reconhecida por sua metodologia eficiente e equipe
              especializada em Administração, Direito e Contabilidade.
            </p>
            <p>
              Oferecemos consultoria em tempo real e informações claras para
              otimizar a gestão condominial. Nossa missão é fornecer serviços
              personalizados com agilidade e ética, visando sempre a excelência.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
