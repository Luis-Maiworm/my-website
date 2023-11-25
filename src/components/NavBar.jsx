import { Link } from "react-router-dom"

import { STARTPAGE, PAGES } from "../context/Pages"

import { useState } from "react";

import { Bs0Circle } from "react-icons/bs";

PAGES.unshift(STARTPAGE);


const MenuButton = () => {
    return(
        <>
        </>
    )
}

const NavBar = () => {
    

    const [color, setColor] = useState(false);

    const changeColor = () => { 
        setColor(window.scrollY >= 90);
        console.log(color)
    }

    window.addEventListener('scroll', changeColor);


    return(
        <>
            <header className={`w-full bg-blue-50 z-50 p-8 top-0 left-0 sticky border-b-[1px] border-mix xl:px-side-spacing ${color ? 'bg-transparent' : ''}`}>
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <div className="bg-blue-200 flex items-center rounded-md">
                        <Link to="/" className="flex items-center p-2 whitespace-nowrap">
                            <span>developedby _</span>
                        </Link>
                        <Bs0Circle className={`text-blue-500 ${color ? 'text-black' : ''}`}/>

                    </div>
                    <div className="bg-blue-200">
                        <nav className="">
                            <ul className="flex align-middle justify-between">
                        
                                {   
                                    PAGES.map((page) => 
                                        <li className="">
                                            <Link to={page.link} className="px-3 py-4">
                                                {page.name}   
                                            </Link>
                                        </li>
                                    )    
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}


export default NavBar;