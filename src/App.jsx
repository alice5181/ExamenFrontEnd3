import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Routes/Home.jsx'; 
import Favs from './Routes/Favs.jsx';
import Contact from './Routes/Contact.jsx'; 
import Detail from './Routes/Detail.jsx';
import { useContextGlobal } from './Components/utils/global.context'; 

function App() {
  const { theme, setTheme } = useContextGlobal();

  // Utiliza useEffect para observar cambios en el tema y aplicarlo
 useEffect(() => {
    document.body.className = theme; // Aplica el tema al cuerpo del documento
  }, [theme]);

  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/dentist/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;

