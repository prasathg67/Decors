import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './assets/css/slicklider.css';
import './assets/css/aos.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KitchenImage from './components/KitchenImage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/kitchenImage' element={<KitchenImage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
