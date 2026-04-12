import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Competences } from "./pages/Competences";
import { APropos } from "./pages/APropos";
import { Projets } from "./pages/Projets";
import { VeilleTechnologique } from "./pages/VeilleTechnologique";
import { Experience } from "./pages/Experience";
import { Outils } from "./pages/Outils";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "competences", Component: Competences },
      { path: "projets", Component: Projets },
      { path: "experience", Component: Experience },
      { path: "outils", Component: Outils },
      { path: "veille-technologique", Component: VeilleTechnologique },
      { path: "a-propos", Component: APropos },
    ],
  },
]);