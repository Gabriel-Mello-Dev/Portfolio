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
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-neutral-900 p-6 rounded-xl shadow-xl hover:scale-[1.02] transition"
    >
      {/* IMAGEM DO PROJETO */}
      <div className="w-full h-40 bg-neutral-800 rounded mb-4 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-500">
            Sem imagem
          </div>
        )}
      </div>

      {/* TÍTULO */}
      <h3 className="text-xl font-bold mb-2">{title}</h3>

      {/* DESCRIÇÃO */}
      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}

      {/* TECNOLOGIAS */}
      {tech.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="bg-neutral-800 px-3 py-1 rounded-full text-xs text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* LINKS */}
      <div className="mt-4 flex justify-between text-sm text-blue-400">
        <a href={live} target="_blank" rel="noreferrer">Live ↗</a>
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </motion.div>
  );
};

export { ProjectCard };
