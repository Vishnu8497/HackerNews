import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BestStories from './components/BestStories/BestStories';
import Navigation from './components/Navigation/Navigation';
import TopStories from './components/TopStories/TopStories';
import NewStories from './components/NewStories/NewStories';

function App() {
  return (  
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<NewStories />} />
          <Route path="/topstories" element={<TopStories />} />
          <Route path="/beststories" element={<BestStories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 
