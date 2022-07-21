import './application.css';
import React, { useState } from 'react';
import Nav from './nav';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact'
import Footer from './footer';


function Application() {
  const [currentPage, setCurrentPage] = useState('About');

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
  }

  return (
    <div className="application">
      < Nav />
      < About />
      < Portfolio />
      < Contact />
      < Footer /> 
    </div>
  );
}

export default Application;
