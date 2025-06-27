import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <span className="navbar-brand">LMS Portal</span>
    <ul className="navbar-nav me-auto">
      <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/courses">Courses</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/quizzes">Quizzes</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/progress">Progress</Link></li>
    </ul>
  </nav>
);

export default Header;
