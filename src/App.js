import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieListing from './components/MovieListing/MovieListing';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movie/:imdbID' element={<MovieListing />} />
          <Route path='*' element={<PageNotFound/>} /> 
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
