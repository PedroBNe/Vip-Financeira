import Image from "next/image";
import Button from "../../Button";
import Tito from "@/assets/tito.png";
import Arrow from "@/assets/Icon=Arrow-up-right.svg";
import Link from "next/link";
import Ellipse from "@/assets/Ellipse.png";
import pix1 from "@/assets/logo-pix.png";
import pix2 from "@/assets/logo-pix-1.png";
import pix3 from "@/assets/logo-pix-2.png";

function Banner() {
  return (
    <div className="flex flex-col relative md:flex-row justify-between items-center w-[80%] max-w-[1440px]">
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
      <div className="mt-10 md:mt-0 relative">
        <Image src={Tito} alt="Tito" width={560} className="z-[2] sticky" />
        <Image
          src={Ellipse}
          alt="Fundo"
          className="absolute left-0 top-0 z-[1] w-[100px ]"
        />
        <Image
          src={pix1}
          alt="pix1"
          className="absolute right-0 xl:right-8 top-0 w-[40%]"
        />
        <Image
          src={pix2}
          alt="pix2"
          className="absolute left-[-30px] xl:left-0 top-[100px] xl:top-40 z-[3] w-[40%] overflow-hidden"
        />
        <Image
          src={pix3}
          alt="pix3"
          className="absolute right-[-30px] xl:right-[-90px] bottom-0 xl:bottom-[-85px] z-[4] w-[50%] overflow-hidden"
        />
      </div>
      <Button
        text="Fale conosco"
        className="bg-black rounded-[100px] flex items-center fixed bottom-10 right-auto sm:right-10 w-fit border-solid border-white border-2 overflow-hidden z-50"
        textClassName="text-white font-semibold text-base"
        eclipse
      />
    </div>
  );
}

export default Banner;
