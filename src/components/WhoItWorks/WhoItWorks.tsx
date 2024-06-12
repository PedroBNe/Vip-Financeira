import Image from "next/image";
import Phone from "@/assets/img-pix.png";
import Dados from "@/assets/Dados.png";
import Simule from "@/assets/Simule.png";
import Identidade from "@/assets/Identidade.png";
import Envio from "@/assets/Envio.png";

function WhoItWorks() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between w-[75%] pb-12"
      id="comofunciona"
    >
      <div className="flex justify-center md:w-[50%] order-3 md:order-1">
        <Image src={Phone} alt="Telefone" width={400} className="max-w-[80%]" />
      </div>
      <div className="md:w-[50%] order-2">
        <ul className="h-full flex flex-col justify-between gap-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h2>
              Como <span className="text-[#FCB813]">funciona?</span>
            </h2>
          </div>
          <li className="flex gap-4 border border-solid border-[#E5E7EB] p-4 rounded-[12px]">
            <div className="w-[40%] md:w-[20%] flex justify-center items-center">
              <Image src={Dados} alt="Dados" width={54} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Insira seus dados</p>
              <p className="text-[#6A6A6A]">
                Preencha suas informações básicas e dados de pagamento para
                iniciar o processo.
              </p>
            </div>
          </li>
          <li className="flex gap-4 border border-solid border-[#E5E7EB] p-4 rounded-[12px]">
            <div className="w-[40%] md:w-[20%] flex justify-center items-center">
              <Image src={Simule} alt="Simule" width={54} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Insira seus dados</p>
              <p className="text-[#6A6A6A]">
                Preencha suas informações básicas e dados de pagamento para
                iniciar o processo.
              </p>
            </div>
          </li>
          <li className="flex gap-4 border border-solid border-[#E5E7EB] p-4 rounded-[12px]">
            <div className="w-[40%] md:w-[20%] flex justify-center items-center">
              <Image src={Identidade} alt="Identidade" width={54} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Insira seus dados</p>
              <p className="text-[#6A6A6A]">
                Preencha suas informações básicas e dados de pagamento para
                iniciar o processo.
              </p>
            </div>
          </li>
          <li className="flex gap-4 border border-solid border-[#E5E7EB] p-4 rounded-[12px]">
            <div className="w-[40%] md:w-[20%] flex justify-center items-center">
              <Image src={Envio} alt="Envio" width={54} />
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Insira seus dados</p>
              <p className="text-[#6A6A6A]">
                Preencha suas informações básicas e dados de pagamento para
                iniciar o processo.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WhoItWorks;
