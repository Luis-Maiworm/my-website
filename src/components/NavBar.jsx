import { Link } from "react-router-dom"

const MenuButton = () => {
    return(
        <>
        </>
    )
}

const NavBar = () => {
    return(
        <>
            <header className="w-full bg-blue-50 z-50 p-8 top-0 left-0 sticky border-b-[1px] border-mix xl:px-side-spacing">
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <div className="bg-blue-200 flex items-center rounded-md">
                        <Link to="/" className="flex items-center p-2">
                            <span>developedby _</span>
                        </Link>
                    </div>
                    <div className="bg-blue-200">
                        <nav className="">
                            <ul className="flex align-middle justify-between">
                                <li className="">
                                    <Link to="/about" className="px-3 py-4">
                                        About   
                                    </Link>
                                </li>
                                <li className="">
                                    <Link to ="/" className="px-3 py-4">
                                        Projects
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}


export default NavBar;