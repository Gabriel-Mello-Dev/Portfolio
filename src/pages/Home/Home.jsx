import { Hero, Scene3D, ProjectCard } from "../../components";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      {/* HERO */}
      <section id="about" className="border-b border-slate-800">
        <Hero />
      </section>

      {/* PROJETOS */}
      <section
        id="projects"
        className="py-14 px-6 bg-gradient-to-b from-slate-950 to-slate-900"
      >
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold">Projetos</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Alguns dos projetos que desenvolvi, focados em experiência do
              usuário, integração com APIs e soluções modernas.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">
            <ProjectCard
              index={1}
              title="Sleep Like a Panda"
              image="/imgs/panda.png"
              description="Experiência interativa voltada à redução de ansiedade no uso de telas, com foco em usabilidade e design envolvente."
              tech={["React", "Axios", "API", "Vite"]}
              live="https://sleep-like-a-panda.vercel.app/"
              github="https://github.com/Gabriel-ARy7/Slp-Sleep-Like-a-Panda-"
            />

            <ProjectCard
              index={2}
              title="Adaptil"
              image="/imgs/adaptil.jpeg"
              description="Plataforma de adaptação de conteúdos didáticos personalizados com uso de IA, focada nas necessidades individuais dos alunos."
              tech={["Next.js", "React", "Tailwind", "IA"]}
              live="https://adaptil.vercel.app/"
              github="https://github.com/Gabriel-Mello-Dev/Adaptil"
            />

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
      </section>

      {/* 3D WEB */}
      <section
        id="3dweb"
        className="py-1 px-6 bg-gradient-to-b from-slate-900 to-indigo-950 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Experiência 3D Web
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Desenvolvimento de experiências imersivas utilizando React Three
            Fiber, com foco em performance, interatividade e integração com
            aplicações reais.
          </p>

          <div className="mt-8">
            <Scene3D />
          </div>
        </div>
      </section>
    </div>
  );
};

export { Home };
