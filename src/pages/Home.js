import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <motion.h2
          className="text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to the Music Website
        </motion.h2>
        <motion.p
          className="mt-4 text-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          find my latest beats here.
        </motion.p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
