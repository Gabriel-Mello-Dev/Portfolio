import { Hero, Scene3D, ProjectCard } from "../../components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">

      {/* HERO */}
      <div className="about">
      <Hero />
</div>
      {/* PROJETOS */}
      <section id="projects" className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Projetos</h2>

        <div className="grid md:grid-cols-2 gap-10">
<ProjectCard
  index={1}
  title="Sleep Like a panda"
  image="/imgs/panda.png"
  description="Experiência interativa para reduação de ansiedade no uso de telas"
  tech={["React", "Axios", "Rest Api", "Vite", "Json"]}
  live="https://slp-sleep-like-a-panda.vercel.app/"
  github="https://github.com/Gabriel-ARy7/Slp-Sleep-Like-a-Panda-"
/>       
<ProjectCard
  index={1}
  title="HostDocs"
  image="/imgs/HostDocs.png"
  description="Hosting de documento e visualização destes documentos de forma online e hospedada"
  tech={["Php", "Sql", "Html", "Css", "Tailwind"]}
  live="https://hostdocs.byethost17.com/?i=1"
  github="https://github.com/Gabriel-Mello-Dev/HostDocs"
/>    
        </div>
      </section>


      {/* 3D WEB */}
<section
  id="3dweb"
  className="mx-auto py-24 px-6 text-center"
  style={{
    background: "linear-gradient(to bottom, #000001, #4b2cff)"
  }}
>        <h2 className="text-4xl font-bold">Experiência em 3D Web</h2>
        <p className="text-gray-300 mt-6 leading-relaxed">
          Criação de cenas, GLTF, textura, environment,
          iluminação, instancing, shadows, OrbitControls custom e
          integração completa com React Three Fiber.
        </p>
        <Scene3D/>

      </section>



    
    </div>
  );
};

export  {Home};
