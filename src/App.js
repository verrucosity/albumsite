import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NewReleases from './pages/NewReleases';
import BeatStore from './pages/BeatStore';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/beat-store" element={<BeatStore />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
