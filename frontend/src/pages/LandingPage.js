// src/pages/LandingPage.js
import React from 'react';
import Header from '../components/Header'; // Corrected import path
import Footer from '../components/Footer'; // Corrected import path
import '../assets/styles/LandingPage.css'; // Corrected import path

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <h1 className="main-title">Academia Eats</h1>
        <p className="main-slogan">
          Academia Eats is a way for Universities across America to provide better access to food-pantry programs to their student bodies.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
