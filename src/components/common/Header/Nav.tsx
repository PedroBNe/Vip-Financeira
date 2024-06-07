import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from "next/link";
import Button from "../Button";
import Whatsap from "@/assets/Icon=Whatsapp.svg";

function Nav() {
  return (
    <nav className="flex justify-between items-center p-6 w-[80%]">
      <div className="flex items-center justify-center">
        <Image src={Logo} alt="Logo" width={88} />
      </div>
      <div className="flex justify-between gap-8 items-center">
        <Link href={"/"}>Inicio</Link>
        <Link href={"/"}>Como funciona?</Link>
        <Link href={"/"}>Vantagens</Link>
        <Link href={"/"}>Sobre a VIP</Link>
        <Link href={"/"}>FAQ</Link>
        <Button
          text="Fale conosco"
          className="bg-[#25D366]"
          textClassName="text-black font-semibold"
          icon
          imageIcon={Whatsap}
        />
      </div>
    </nav>
  );
}

export default Nav;
