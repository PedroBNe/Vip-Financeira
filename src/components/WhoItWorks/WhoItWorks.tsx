import Image from "next/image";
import Phone from "@/assets/img-pix.png";
import Dados from "@/assets/Dados.png";
import Simule from "@/assets/Simule.png";
import Identidade from "@/assets/Identidade.png";
import Envio from "@/assets/Envio.png";
import Button from "../common/Button";
import Whatsap from "@/assets/Vector.png";

function WhoItWorks() {
  return (
    <div className="flex justify-between">
      <div className="flex justify-center w-[50%]">
        <Image src={Phone} alt="Telefone" width={350} />
      </div>
      <div className="w-[50%]">
        <ul className="h-full flex flex-col justify-between">
          <div className="flex justify-between">
            <h2>
              Como <span className="text-[#FCB813]">funciona?</span>
            </h2>
            <Button
              text="Fale conosco"
              className="bg-black rounded-[100px] flex items-center"
              textClassName="text-white font-semibold text-[12px]"
              eclipse
            />
          </div>
          <li className="flex gap-2">
            <div className="w-[10%] flex justify-center items-center">
              <Image src={Dados} alt="Dados" width={54} />
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <p className="font-semibold">Insira seus dados</p>
              <p className="text-[#6A6A6A]">
                Preencha suas informações básicas e dados de pagamento para
                iniciar o processo.
              </p>
            </div>
          </li>
          <li className="flex gap-2">
            <div className="w-[10%] flex justify-center items-center">
              <Image src={Simule} alt="Simule" width={54} />
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <p className="font-semibold">Insira seus dados</p>
              <p className="text-[#6A6A6A]">
                Preencha suas informações básicas e dados de pagamento para
                iniciar o processo.
              </p>
            </div>
          </li>
          <li className="flex gap-2">
            <div className="w-[10%] flex justify-center items-center">
              <Image src={Identidade} alt="Identidade" width={54} />
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
              <p className="font-semibold">Insira seus dados</p>
              <p className="text-[#6A6A6A]">
                Preencha suas informações básicas e dados de pagamento para
                iniciar o processo.
              </p>
            </div>
          </li>
          <li className="flex gap-2">
            <div className="w-[10%] flex justify-center items-center">
              <Image src={Envio} alt="Envio" width={54} />
            </div>
            <div className="flex flex-col gap-2 w-[50%]">
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
