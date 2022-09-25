import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { robots } from './robots';
import CardList from './CardList';
import { Header } from './Header';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <Header />
      <CardList robots={robots} />
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();
