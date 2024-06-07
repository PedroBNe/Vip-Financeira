import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo.png";

function Footer() {
  return (
    <footer className="flex flex-col gap-8 bg-black text-white px-32 py-24">
      <div className="grid grid-cols-4">
        <div className="flex flex-col gap-6">
          <Image src={Logo} alt="logo" width={88} />
          <p className="text-justify">
            Há 14 anos atuando no mercado de consignado, essa é uma garantia de
            que todo o processo terá
            credibilidade, segurança, qualidade e excelência.
          </p>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col gap-6">
            <h3 className="font-bold">INSTITUCIONAL</h3>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Dúvidas Frequentes</Link>
            </li>
            <li>
              <Link href="/">Acesso Colaborador</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col gap-6">
            <h3 className="font-bold">SOLUÇÕES</h3>
            <li>
              <Link href="/">Crédito Consignado</Link>
            </li>
            <li>
              <Link href="/">Portabilidade</Link>
            </li>
            <li>
              <Link href="/">Cartão de Crédito Consig.</Link>
            </li>
            <li>
              <Link href="/">Crédito Pessoal</Link>
            </li>
            <li>
              <Link href="/">Seguro</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-col gap-6">
            <h3 className="font-bold">CONTATO</h3>
            <li>
              <p>sac@vipfinanceira.com.br</p>
            </li>
            <li>
              <p>(48) 3047-0150</p>
            </li>
            <li>
              <p>(48) 99944-0887</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-6 border-solid border-t border-[#6A6A6A] pt-6">
        <div className="flex justify-between">
          <div>
            <p>2024 © Todos os direitos reservados. Vip Promotora de Crédito</p>
          </div>
          <div className="flex gap-8">
            <Link href="/">Políticas de Privacidade</Link>
            <Link href="/">Termo de uso</Link>
          </div>
        </div>
        <div>
          <p className="text-[#6A6A6A] text-justify">
            A Vip Promotora não é uma instituição financeira e não realiza
            operações de crédito diretamente. A Vip Promotora é uma plataforma
            digital que atua como correspondente bancário para facilitar o
            processo de contratação de empréstimos. Como correspondente
            bancário, seguimos as diretrizes do Banco Central do Brasil, nos
            termos da Resolução nº. 3.954, de 24 de fevereiro de 2011. Toda
            avaliação de crédito será realizada conforme a política de crédito
            da Instituição Financeira escolhida pelo usuário. Antes da
            contratação de qualquer serviço através de nossos parceiros, você
            receberá todas as condições e informações relativas ao produto a ser
            contrato, de forma completa e transparente. As taxas de juros,
            margem consignável e prazo de pagamento praticados nos empréstimos
            com consignação em pagamento dos Governos Federais, Estaduais e
            Municipais, Forças armadas e INSS observam as determinações de cada
            convênio, bem como a política de crédito da instituição financeira a
            ser utilizada. AOM SOLUCOES FINANCEIRAS - CNPJ 33.636.801/0001-05 |
            Endereço: Rua Castro Alves, 176 - Andar 1 - 88101-160 - Campinas,
            São José - SC. Bancos parceiros: BANCO SAFRA S.A.
            58.160.789/0001-28, BANCO C6 CONSIGNADO 61.348.538/0001-86, FACTA
            FINANCEIRA 01.360.251/0001-40. Informações adicionais sobre
            antecipação saque-aniversário: Taxa de juros 1,80% a.m e Custo
            Efetivo Total máximo de 2,37% a.m. Pagamento debitado anualmente
            direto na(s) conta(s) vinculadas ao FGTS. É possível realizar a
            quitação a qualquer momento após a contratação. Valor mínimo R$
            200,00. Exemplo: Considerando a data de operação em julho de 2022 e
            aniversário no mês de julho, uma conta com saldo de R$ 3.000,00 no
            FGTS consegue ter R$ 1.676,66 antecipados provenientes do saldo
            total a serem pagos em 10 parcelas anuais com taxa de juros de 1,80%
            a.m e CET de 2,37% a.m.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
