function SquaresArea() {
    return(
        <div className="quadrados-background top-[240px] relative bg-[#364d77] w-full h-[260px] mb-[370px] z-0">
            {/* Área dos Quadrados */}
            <div className="area-quadrados mx-auto w-full max-w-screen-xl px-[96px] flex flex-row justify-between items-center">
                {/* Quadrado em si */}
                <div className="quadrado drop-shadow-lg  bg-[#f0f0f0] w-[288px] h-[286px] relative top-[60px] flex flex-col items-center">
                    <img className="w-[100px] h-[95px] mt-[10px]" src="/media/icone-grafico.png" alt="" />
                    {/* Textos */}
                    <div className="h-[110px] flex flex-col justify-arount">
                        <h1 className="font-bold text-[24px] text-center mt-[16px] text-[#364d77] leading-[27px] mb-[15px]">Gestão Administrativa<br/>e contábil</h1>
                        <p className="font-extralight text-[#444444] text-[20px] text-center leading-[27px]">Controle e organização do condomínio.</p>    
                    </div>    
                </div>
                <div className="quadrado drop-shadow-lg  bg-[#f0f0f0] w-[288px] h-[286px] relative top-[60px] flex flex-col items-center">
                    <img className="w-[100px] h-[95px] mt-[10px]" src="/media/icone-carteira.png" alt="" />
                    <div className="h-[110px] flex flex-col justify-arount">
                        <h1 className="font-bold text-[24px] text-center mt-[16px] text-[#364d77] leading-[27px] mb-[15px]">Gestão Financeira</h1>
                        <p className="font-extralight text-[#444444] text-[20px] text-center leading-[27px]">Planejamento e otimização das finanças.</p>
                    </div>
                </div>
                <div className="quadrado drop-shadow-lg  bg-[#f0f0f0] w-[288px] h-[286px] relative top-[60px] flex flex-col items-center">
                    <img className="w-[100px] h-[95px] mt-[10px]" src="/media/icone-gestao-online.png" alt="" /> 
                    <div className="h-[110px] flex flex-col justify-around">
                        <h1 className="font-bold text-[24px] text-center mt-[16px] text-[#364d77] leading-[27px] mb-[15px]">Gestão Condominial Online</h1>
                        <p className="font-extralight text-[#444444] text-[20px] text-center leading-[27px]">Administração digital com transparência aprimorada.</p>
                    </div>
                </div>
            </div>
            

        </div>
    )

};



export default SquaresArea;