import Image from "next/image";
import Button from "../../Button";
import Tito from "@/assets/tito.png";
import Arrow from "@/assets/Icon=Arrow-up-right.svg";

function Banner() {
  return (
    <div className="flex justify-between items-center w-[80%]">
      <div className="flex flex-col gap-8 w-[40%]">
        <div>
          <h1 className="flex flex-col">
            PIX Parcelado Vip:{" "}
            <span className="text-[#FCB813]">
              simples, rápido e conveniente!
            </span>
          </h1>
        </div>
        <div>
          <p>
            Envie pix ou pague boletos mesmo sem ter saldo em conta. Use
            qualquer cartão de crédito e parcele seus pagamentos em até 12x.
          </p>
        </div>
        <Button
          text="Simular agora"
          className="bg-[#FCB813]"
          textClassName="text-black font-semibold"
          icon
          imageIcon={Arrow}
        />
      </div>
      <div>
        <Image src={Tito} alt="Tito" width={560} />
      </div>
    </div>
  );
}

export default Banner;
