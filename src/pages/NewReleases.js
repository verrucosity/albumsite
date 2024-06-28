import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NewReleases.css';

const NewReleases = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>New Releases</h2>
        <p>Check out the latest tracks and albums released by the artist.</p>
      </main>
      <Footer />
    </div>
  );
};

export default NewReleases;
