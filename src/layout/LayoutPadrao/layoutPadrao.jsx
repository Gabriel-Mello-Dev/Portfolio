import { Outlet } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Analytics } from "@vercel/analytics/react"

function LayoutPadrao() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Analytics />
      {/* NAVBAR */}
      <header
        className="fixed top-0 left-0 w-full h-16 px-6 md:px-10 flex items-center justify-between 
      bg-slate-900/70 backdrop-blur-md border-b border-slate-800 z-50"
      >
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <img src="/react.png" className="w-8 h-8 opacity-80" />

          <div className="leading-tight">
            <h1 className="text-sm md:text-base font-semibold tracking-tight">
              Gabriel Mello
            </h1>
            <p className="text-xs text-slate-400">Full Stack Developer</p>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex items-center gap-6 text-sm text-slate-400">
          <HashLink smooth to="#about" className="hover:text-white transition">
            Sobre
          </HashLink>

          <HashLink
            smooth
            to="#projects"
            className="hover:text-white transition"
          >
            Projetos
          </HashLink>

          <HashLink smooth to="#3dweb" className="hover:text-white transition">
            3D
          </HashLink>
        </nav>
      </header>

      {/* OFFSET (pra não esconder conteúdo atrás da navbar fixa) */}
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}

export { LayoutPadrao };
