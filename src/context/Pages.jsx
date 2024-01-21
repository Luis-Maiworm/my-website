
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ProjectsPage from "../pages/Projects";

export const STARTPAGE = {
    name: "Home",
    link: "/",
    pageElement: <HomePage/>
}

export const PAGES = [
    {
        name: "About",
        link: "/about",
        pageElement: <AboutPage/>
    },
    {
        name: "Projects",
        link: "/projects",
        pageElement: <ProjectsPage/>
    }
]

