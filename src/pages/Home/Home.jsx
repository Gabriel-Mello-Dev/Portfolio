import { Hero, Scene3D, ProjectCard } from "../../components";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 transition-colors duration-500">
      {/* HERO */}
      <section
        id="about"
        className="border-b border-slate-800 transition-all duration-500 hover:bg-slate-900/30"
      >
        <div className="transition-transform duration-500 hover:scale-[1.01]">
          <Hero />
        </div>
      </section>

      {/* PROJETOS */}
      <section
        id="projects"
        className="py-14 px-6 bg-gradient-to-b from-slate-950 to-slate-900 transition-all duration-500"
      >
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16 transition-all duration-300 hover:scale-[1.01]">
            <h2 className="text-3xl md:text-4xl font-semibold transition-colors hover:text-indigo-400">
              Projetos
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto transition-opacity duration-300 hover:opacity-90">
              Alguns dos projetos que desenvolvi, focados em experiência do
              usuário, integração com APIs e soluções modernas.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10 group">
            <div className="transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:-translate-y-2">
              <ProjectCard
                index={1}
                title="Sleep Like a Panda"
                image="/imgs/panda.png"
                description="Experiência interativa voltada à redução de ansiedade no uso de telas, com foco em usabilidade e design envolvente."
                tech={["React", "Axios", "API", "Vite"]}
                live="https://sleep-like-a-panda.vercel.app/"
                github="https://github.com/Gabriel-Mello-Dev/Sleep-Like-a-Panda"
              />
            </div>

            <div className="transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:-translate-y-2">
              <ProjectCard
                index={2}
                title="Adaptil"
                image="/imgs/adaptil.jpeg"
                description="Plataforma de adaptação de conteúdos didáticos personalizados com uso de IA, focada nas necessidades individuais dos alunos."
                tech={["Next.js", "React", "Tailwind", "IA"]}
                live="https://adaptil.vercel.app/"
                github="https://github.com/Gabriel-Mello-Dev/Adaptil"
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <div className="w-full max-w-md">
                <ProjectCard
                  index={3}
                  title="Detecção de pivôs com IA"
                  image="/imgs/pivoDetection.jpeg"
                  description="Projeto de pesquisa na UNESP para detecção automatizada de pivôs de irrigação usando IA e Google Earth Engine."
                  tech={["GEE", "JavaScript", "Python", "Roboflow"]}
                  live="https://app.roboflow.com/gabriels-workspace-b9aqp/deteccao-de-pivos/1"
                  github="https://code.earthengine.google.com/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D WEB */}
      <section
        id="3dweb"
        className="py-10 px-6 bg-gradient-to-b from-slate-900 to-indigo-950 border-t border-slate-800 transition-all duration-500 hover:from-slate-900 hover:to-indigo-900"
      >
        <div className="max-w-6xl mx-auto text-center transition-transform duration-500 hover:scale-[1.01]">
          <h2 className="text-3xl md:text-4xl font-semibold transition-colors hover:text-indigo-400">
            Experiência 3D Web
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto transition-opacity duration-300 hover:opacity-90">
            Desenvolvimento de experiências imersivas utilizando React Three
            Fiber, com foco em performance, interatividade e integração com
            aplicações reais.
          </p>

          <div className="mt-8 transition-all duration-500 hover:scale-[1.02]">
            <Scene3D />
          </div>
        </div>
      </section>
    </div>
  );
};

export { Home };
