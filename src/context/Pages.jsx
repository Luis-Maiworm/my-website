
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";

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
        name: "Skills",
        link: "/skills",
        pageElement: <AboutPage/>
    }
]

