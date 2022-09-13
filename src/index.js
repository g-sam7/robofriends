import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='flex flex-wrap'>
      {robots.map((robot) => (
        <div key={robot.id}>
          <Card 
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        </div>
      ))}
    </div>
  </React.StrictMode>
);

reportWebVitals();
