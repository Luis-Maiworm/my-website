import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Startpage from './pages/Startpage';

const App = () => {

  return (
    <>
      <Router>
        <body className="w-screen h-screen font-jet">
          <NavBar/>
            <main className="py-10 xl:px-side-spacing">
              <Routes>
                <Route path="/" element={<Startpage/>}/>
                <Route path="/about" element={<Startpage/>}/>

              </Routes>
            </main>
          <Footer/>
        </body>
      </Router>
    </>
  )
}

export default App;
