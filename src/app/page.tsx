import ButtonLoginStart from "@/components/ButtonLoginStart";
import CardFeactures from "@/components/CardFeactures";
import CardResources from "@/components/CardResources";
import { motion } from "framer-motion";
import CardResults from "@/components/CardResults";

export default function Home() {
  const features = [
    {
      id: 1,
      icon: "🎯",
      title: "Hábitos",
      description:
        "Desenvolva hábitos positivos e acompanhe seu progresso diário.",
    },
    {
      id: 2,
      icon: "🎯",
      title: "Metas",
      description:
        "Defina metas claras e acompanhe sua evolução ao longo do tempo.",
    },
    {
      id: 3,
      icon: "⏱️",
      title: "Tempo",
      description: "Gerencie seu tempo e aumente sua produtividade.",
    },
    {
      id: 4,
      icon: "💰",
      title: "Finanças",
      description: "Gerencie suas finanças e planeje seu futuro financeiro.",
    },
    {
      id: 5,
      icon: "💡",
      title: "Insights",
      description:
        "Acompanhe seu progresso e ajuste suas estratégias conforme necessário.",
    },
    {
      id: 6,
      icon: "📚",
      title: "Cursos",
      description: "Aprenda novas habilidades e expanda seu conhecimento.",
    },
  ];

  const resources = [
    {
      id: 1,
      icon: "📊",
      title: "Análise Avançada",
      description: "Insights detalhados e recomendações personalizadas.",
    },
    {
      id: 2,
      icon: "📈",
      title: "Relatórios Detalhados",
      description: "Relatórios completos sobre seu progresso e desempenho.",
    },
    {
      id: 3,
      icon: "🎯",
      title: "Objetivos Claros",
      description: "Defina metas realistas e acompanhe seu progresso.",
    },
    {
      id: 4,
      icon: "✨",
      title: "Recursos Exclusivos",
      description: "Acesso a funcionalidades avançadas e conteúdos premium.",
    },
  ];

  return (
    <div className="w-full font-geist-sans">
      <main className="w-full">
        {/* Seção Principal */}
        <section className="text-center flex flex-col items-center justify-center gap-4 w-full bg-[#F2EFFE] px-2 py-15">
          <h1 className="text-4xl md:text-6xl font-bold text-[#171717]">
            Transforme sua vida com a{" "}
            <span className="text-blue-500">MindFlow</span>
          </h1>
          <p className="break-words text-[16px] md:text-[22px] p-0 md:py-3 text-[#525252] max-w-[90%] md:max-w-[580px]">
            A plataforma completa para gerenciar seus hábitos, metas, tempo e
            finanças em um só lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
  <ButtonLoginStart
    href="/cadastro"
    text="Começar Agora"
    className="bg-[#2B7FFF] text-white hover:bg-[#2b92ffe9] transition-all duration-200 w-[80%] sm:w-full px-10 py-3"
  />
  <ButtonLoginStart
    href="/login"
    text="Fazer Login"
    className="bg-white text-[#2B7FFF] hover:bg-[#dedede83] transition-all duration-200 w-[80%] sm:w-full px-10 py-3"
  />
</div>

        </section>

        {/* Recursos Poderosos */}
        <section className="flex flex-col items-center justify-center gap-4 pt-10 px-4">
          <h1 className="text-[25px] md:text-3xl font-bold text-[#171717]">
            Recursos Poderosos
          </h1>
          <p className="text-[15px] md:text-lg text-[#525252] text-center">
            Tudo que você precisa para alcançar seus objetivos
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 w-[320px] md:w-[90%] mx-auto">
            {features.map((feature) => (
              <CardFeactures
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* Resultados Comprovados */}
        <section className="flex flex-col items-center justify-center gap-4 pt-40 px-4">
          <h1 className="text-[25px] md:text-3xl font-bold text-[#171717] text-center">
            Resultados Comprovados
          </h1>
          <p className="text-[15px] md:text-lg text-center text-[#525252]">
            Nossos usuários alcançaram grandes melhorias
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10">
            <CardResults
              value="40%"
              title="Produtividade"
              description="Aumento médio na produtividade dos usuários."
            />
            <CardResults
              value="85%"
              title="Metas"
              description="Taxa de sucesso em atingir metas."
            />
            <CardResults
              value="30%"
              title="Economia"
              description="Redução média em despesas desnecessárias."
            />
            <CardResults
              value="2h"
              title="Tempo"
              description="Economia média de tempo por dia."
            />
          </div>
        </section>

        {/* Recursos Premium */}
        <section className="flex flex-col items-center text-center justify-center gap-4 pt-40 px-4">
          <h1 className="text-[25px] md:text-3xl font-bold text-[#171717]">
            Recursos Premium
          </h1>
          <p className="text-[15px] md:text-lg text-[#525252]">
            Potencialize sua experiência com funcionalidades avançadas
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 text-left">
            {resources.map((resource) => (
              <CardResources
                key={resource.id}
                icon={resource.icon}
                title={resource.title}
                description={resource.description}
              />
            ))}
          </div>
          <div className="py-20 flex justify-center items-center">
            <ButtonLoginStart
              href="/pricing"
              text="Ver Planos Premium"
              className="bg-[#2B7FFF] text-white hover:bg-[#2b92ffe9] transition-all duration-200 text-lg px-10 py-3  "
            />
          </div>
        </section>

        {/* Chamada para ação final */}
        <section className="flex flex-col items-center justify-center gap-4 py-15 bg-[#2B7FFF] px-4 text-center">
          <h1 className="text-white text-[25px] md:text-3xl font-bold">
            Comece Sua Jornada Hoje
          </h1>
          <p className="text-[14px] md:text-lg text-white max-w-[90%] md:max-w-[580px]">
            Junte-se a milhares de pessoas que já transformaram suas vidas com
            nossa plataforma.
          </p>
          <ButtonLoginStart
            text="Criar Conta Gratuita"
            href="/cadastro"
            className="bg-white text-[#2B7FFF] hover:bg-[#dededefb] transition-all duration-200 mt-2 px-10 py-3 font-medium "
          />
        </section>
      </main>
    </div>
  );
}
