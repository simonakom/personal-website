import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import FullProjectsArchive from './components/FullProjectArchive.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/full-projects-archive" element={<FullProjectsArchive />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);