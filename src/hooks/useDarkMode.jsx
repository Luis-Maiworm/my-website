import { useEffect, useState } from 'react';


export const useDarkMode = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };


    //gets called everytime [isDarkMode] changes
    useEffect(() => {
        
        /** tailwind.config.js "darkMode" prop is set to 'class' 
         *  another option prop being set to 'media' -> uses "prefers-color-scheme" CSS feature
         * **/
        
        //todo later: add localStorage or system preference support on mounting
        // one possible to respect OS preference -> localStorage.removeItem('theme')
        window.document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return [isDarkMode, toggleDarkMode];
}
