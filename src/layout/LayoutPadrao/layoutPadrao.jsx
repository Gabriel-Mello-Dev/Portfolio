import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Analytics } from "@vercel/analytics/react";

function LayoutPadrao() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Analytics />

      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 w-full h-16 px-6 md:px-10 flex items-center justify-between 
      bg-slate-900/70 backdrop-blur-md border-b border-slate-800 z-50 transition-all duration-300 hover:bg-slate-900/80"
      >
        {/* LEFT */}
        <div className="flex items-center gap-3 group cursor-default">
          <img
            src="/react.png"
            className="w-8 h-8 opacity-80 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />

          <div className="leading-tight transition-transform duration-300 group-hover:translate-x-1">
            <h1 className="text-sm md:text-base font-semibold tracking-tight group-hover:text-indigo-300 transition-colors">
              Gabriel Mello
            </h1>
            <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          {[
            { label: "Sobre", to: "#about" },
            { label: "Projetos", to: "#projects" },
            { label: "3D", to: "#3dweb" },
          ].map((item) => (
            <HashLink
              key={item.to}
              smooth
              to={item.to}
              className="relative group transition-colors duration-300 hover:text-white"
            >
              <span className="relative">
                {item.label}

                {/* underline animado */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-400 transition-all duration-300 group-hover:w-full" />
              </span>

              {/* glow hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl bg-indigo-500/10 rounded-md" />
            </HashLink>
          ))}
        </nav>
      </header>

      {/* OFFSET */}
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export { LayoutPadrao };