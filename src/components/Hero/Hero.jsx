import React from "react";
import { motion } from "framer-motion";


 const Hero = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 text-slate-100">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
    
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl text-center px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Gabriel <span className="text-indigo-400">De Oliveira Mello</span>
          </h1>
          <p className="mt-4 text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Desenvolvedor de software, Web, Mobile, Desktop & 3D Web. Crio interfaces modernas,
            experiências 3D e aplicações multiplataforma.
          </p>
<div className="w-full flex justify-center">
<img 
  src="/pfp.jpg" 
  className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-[0_0_25px_rgba(0,0,255,0.4)]"
/>


</div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.linkedin.com/in/gabriel-de-oliveira-mello-3a1174308/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-medium shadow-md transition"
            >
              Conecte-se no LinkedIn
            </a>

           
          </div>
        </motion.div>
      </section>

      {/* SOBRE / ÁREA DE ATUAÇÃO */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Texto sobre mim */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Sobre mim</h3>
            <p className="text-slate-300 leading-relaxed">
              Sou Gabriel Mello, desenvolvedor front‑end e apaixonado por
              tecnologias 3D na web. Trabalho com criação de aplicações web,
              mobile e desktop, priorizando experiência do usuário, performance
              e soluções escaláveis. Tenho experiência com React, React Native,
              TypeScript e integrações com Firebase (Firestore, Storage,
              Hosting, Cloud Functions) para autenticação, gestão de dados e
              visualizações dinâmicas.
            </p>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Também atuo com aplicações desktop usando Electron.js e com
              tecnologias imersivas como WebXR para experiências 3D. Minha
              rotina envolve tanto desenvolvimento de interfaces quanto
              integração com serviços e lógica avançada (ex.: manipulação de
              datas e integrações locais).
            </p>

            <h4 className="mt-6 font-semibold">Pesquisador — UNESP (PIBIC Jr.)</h4>
            <p className="mt-2 text-slate-300 leading-relaxed">
              Pesquisador PIBIC Jr. na UNESP — Campus de Ourinhos (desde
              fev/2025). Participo de projetos científicos, contribuindo na
              elaboração de projetos, redação acadêmica e análise de dados. Estou
              migrando minha linha de pesquisa para o Google Earth Engine (GEE),
              focando em processamento e análise de imagens de satélite com o
              objetivo de aplicar esses dados em aplicações móveis e soluções de
              interpretação geoespacial.
            </p>

            <h4 className="mt-6 font-semibold">Objetivos de pesquisa</h4>
            <ul className="list-disc list-inside mt-2 text-slate-300">
              <li>Aprimorar programação aplicada ao Google Earth Engine (GEE).</li>
              <li>Desenvolver e interpretar algoritmos para processamento de imagens.</li>
              <li>Aplicar dados processados no desenvolvimento de soluções mobile.</li>
            </ul>
          </div>

          {/* Cartão lateral: Contato, Skills e Certificados */}
          <aside className="bg-slate-800/40 p-6 rounded-xl border border-slate-700">
            <h4 className="text-lg font-semibold">Contato</h4>
            <p className="mt-2 text-slate-300">gabrielmello8986@gmail.com</p>
            <a
              href="https://www.linkedin.com/in/gabriel-de-oliveira-mello-3a1174308/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-indigo-300 underline"
            >
              LinkedIn
            </a>

            <div className="mt-6">
              <h5 className="font-semibold">Principais competências</h5>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "React",
                  "React Native",
                  "TypeScript",
                  "JavaScript",
                  "Firebase",
                  "Electron.js",
                  "WebXR",
                  "GEE",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700/60 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold">Certificações</h5>
              <ul className="mt-2 text-slate-300 text-sm">
                <li>Python na Prática</li>
                <li>Introdução a React.js</li>
                <li>Desmistificando GitHub com VS Code</li>
                <li>User Experience Design — Fundamentals</li>
                <li>Performance em Aplicações Java</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* EXPERIÊNCIA RESUMIDA */}
      <section className="py-12 px-6 md:px-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Experiência</h3>

          <div className="grid gap-6 md:grid-cols-3">
            {/* AER Company */}
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h4 className="font-semibold">AER Company</h4>
              <p className="text-sm text-slate-400">Desenvolvedor de software júnior</p>
              <p className="mt-3 text-slate-300 text-sm">
                (set/2025 — presente) Desenvolvimento de soluções web, mobile e
                desktop, com integrações Firebase (Storage, Firestore, Hosting,
                Cloud Functions). Desenvolvimento de autenticação, gestão de
                dados e visualizações dinâmicas. Trabalho com Electron.js e
                WebXR.
              </p>
            </div>

            {/* UNESP */}
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h4 className="font-semibold">UNESP — Campus Ourinhos</h4>
              <p className="text-sm text-slate-400">Pesquisador PIBIC Jr.</p>
              <p className="mt-3 text-slate-300 text-sm">
                (fev/2025 — presente) Projetos de pesquisa científica, análise de
                dados e transição para processamento de imagens de satélite com
                Google Earth Engine.
              </p>
            </div>

            {/* Autônomo */}
            <div className="p-6 bg-slate-800/40 rounded-xl border border-slate-700">
              <h4 className="font-semibold">Autônomo</h4>
              <p className="text-sm text-slate-400">Desenvolvedor mobile & web</p>
              <p className="mt-3 text-slate-300 text-sm">
                (mar/2025 — presente / jan/2024 — mai/2025) Desenvolvimento de
                projetos próprios e soluções sob demanda, aplicando boas
                práticas em front‑end, mobile e integração com APIs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ SIMPLES */}
      <footer className="py-8 px-6 md:px-12 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Gabriel De Oliveira Mello — Desenvolvedor.
      </footer>
    </main>
  );
};

export  {Hero};