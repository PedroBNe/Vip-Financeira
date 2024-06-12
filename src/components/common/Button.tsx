import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Ellipse from "@/assets/Ellipse 1.png";
import Whatsap from "@/assets/Vector.png";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  textClassName?: string;
  icon?: boolean;
  eclipse?: boolean;
  imageIcon?: any;
}

function Button({
  text,
  className,
  textClassName,
  icon,
  eclipse,
  imageIcon,
}: ButtonProps) {
  return (
    <>
      <button
        className={twMerge(
          "px-4 py-2 rounded cursor-pointer w-full md:w-fit",
          "group hover:bg-primary",
          "disabled:cursor-default disabled:bg-transparent disabled:border-gray-500",
          className
        )}
      >
        <span
          className={twMerge(
            "text-primary flex gap-2 items-center justify-center",
            "group-disabled:text-gray-500",
            textClassName
          )}
        >
          {text}
          {eclipse ? <Image src={Ellipse} alt="On" width={6} /> : null}
          {eclipse ? <Image src={Whatsap} alt="Whatsap" width={12} /> : null}
          {icon ? <Image src={imageIcon} alt="Icone" /> : null}
        </span>
      </button>
    </>
  );
}

export default Button;
