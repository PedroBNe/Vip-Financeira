"use client";

import { motion } from "framer-motion";

import Menu from "@/assets/question.png";

import { SetStateAction, useState } from "react";
import Image from "next/image";

export default function Question() {
  const [activeList, setActiveList] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (activeList === index) {
      setActiveList(null);
    } else {
      setActiveList(index);
    }
  };

  return (
    <div
      className="my-16 w-[88%] md:w-[50%] md:min-w-[50%] md:max-w-[50%] m-auto"
      id="duvidas"
    >
      <div className="flex flex-col md:items-center md:justify-center mb-12">
        <p className="text-[#FCB813] font-semibold">FAQ</p>
        <h2 className="font-bold">Dúvidas frequentes</h2>
      </div>
      <div className="flex flex-col justify-between items-center p-4 py-6 border border-solid border-[#E5E7EB] rounded-t-[8px] cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => toggleItem(0)}
        >
          <div className="flex gap-2">
            <p className="text-[#FCB813]">01.</p>
            <p className="font-bold pr-8">
              Como funciona o PIX Parcelado da VIP FINANCEIRA?
            </p>
          </div>
          <Image
            src={Menu}
            alt="menu"
            className={
              activeList != 1
                ? "transition transform -rotate-0 duration-90 w-[18px] h-[1.5px] cursor-pointer"
                : "w-[18px] h-[1px] -rotate-90 cursor-pointer"
            }
          />
        </div>
        <ul className="flex justify-start w-[100%]">
          {activeList != 0 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-8 pt-6 pr-8">
                <p className="text-[#6A6A6A]">
                  O PIX Parcelado da VIP FINANCEIRA permite que você envie PIX
                  ou pague boletos mesmo sem saldo em conta, utilizando o limite
                  do seu cartão de crédito. O valor total é pago integralmente
                  para a pessoa que recebe de forma instantânea, enquanto você
                  tem a opção de parcelar esse valor em até 12 vezes no seu
                  cartão de crédito.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center p-4 py-6 border border-solid border-[#E5E7EB]  cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => toggleItem(1)}
        >
          <div className="flex gap-2">
            <p className="text-[#FCB813]">02.</p>
            <p className="font-bold pr-8">
              Quem pode utilizar o PIX Parcelado da VIP FINANCEIRA?
            </p>
          </div>
          <Image
            src={Menu}
            alt="menu"
            className={
              activeList != 1
                ? "transition transform -rotate-0 duration-90 w-[18px] h-[1.5px] cursor-pointer"
                : "w-[18px] h-[1px] -rotate-90 cursor-pointer"
            }
          />
        </div>
        <ul className="flex justify-start w-[100%]">
          {activeList != 1 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-8 pt-6 pr-8">
                <p className="text-[#6A6A6A]">
                  Qualquer brasileiro com limite disponível no cartão de crédito
                  pode utilizar o serviço.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center p-4 py-6 border border-solid border-[#E5E7EB]  cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => toggleItem(2)}
        >
          <div className="flex gap-2">
            <p className="text-[#FCB813]">03.</p>
            <p className="font-bold pr-8">
              Há alguma taxa extra para utilizar o PIX Parcelado da VIP
              FINANCEIRA?
            </p>
          </div>
          <Image
            src={Menu}
            alt="menu"
            className={
              activeList != 1
                ? "transition transform -rotate-0 duration-90 w-[18px] h-[1.5px] cursor-pointer"
                : "w-[18px] h-[1px] -rotate-90 cursor-pointer"
            }
          />
        </div>
        <ul className="flex justify-start w-[100%]">
          {activeList != 2 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-8 pt-6 pr-8">
                <p className="text-[#6A6A6A">
                  As taxas podem variar dependendo do valor e da quantidade de
                  parcelas escolhidas. Consulte nossos termos e condições para
                  mais informações.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center p-4 py-6 border border-solid border-[#E5E7EB]  cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => toggleItem(3)}
        >
          <div className="flex gap-2">
            <p className="text-[#FCB813]">04.</p>
            <p className="font-bold pr-8">
              O que acontece caso eu atrase o pagamento de uma parcela?
            </p>
          </div>
          <Image
            src={Menu}
            alt="menu"
            className={
              activeList != 1
                ? "transition transform -rotate-0 duration-90 w-[18px] h-[1.5px] cursor-pointer"
                : "w-[18px] h-[1px] -rotate-90 cursor-pointer"
            }
          />
        </div>
        <ul className="flex justify-start w-[100%]">
          {activeList != 3 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-8 pt-6 pr-8">
                <p className="text-[#6A6A6A]">
                  Cada parcela será incluída na sua próxima fatura do cartão de
                  crédito. As consequências do não pagamento da fatura podem
                  variar dependendo das políticas e termos do seu cartão de
                  crédito.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center p-4 py-6 border border-solid border-[#E5E7EB] cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => toggleItem(4)}
        >
          <div className="flex gap-2">
            <p className="text-[#FCB813]">05.</p>
            <p className="font-bold pr-8">
              É seguro utilizar o PIX Parcelado da VIP FINANCEIRA?
            </p>
          </div>
          <Image
            src={Menu}
            alt="menu"
            className={
              activeList != 1
                ? "transition transform -rotate-0 duration-90 w-[18px] h-[1.5px] cursor-pointer"
                : "w-[18px] h-[1px] -rotate-90 cursor-pointer"
            }
          />
        </div>
        <ul className="flex justify-start w-[100%]">
          {activeList != 4 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-8 pt-6 pr-8">
                <p className="text-[#6A6A6A]">
                  Sim, garantimos a segurança de todas as transações realizadas
                  por meio do nosso serviço. Além disso, realizamos uma
                  biometria facial para garantir ainda mais a segurança das suas
                  transações.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center p-4 py-6 border border-solid border-[#E5E7EB]  cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => toggleItem(5)}
        >
          <div className="flex gap-2">
            <p className="text-[#FCB813]">06.</p>
            <p className="font-bold pr-8">
              Existe algum limite de valor para utilizar o PIX Parcelado da VIP
              FINANCEIRA?
            </p>
          </div>
          <Image
            src={Menu}
            alt="menu"
            className={
              activeList != 1
                ? "transition transform -rotate-0 duration-90 w-[18px] h-[1.5px] cursor-pointer"
                : "w-[18px] h-[1px] -rotate-90 cursor-pointer"
            }
          />
        </div>
        <ul className="flex justify-start w-[100%]">
          {activeList != 5 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-8 pt-6 pr-8">
                <p className="text-[#6A6A6A]">
                  O limite de valor pode variar dependendo do seu cartão de
                  crédito. Para mais informações sobre limites, entre em contato
                  conosco.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
      <div className="flex flex-col justify-between items-center p-4 py-6 border border-solid border-[#E5E7EB] rounded-b-[8px] cursor-pointer">
        <div
          className="flex justify-between w-full"
          onClick={() => toggleItem(6)}
        >
          <div className="flex gap-2">
            <p className="text-[#FCB813]">07.</p>
            <p className="font-bold pr-8">
              Como faço para entrar em contato com o suporte da VIP FINANCEIRA
              em caso de dúvidas ou problemas?
            </p>
          </div>
          <Image
            src={Menu}
            alt="menu"
            className={
              activeList != 1
                ? "transition transform -rotate-0 duration-90 w-[18px] h-[1.5px] cursor-pointer"
                : "w-[18px] h-[1px] -rotate-90 cursor-pointer"
            }
          />
        </div>
        <ul className="flex justify-start w-[100%]">
          {activeList != 6 && (
            <motion.div
              className="div"
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <li className="pl-8 pt-6 pr-8">
                <p className="text-[#6A6A6A]">
                  Você pode entrar em contato conosco através do nosso site ou
                  canais de atendimento ao consumidor, onde temos uma equipe
                  dedicada pronta para te ajudar com qualquer dúvida ou problema
                  relacionado ao PIX Parcelado.
                </p>
              </li>
            </motion.div>
          )}
        </ul>
      </div>
    </div>
  );
}
