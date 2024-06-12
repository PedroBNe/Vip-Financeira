import Image from "next/image";
import Button from "../../Button";
import Tito from "@/assets/tito.png";
import Arrow from "@/assets/Icon=Arrow-up-right.svg";
import Link from "next/link";

function Banner() {
  return (
    <div className="flex flex-col relative md:flex-row justify-between items-center w-[80%]">
      <div className="flex flex-col gap-8 md:w-[40%]">
        <div>
          <h1 className="flex flex-col mt-28 md:mt-0 md:text-2xl xl:text-5xl">
            PIX Parcelado Vip:{" "}
            <span className="text-[#FCB813]">
              simples, rápido e conveniente!
            </span>
          </h1>
        </div>
        <div>
          <p className="leading-loose">
            Envie pix ou pague boletos mesmo sem ter saldo em conta. Use
            qualquer cartão de crédito e parcele seus pagamentos em até 12x.
          </p>
        </div>
        <Link href="https://vip.quitaboletos.com.br/app/simulacao/etapa/1">
          <Button
            text="Simular agora"
            className="bg-[#FCB813]"
            textClassName="text-black font-semibold"
            icon
            imageIcon={Arrow}
          />
        </Link>
      </div>
      <div className="mt-10 md:mt-0">
        <Image src={Tito} alt="Tito" width={560} />
      </div>
      <Button
        text="Fale conosco"
        className="bg-black rounded-[100px] flex items-center absolute bottom-20 md:bottom-[-60px] md:right-28 w-fit border-solid border-white border-2"
        textClassName="text-white font-semibold text-[12px]"
        eclipse
      />
    </div>
  );
}

export default Banner;
