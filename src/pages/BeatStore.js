import React from 'react';
import ReactPlayer from 'react-player';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './BeatStore.css';

const beats = [
  { title: 'Beat 1', description: 'A great beat', url: 'https://www.example.com/beat1.mp3', coverArt: 'https://imgur.com/UWspuqj.jpg', price: '$20' },
  { title: 'Beat 2', description: 'Another great beat', url: 'https://www.example.com/beat2.mp3', coverArt: 'https://imgur.com/aqd9vKv.jpg', price: '$25' },
  // Add more beats here
];

const BeatStore = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h2 className="text-4xl mb-4">Beat Store</h2>
        <p className="mb-8">Browse and purchase beats created by the artist.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beats.map((beat, index) => (
            <div key={index} className="beat p-4 border rounded-lg shadow-lg bg-white text-black">
              <img src={beat.coverArt} alt={`${beat.title} cover art`} className="mb-2 w-full h-48 object-cover rounded" />
              <h3 className="text-2xl mb-2">{beat.title}</h3>
              <p className="mb-2">{beat.description}</p>
              <ReactPlayer url={beat.url} controls className="mb-2" />
              <p className="font-bold">{beat.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Buy Now</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeatStore;
