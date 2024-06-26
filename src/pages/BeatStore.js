import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './BeatStore.css'

const BeatStore = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Beat Store</h2>
        <p>Browse and purchase my beats.</p>
      </main>
      <Footer />
    </div>
  );
};

export default BeatStore;