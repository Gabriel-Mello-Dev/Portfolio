/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Hero = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative flex items-center justify-center px-6 overflow-hidden">
        {/* fundo sutil animado */}
        <div className="absolute inset-0 bg-indigo-500/5 blur-3xl animate-pulse" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full text-center relative z-10 transition-transform duration-500 hover:scale-[1.01]"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight transition-colors hover:text-indigo-300">
            Gabriel <span className="text-indigo-400">Mello</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto transition-opacity duration-300 hover:opacity-90">
            Desenvolvedor Full Stack focado em aplicações modernas, experiências
            3D e soluções multiplataforma.
          </p>

<div className="mt-8 flex justify-center overflow-visible transition-transform duration-300 hover:scale-[1.01]">            <img
              src="/pfp.jpg"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border border-slate-700 shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-indigo-500/20"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <HashLink
                smooth
                to="#projects"
                className="hover:text-white transition"
              >
                Ver Projetos
              </HashLink>
            </a>

            <a
              href="https://www.linkedin.com/in/gabriel-de-oliveira-mello-dev-researcher/"
              target="_blank"
              className="px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* SOBRE */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="transition-all duration-300 hover:translate-y-[-2px]">
              <h3 className="text-2xl font-semibold transition-colors hover:text-indigo-400">
                Sobre mim
              </h3>

              <p className="mt-3 text-slate-400 leading-relaxed transition-colors hover:text-slate-300">
                Desenvolvedor Full Stack com experiência na criação de
                aplicações modernas para web. Atuo em todas as etapas do
                desenvolvimento, desde a modelagem de banco de dados e
                arquitetura da aplicação até a construção de interfaces
                responsivas e integrações com APIs. Tenho como prioridade
                desenvolver soluções escaláveis, seguras, performáticas e com
                excelente experiência para o usuário.
              </p>

              <p className="mt-4 text-slate-400 leading-relaxed transition-colors hover:text-slate-300">
                Tenho experiência no desenvolvimento de dashboards analíticos,
                sistemas de autenticação, integrações com APIs, modelagem de
                banco de dados, visualização de métricas e implementação de
                funcionalidades voltadas para ambientes corporativos, sempre
                seguindo boas práticas de engenharia de software e código limpo.
              </p>
            </div>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6">
            <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:-translate-y-1">
              <h4 className="font-semibold">Contato</h4>
              <p className="mt-2 text-slate-400 text-sm transition-colors hover:text-slate-300">
                gabrielmello8986@gmail.com
              </p>
            </div>

            <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:-translate-y-1">
              <h4 className="font-semibold">Skills</h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Next.js",
                  "TypeScript",
                  "React",
                  "Supabase",
                  "PostgreSQL",
                  "Redis",
                  "Tailwind CSS",
                  "UX",
                  "REST APIs",
                  "Git",
                ].map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 text-sm bg-slate-700/60 rounded-full transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-300 hover:scale-105"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* EXPERIÊNCIA */}
      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-10 transition-colors hover:text-indigo-400">
            Experiência
          </h3>

          <div className="grid md:grid-cols-3 gap-8 group">
            {[
              {
                title: "Avanço Marketing",
                role: "Full Stack Developer",
                period: "jun/2026 - atual",
                desc: "Desenvolvimento de uma plataforma para gestão de marketing e vendas, atuando na implementação de dashboards,integrações com Supabase e otimização da arquitetura, com foco em escalabilidade, segurança, performance e experiência do usuário.",
                tech: [
                  "Next.js",
                  "TypeScript",
                  "Supabase",
                  "PostgreSQL",
                  "TailwindCSS",
                ],
              },
              {
                title: "AER Company",
                role: "Full Stack (Estágio)",
                period: "set/2025 - dez/2025",
                desc: "Atuação no desenvolvimento de aplicações web, mobile e desktop, com foco em dashboards interativos e integração com APIs. Trabalhei na construção de interfaces responsivas e na organização de fluxos de dados, priorizando performance e experiência do usuário.",
                tech: ["React", "Next.js", "Flutter", "Firebase", "CI/CD"],
              },
              {
                title: "FragmaCore",
                role: "Desenvolvedor Back-end",
                period: "mar/2025 - atual",
                desc: "Desenvolvimento de projetos colaborativos e autônomos em equipe, voltados ao aprendizado e à criação de aplicações para o curso técnico e faculdade. Atuação no desenvolvimento de APIs, comunicação em tempo real e arquitetura de back-end, com foco em escalabilidade, performance e boas práticas.",
                tech: ["Node.js", "TypeScript", "WebSockets", "REST APIs"],
              },
              {
                title: "UNESP",
                role: "Pesquisador Júnior",
                period: "fev/2025 - dez/2026",
                desc: "Desenvolvimento de análises geoespaciais utilizando Google Earth Engine, com processamento de imagens de satélite e extração de métricas. Atuação com grandes volumes de dados, geração de insights e integração com serviços da Google Cloud Platform para escalabilidade.",
                tech: ["GEE", "Roboflow", "Data Analysis", "Remote Sensing"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-slate-800/40 rounded-xl border border-slate-700 transition-all duration-300 hover:border-indigo-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 group-hover:opacity-70 hover:!opacity-100"
              >
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-slate-400">{item.role}</p>
                <p className="text-xs text-slate-500 mt-1">{item.period}</p>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-slate-700/60 rounded-md transition hover:bg-indigo-500/20 hover:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 text-center text-sm text-slate-400 transition hover:text-slate-300">
        © {new Date().getFullYear()} Gabriel De Oliveira Mello - Dev &
        Researcher.
      </footer>
    </main>
  );
};

export { Hero };