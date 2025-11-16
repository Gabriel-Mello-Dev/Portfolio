import { Routes, Route } from "react-router-dom";
import { Home} from "./pages";
import { LayoutPadrao } from "./layout";

function AppRoutes() {
  return (
    <Routes>
      {/* LayoutPadrao é o “wrapper” das páginas */}
      <Route element={<LayoutPadrao/>}>
        <Route path="/" element={<Home />} />
      </Route>



    </Routes>
  );
}

export default AppRoutes;
