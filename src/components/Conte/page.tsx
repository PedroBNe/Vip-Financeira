import Image from "next/image";
import Tito from "@/assets/img-tito.png";

function Conte() {
  return (
    <div
      className="px-[5%] md:px-[10%] relative flex justify-center items-center pt-8 w-full"
      id="sobre"
    >
      <div className="h-[480px] md:h-[670px] xl:h-[370px] flex flex-col xl:flex-row xl:justify-end items-center bg-[#FCB813] relative z-10 rounded-[24px] max-w-[1440px]">
        <Image
          src={Tito}
          alt="Tito"
          height={430}
          className="absolute md:left-16 bottom-0 w-[200px] md:w-[375px] order-2 xl:order-1"
        />
        <div className="w-[90%] xl:w-[45%] bg-white p-8 xl:h-[60%] m-[5%] md:m-[10%] rounded-[16px] flex flex-col justify-center md:px-12 gap-4 order-1 xl:order-2">
          <h2 className="font-bold flex text-[22px] md:text-2xl justify-center md:justify-start gap-2">
            Conte com <span className="text-[#FCB813]">a VIP</span>
          </h2>
          <p className="text-[#6A6A6A] text-[14px] flex justify-center md:justify-start items-center md:items-start text-center md:text-start">
            A VIP Financeira é uma referência no setor de crédito, com 15 anos
            de experiência e uma equipe de consultores financeiros
            especializados, garantimos credibilidade, segurança, qualidade e
            excelência em todo o processo. 
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-[50%] md:bg-[#F8F8F8] w-full"></div>
    </div>
  );
}

export default Conte;
