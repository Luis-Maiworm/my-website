import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { STARTPAGE, PAGES } from './context/Pages';


const App = () => {

  return (
    <>
      <Router>
        <body className="w-full h-full font-jet">
          <NavBar/>
            <main className="py-10 px-side-spacing-sm xl:px-side-spacing-xl">
              <Routes>
                <Route path={STARTPAGE.link} element={STARTPAGE.pageElement}/>
                {
                  PAGES.map((page) => (
                    <Route path={page.link} element={page.pageElement}></Route>
                  ))
                }
              </Routes>
            </main>
          <Footer/>
        </body>
      </Router>
    </>
  )
}

export default App;
