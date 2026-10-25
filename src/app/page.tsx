import { BotaoFlutuante } from "@/components/botao-flutuante";
import { Cabecalho } from "@/components/cabecalho";
import { DadosEstruturados } from "@/components/dados-estruturados";
import { FaixaSabores } from "@/components/faixa-sabores";
import { Rodape } from "@/components/rodape";
import { SecaoDepoimentos } from "@/components/secao-depoimentos";
import { SecaoDuvidas } from "@/components/secao-duvidas";
import { SecaoFestas } from "@/components/secao-festas";
import { SecaoHero } from "@/components/secao-hero";
import { SecaoPedir } from "@/components/secao-pedir";
import { SecaoSabores } from "@/components/secao-sabores";
import { SecaoSobre } from "@/components/secao-sobre";

export default function Home() {
  return (
    <>
      <DadosEstruturados />
      <Cabecalho />
      <main className="overflow-x-clip">
        <SecaoHero />
        <FaixaSabores />
        <SecaoSabores />
        <SecaoSobre />
        <SecaoDepoimentos />
        <SecaoFestas />
        <SecaoDuvidas />
        <SecaoPedir />
      </main>
      <Rodape />
      <BotaoFlutuante />
    </>
  );
}
