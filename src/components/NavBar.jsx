import { Link } from "react-router-dom"

import { STARTPAGE, PAGES } from "../context/Pages"

import { useState } from "react";

import { AiFillAppstore } from "react-icons/ai";

import { useDarkMode } from "../hooks/useDarkMode";


const MenuButton = ({text}) => {

    const [hover, setHover] = useState(false);

    return(
        <>{/**hover:[&:nth-child(2)]:translate-x-2**/}
            <div className="group" onMouseEnter={ () => setHover(true)} onMouseLeave={() => setHover(false)}>
                <span className="">
                    &lt;
                </span>
                <span className={`${hover ? 'translate-x-1' : ''}`}>
                    {text}
                </span>
                { hover ? 
                    <span className="transition-opacity duration-500" onAnimationEnd={() => setHover(false)}>
                        /
                    </span> : null 
                }
                <span>
                    &gt;
                </span>
            </div>
        </>
    )
}

const NavBar = () => {
    

    const [color, setColor] = useState(false);
    //const [isDarkMode, toggleDarkMode] = useDarkMode();
    //<div onClick={toggleDarkMode} className="w-4 h-4 bg-black"></div>

    const changeColor = () => { 
        setColor(window.scrollY > 40);
        console.log(color)
    }

    window.addEventListener('scroll', changeColor);

    return(
        <>
            <header className={`w-full bg-white dark:bg-black z-50  top-0 left-0 sticky max-h-18 xl:px-side-spacing-xl transition-all ${color ? 'border-b-[0,5px] border-mix py-8 shadow-lg' : ' py-8'}`}>
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
                                        <li className="px-3 py-4">
                                            <Link to={page.link} className="">
                                                {page.name}   
                                            </Link>
                                        </li>
                                    )    
                                }
                                <MenuButton text="text"/>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}


export default NavBar;