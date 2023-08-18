import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/feature1">Prendre une décision !</Link></li>
        <li><Link to="/feature2">Chatbot</Link></li>
        <li><Link to="/feature3">Restructuration cognitive</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
