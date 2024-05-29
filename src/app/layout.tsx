import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vip Financeira",
  description:
    "A VIP Promotora de Crédito está no mercado há 15 anos e é uma das maiores produções da Fontes, o maior correspondente bancário do país. Essa é uma garantia aos nossos clientes de que todo o processo terá credibilidade, segurança, qualidade e excelência.",
  authors: [
    { name: "Pedro Barreto Neto" },
    { name: "pedro.barreto.ne@gmail.com" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
