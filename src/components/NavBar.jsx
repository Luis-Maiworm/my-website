import { Link } from "react-router-dom"

import { STARTPAGE, PAGES } from "../context/Pages"

import { useState } from "react";

import { AiFillAppstore } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDarkMode } from "../hooks/useDarkMode";


const MenuButton = ({text}) => {

    const [hover, setHover] = useState(false);
    /**
     * MenuButton -> yet to be implemented!
     */
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
    

    const [scrolled, setScrolled] = useState(false);
    const [navIsVisible, setNavVisible] = useState(true); 
    //const [isDarkMode, toggleDarkMode] = useDarkMode();
    //<div onClick={toggleDarkMode} className="w-4 h-4 bg-black"></div>

    const changeScrolled = () => { 
        setScrolled(window.scrollY > 40);
        console.log(scrolled)
    }

    window.addEventListener('scroll', changeScrolled);

    const NavbarLink = ({page}) => {
        return(
            <Link to={page.link} className="py-1 px-2 hover:bg-gray-200 rounded-md block">
                {page.name}   
            </Link>
        )
    }


    return(
        <>
            <header className={`w-full bg-white dark:bg-black z-50 top-0 left-0 sticky max-h-18 px-side-spacing-sm xl:px-side-spacing-xl transition-all ${scrolled ? 'border-b-[0,5px] border-mix py-8 shadow-lg' : ' py-8'}`}>
                <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl">
                    
                    <Link to="/" className="flex items-center p-2 whitespace-nowrap">
                        <AiFillAppstore className={`bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text w-12 h-auto ${scrolled ? '' : ''}`}/>
                        
                        {
                            scrolled ? <span className="">developedby</span> : null  
                        }

                    </Link>


                    <div onClick={() => setNavVisible(!navIsVisible)} className="flex sm:order-2 justify-center items-center py-2 px-2 hover:bg-gray-200 rounded-md cursor-pointer sm:hidden">
                        <GiHamburgerMenu className="w-8 h-auto"/>
                    </div>

                    
                    <div onClick={() => setNavVisible(!navIsVisible)} className={`flex flex-col sm:order-2 justify-center items-center py-2 px-2 hover:bg-gray-200 rounded-md cursor-pointer sm:hidden ${navIsVisible ? '' : ''}`}>
                        <span className={`w-[30px] h-1 bg-black my-1 transition-all ${navIsVisible ? '' : 'translate-y-[10px] rotate-45'}`}></span>
                        <span className={`w-[30px] h-1 bg-black my-1 transition-all ${navIsVisible ? '' : 'opacity-0'}`}></span>
                        <span className={`w-[30px] h-1 bg-black my-1 transition-all ${navIsVisible ? '' : '-translate-y-[13.5px] -rotate-45'}`}></span>
                    </div>



                    
                        
                            <div className={`sm:order-1 bg-slate-50 w-full sm:w-auto transition-all duration-200 ease-in -z-10  ${navIsVisible ? '' : '-translate-y-[10px] opacity-0'}`}>
                                <nav className="">
                                    <ul className="flex align-middle justify-between flex-col sm:flex-row"> 
                                        
                                        {
                                            <li className={`px-3 py-4 transition-all duration-700 ${navIsVisible ? '' : '-translate-y-[30px] opacity-0'}`}>
                                                <NavbarLink page={STARTPAGE}/>
                                            </li>
                                        }
                                                            
                                        {   
                                            PAGES.map((page, i) => 
                                            
                                                <li className={`px-3 py-4 transition-all duration-700 ${navIsVisible ? '' : ''}`} key={i}>
                                                    <NavbarLink page={page}/>
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