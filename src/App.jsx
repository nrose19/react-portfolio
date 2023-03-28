import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from './components/Navigation';
import MainPage from './pages/Main';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import PortfolioPage from './pages/Portfolio';
import ContactMe from './pages/ContactMe';


import './index.css';
const styles = {
  contentContainer: {
    minHeight: 'calc(100vh - 190px)',
  },
  footerPin: {
    position: 'relative',
    left: '0',
    bottom: '0',
  }
}


function App() {
  document.body.style.backgroundColor="#f4f4f4"
  return (
    <Router>
      <>
        <Nav />
        <div style={styles.contentContainer}>
          <Routes>
            <Route path='/react-portfolio' element={<MainPage />} />
            <Route path='/nrose19/react-portfolio/about-me' element={<AboutMe />} />
            <Route path='/nrose19/react-portfolio/portfolio' element={<PortfolioPage />} />
            <Route path='/nrose19/react-portfolio/contact-me' element={<ContactMe />} />
          </Routes>
        </div>
        <div style={styles.footerPin}>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
