function Services() {
  return (
    <div className="bg-[#EEEEEE] h-[770px] pb-[70px] pt-[20px]" id="services">
      <div className="mx-auto w-full max-w-screen-xl px-[96px] flex flex-col justify-center items-center">
        <h1 className="title-services text-[#364d77] text-[64px] font-bold mb-[15px]">
          Serviços:
        </h1>
        {/* Quadrados de cima */}
        <div className="services-upper w-full flex justify-around mb-[40px]">
          {/* Área um quadrado */}
          <div className="service-area bg-[#EEEEEE] drop-shadow-lg w-[288px] h-[218px] flex justify-center group cursor-pointer relative overflow-hidden">
            {/* Div de cima */}
            <div className="enlarge-square flex flex-col justify-center items-center absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <img
                className="mb-[10px] w-[100px]"
                src="/media/icone-adm.png"
                alt=""
              />
              <h1 className="font-semibold text-[#029ad7] text-[30px] text-center leading-[35px]">
                ADMINISTRAÇÃO
              </h1>
            </div>
            {/* Div de baixo */}
            <div className="enlarge-square bg-[#364d77] p-[10px] text-white flex flex-col justify-center items-center text-center absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-[20px]">
                Desde a organização inicial até a contratação de serviços,
                elaboração de documentos e participação em assembleias.
              </p>
            </div>
          </div>
          <div className="service-area bg-[#EEEEEE] drop-shadow-lg w-[288px] h-[218px] flex justify-center group cursor-pointer relative overflow-hidden">
            {/* Div de cima */}
            <div className="enlarge-square flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <img
                className="mb-[10px] w-[120px]"
                src="/media/icone-financeiro.png"
                alt=""
              />
              <h1 className="font-semibold text-[#029ad7] text-[30px] text-center leading-[35px]">
                FINANCEIRO
              </h1>
            </div>
            {/* Div de baixo */}
            <div className="enlarge-square bg-[#364d77] p-[10px] text-white flex flex-col justify-center items-center text-center absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-[20px]">
                Planejamos e controlamos as finanças, incluindo a previsão
                orçamentária, pagamento de contas e controle da inadimplência.
              </p>
            </div>
          </div>
          <div className="service-area bg-[#EEEEEE] drop-shadow-lg w-[288px] h-[218px] flex justify-center group cursor-pointer relative overflow-hidden">
            {/* Div de cima */}
            <div className="enlarge-square flex flex-col justify-center items-center absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <img
                className="mb-[10px] w-[100px]"
                src="/media/icone-recursos-humanos.png"
                alt=""
              />
              <h1 className="font-semibold text-[#029ad7] text-[30px] text-center leading-[35px]">
                RECURSOS HUMANOS
              </h1>
            </div>
            {/* Div de baixo */}
            <div className="enlarge-square bg-[#364d77] p-[10px] text-white flex flex-col justify-center items-center text-center absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-[20px]">
                Auxiliamos na contratação, gerenciamos a folha de pagamento e
                asseguramos a conformidade com as normas trabalhistas.
              </p>
            </div>
          </div>
        </div>

        {/* Quadrados de baixo */}
        <div className="services-lower w-full flex justify-evenly">
          <div className="service-area bg-[#EEEEEE] drop-shadow-lg w-[288px] h-[218px] flex justify-center group cursor-pointer relative overflow-hidden">
            {/* Div de cima */}
            <div className="enlarge-square flex flex-col justify-center items-center absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <img
                className="mb-[10px] w-[100px]"
                src="/media/icone-profissional.png"
                alt=""
              />
              <h1 className="font-semibold text-[#029ad7] text-[30px] text-center leading-[35px]">
                SÍNDICO PROFISSIONAL
              </h1>
            </div>
            {/* Div de baixo */}
            <div className="enlarge-square bg-[#364d77] p-[10px] text-white flex flex-col justify-center items-center text-center absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-[20px]">
                Oferecemos síndico especializado, garantindo gestão profissional
                e imparcial do condomínio.
              </p>
            </div>
          </div>
          <div className="service-area bg-[#EEEEEE] drop-shadow-lg w-[288px] h-[218px] flex justify-center group cursor-pointer relative overflow-hidden">
            {/* Div de cima */}
            <div className="enlarge-square flex flex-col justify-center items-center absolute inset-0 transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <img
                className="w-[120px] mb-[10px]"
                src="/media/icone-online.png"
                alt=""
              />
              <h1 className="font-semibold text-[#029ad7] text-[30px] text-center leading-[35px]">
                CONDOMÍNIO ONLINE
              </h1>
            </div>
            {/* Div de baixo */}
            <div className="enlarge-square bg-[#364d77] p-[10px] text-white flex flex-col justify-center items-center text-center absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-[20px]">
                Ferramenta digital que permite o acesso prático a documentos e
                informações do seu condomínio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
