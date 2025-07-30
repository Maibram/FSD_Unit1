import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './Componets/Header';
import Slider from './Componets/Slider';
import ProductionHouse from './Componets/ProductionHouse';
import GenreMovieList from './Componets/GenreMovieList';

// Import your pages
import Home from './pages/Home';
import Search from './pages/Search';
import Movies from './pages/Movies';
import Series from './pages/Series';
import Originals from './pages/Originals';
import WatchList from './pages/Watchlist';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <ProductionHouse />
            <GenreMovieList />
          </>
        } />
        <Route path="/search" element={<Search />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/originals" element={<Originals />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </Router>
  );
}

export default App;
