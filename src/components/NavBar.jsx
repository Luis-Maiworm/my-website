import { Link } from "react-router-dom"

import { STARTPAGE, PAGES } from "../context/Pages"

import { useState } from "react";

import { AiFillAppstore } from "react-icons/ai";



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
            <header className={`w-full bg-white z-50  top-0 left-0 sticky max-h-18 xl:px-side-spacing transition-all ${color ? 'border-b-[0,5px] border-mix px-8 py-4 shadow-lg' : 'p-8'}`}>
                <div className="flex flex-wrap items-center justify-between mx-auto">
                    <div className="flex items-center rounded-md">
                        <Link to="/" className="flex items-center p-2 whitespace-nowrap">
                            <AiFillAppstore className={`bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text w-12 h-auto ${color ? '' : ''}`}/>
                            
                            {
                                color ? <span className="">developedby</span> : null
                                    
                            }

                        </Link>
                    </div>
                    <div className="">
                        <nav className="">
                            <ul className="flex align-middle justify-between"> 
                                
                                {/**
                                <li className="">
                                    <Link to={STARTPAGE.link} className="px-3 py-4">
                                        {STARTPAGE.name}   
                                    </Link>
                                </li>  
                                 */}
                                                     
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