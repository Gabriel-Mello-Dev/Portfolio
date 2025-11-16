import { Outlet } from "react-router-dom"
import { Highlighter } from "../../components/ui/highlighter"
import { HashLink } from "react-router-hash-link";

function LayoutPadrao() {

return (

  <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* NAVBAR */}
      <header className="w-full py-5 px-8 flex justify-between items-center bg-white shadow-sm">
    <div className="flex flex-col">
    <h1 className="text-xl font-bold">Gabriel De Oliveira Mello</h1>
      <Highlighter action="underline" color="#9900ffff">
 desenvolvedor de software Jr
  </Highlighter>

  </div>
        <nav className="flex gap-6 text-sm font-medium">
       <HashLink smooth to="#about" className="hover:text-blue-600">
    Sobre
  </HashLink>

  <HashLink smooth to="#projects" className="hover:text-blue-600">
    Projetos
  </HashLink>

  <HashLink smooth to="#3dweb" className="hover:text-blue-600">
    Experiencias 3D
  </HashLink>

        </nav>
      </header>

 
   <Outlet/>

    </div>

)

}

export {LayoutPadrao}