import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Courses from './pages/Courses';
import Quizzes from './pages/Quizzes';
import Progress from './pages/Progress';
import Home from './pages/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
