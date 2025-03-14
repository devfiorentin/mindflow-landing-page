"use client";

import CardResources from "@/components/CardResources";
import CardFeactures from "@/components/CardFeactures";
import { motion } from "framer-motion";
import CardResults from "@/components/CardResults";
import ButtonLoginStart from "@/components/ButtonLoginStart";
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
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6"
          >
            Transforme sua vida com a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              MindFlow
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto"
          >
            A plataforma completa para gerenciar seus hábitos, metas, tempo e
            finanças em um só lugar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <ButtonLoginStart
              href="/cadastro"
              text="Começar Agora"
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 px-8 py-4 w-[340px] md:w-auto"
            />
            <ButtonLoginStart
              href="/login"
              text="Fazer Login"
              className="bg-white text-blue-600 hover:bg-[#dededefb] transition-all duration-200 px-8 py-4 w-[340px] md:w-auto"
            />
          </motion.div>
        </section>

        {/* Recursos Poderosos */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 pt-10 px-4"
        >
          <h1 className="text-[25px] md:text-3xl font-bold text-[#171717]">
            Recursos Poderosos
          </h1>
          <p className="text-[15px] md:text-lg text-[#525252] text-center">
            Tudo que você precisa para alcançar seus objetivos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 w-[320px] md:w-auto mx-auto">
            {features.map((feature) => (
              <CardFeactures
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </motion.section>

        {/* Resultados Comprovados */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 pt-40 px-4"
        >
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
        </motion.section>

        {/* Recursos Premium */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center text-center justify-center gap-4 pt-40 px-4"
        >
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
              className="bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-lg px-8 py-4  "
            />
          </div>
        </motion.div>

        {/* Chamada para ação final */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 py-15 bg-blue-600 px-4 text-center"
        >
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
            className="bg-white text-blue-600 hover:bg-[#dededefb] transition-all duration-200 mt-2 px-8 py-4 font-medium "
          />
        </motion.section>
      </main>
    </div>
  );
}
