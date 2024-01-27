import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { STARTPAGE, PAGES } from './context/Pages';


const App = () => {

  const Page = () => {
    return(
      <main className="py-10 px-side-spacing-sm xl:px-side-spacing-xl">
        <Routes>
          <Route path={STARTPAGE.link} element={STARTPAGE.pageElement}/>
          {
            PAGES.map((page, i) => (
              <Route path={page.link} element={page.pageElement} key={i}></Route>
            ))
          }
        </Routes>
      </main>
    )
  }

  return (
    <>
      <Router>
        <div className="w-full h-full font-jet">
          <NavBar/>
          <Page/>
          <Footer/>
        </div>
      </Router>
    </>
  )
}

export default App;
