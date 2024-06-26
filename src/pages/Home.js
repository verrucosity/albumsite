import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
         <h2>Welcome To My Beat Store</h2>
         <p>find my latest albums and singles here</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;