/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ProjectCard = ({
  index = 0,
  title = "Projeto Sem Nome",
  image = null,
  description = "",
  tech = [],
  live = "#",
  github = "#",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group relative bg-neutral-900 rounded-xl shadow-xl overflow-hidden border border-neutral-800 hover:border-indigo-500/40"
    >
      {/* IMAGEM */}
      <div className="relative w-full h-44 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-[1px]"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-500">
            Sem imagem
          </div>
        )}

        {/* OVERLAY NO HOVER */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-sm text-neutral-200 opacity-90">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="p-5">
        {/* TÍTULO */}
        <h3 className="text-xl font-bold mb-2 transition-colors group-hover:text-indigo-400">
          {title}
        </h3>

        {/* DESCRIÇÃO NORMAL (some no hover visualmente) */}
        {description && (
          <p className="text-gray-400 text-sm mb-4 group-hover:opacity-0 transition-opacity duration-300">
            {description}
          </p>
        )}

        {/* TECNOLOGIAS */}
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t, i) => (
              <span
                key={i}
                className="bg-neutral-800 px-3 py-1 rounded-full text-xs text-gray-300 
                transition-all duration-300 group-hover:bg-indigo-500/20 group-hover:text-indigo-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* LINKS (APARECEM MAIS NO HOVER) */}
        <div className="mt-4 flex justify-between text-sm">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 opacity-80 hover:opacity-100 transition-all group-hover:translate-x-1"
          >
            Live ↗
          </a>

          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 opacity-80 hover:opacity-100 transition-all group-hover:-translate-x-1"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -inset-1 bg-indigo-500/10 blur-2xl" />
      </div>
    </motion.div>
  );
};

export { ProjectCard };