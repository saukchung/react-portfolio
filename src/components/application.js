import './application.css';
import React, { useState, useEffect } from 'react';
import Nav from './nav';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact'
import Resume from './resume'
import Footer from './footer';


function Application() {
  const [currentPage, setCurrentPage] = useState('About');

  useEffect(() => {
    
  })

  const renderPage = () => {
    if (currentPage === 'About') {
      return < About />
    }
    if (currentPage === 'Portfolio') {
      return < Portfolio />
    }
    if (currentPage === 'Contact') {
      return < Contact />
    } 
    if (currentPage === "Resume") {
      return < Resume />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="application">
      < Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
      {renderPage()}
      < Footer /> 
    </div>
  );
}

export default Application;
