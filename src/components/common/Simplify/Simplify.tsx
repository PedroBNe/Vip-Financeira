import Image from "next/image";
import Button from "../Button";
import Row from "@/assets/Icon.png";
import Notas from "@/assets/notas.png";
import Link from "next/link";

function Simplify() {
  return (
    <div
      className="flex flex-col md:px-[10%] gap-10 md:gap-24 bg-[#F8F8F8] py-14"
      id="vantagens"
    >
      <div className="flex justify-between">
        <div className="w-[85%] md:w-[35%] m-auto md:m-0 flex flex-col justify-evenly gap-6 md:gap-0">
          <div>
            <h2 className="flex flex-col">
              Simplifique sua vida
              <span className="text-[#FCB813]">
                financeira hoje mesmo!
              </span>{" "}
            </h2>
          </div>
          <div>
            <p className="text-[#6A6A6A]">
              Você pode estar sem saldo na conta, mas não sem solução! O Pix
              Parcelado da VIP Financeira está disponível a qualquer hora do dia
              para que você realize pagamentos com comodidade e segurança.
            </p>
          </div>
          <Link href="https://vip.quitaboletos.com.br/app/simulacao/etapa/1">
            <div>
              <Button
                text="Simular agora"
                className="bg-[#FCB813]"
                textClassName="text-black font-semibold"
                icon
                imageIcon={Row}
              />
            </div>
          </Link>
        </div>
        <div className="hidden md:flex w-[50%] justify-end items-center relative">
          <div className="bg-black w-[480px] h-[320px] rounded-3xl">
            <Image
              src={Notas}
              alt="Notas"
              className="absolute right-0 bottom-0 min-h-[350px] rounded-3xl"
              width={525}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:py-5 md:px-8 bg-white rounded-[12px] flex justify-center items-center">
            <p className="font-bold text-sm">Descontos de pagamentos à vista</p>
          </div>
          <div className="py-5 px-8 bg-white rounded-[12px] flex justify-center items-center">
            <p className="font-bold text-sm">
              Parcele valores altos em até 12 vezes! *
            </p>
          </div>
          <div className="py-5 px-8 bg-white rounded-[12px] flex justify-center items-center">
            <p className="font-bold text-sm">
              Rápido, seguro e sem burocracias
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-[#6A6A6A] text-[12px]">
            *Confira as taxas de juros antes de finalizar o pagamento.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Simplify;
