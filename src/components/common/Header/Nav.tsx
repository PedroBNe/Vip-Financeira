"use client";

import Image from "next/image";
import Logo from "@/assets/Logo.png";
import Link from "next/link";
import Button from "../Button";
import Whatsap from "@/assets/Icon=Whatsapp.svg";
import { motion, useCycle } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Nav() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <div
        className={`md:hidden fixed top-0 bg-black w-full flex justify-between items-center transition duration-300 p-4 z-50`}
      >
        <div className="w-[50%] pl-[6%] z-50">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={65} height={45} />
          </Link>
        </div>
        <div className="w-[50%] pr-[6%]">
          <div className="md:hidden justify-end flex">
            <motion.span
              onClick={() => setOpen((ev) => !ev)}
              className="button-top-ac flex justify-end z-50 relative max-conten"
              initial={{ rotate: 0 }}
              animate={{ rotate: open ? 90 : 0 }} // Rotação condicional, por exemplo
              transition={{ type: "spring", stiffness: 300 }}
            >
              {!open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 50 50"
                >
                  <path
                    fill="white"
                    d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              )}
            </motion.span>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col dropDown"
              >
                <ul className="flex flex-col gap-14 items-center h-full justify-center">
                  <Link href="/" onClick={() => setOpen((ev) => !ev)}>
                    Início
                  </Link>
                  <Link
                    href="#comofunciona"
                    onClick={() => setOpen((ev) => !ev)}
                  >
                    Como funciona?
                  </Link>
                  <Link href="#vantagens" onClick={() => setOpen((ev) => !ev)}>
                    Vantagens
                  </Link>
                  <Link href="#sobre" onClick={() => setOpen((ev) => !ev)}>
                    Sobre a VIP
                  </Link>
                  <Link
                    href="https://consignado.vipfinanceira.com.br/#FAQ"
                    onClick={() => setOpen((ev) => !ev)}
                  >
                    FAQ
                  </Link>
                  <Link href="https://api.whatsapp.com/send?phone=554899770644&text=Oi,%20gostaria%20de%20simular%20meu%20cr%C3%A9dito%20consignado">
                    <Button
                      text="Fale conosco"
                      className="bg-[#25D366] w-fit"
                      textClassName="text-black font-semibold"
                      icon
                      imageIcon={Whatsap}
                    />
                  </Link>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <nav className="justify-between items-center text-sm xl:text-base p-6 md:px-2 xl:px-6 w-[80%] md:w-[90%] xl:w-[80%] hidden md:flex">
        <div className="flex items-center justify-center">
          <Image src={Logo} alt="Logo" width={88} />
        </div>
        <div className="flex justify-between gap-8 md:gap-4 xl:gap-8 items-center">
          <Link href={"/"}>Inicio</Link>
          <Link href={"#como funciona"}>Como funciona?</Link>
          <Link href={"#vantagens"}>Vantagens</Link>
          <Link href={"#sobre"}>Sobre a VIP</Link>
          <Link href={"https://consignado.vipfinanceira.com.br/#FAQ"}>FAQ</Link>
          <Link href="https://api.whatsapp.com/send?phone=554899770644&text=Oi,%20gostaria%20de%20simular%20meu%20cr%C3%A9dito%20consignado">
            <Button
              text="Fale conosco"
              className="bg-[#25D366]"
              textClassName="text-black font-semibold"
              icon
              imageIcon={Whatsap}
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
