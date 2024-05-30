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
import BlindsImage from './components/BlindsImage';
import CurtainsImage from './components/CurtainsImage';
import MeshImage from './components/MeshImage';
import About from './components/About';
import OurService from './components/OurService';
import Gallery from './components/Gallery';
import FormSection from './components/FormSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='/kitchenImage' element={<KitchenImage />} />
      <Route path='/blindsImage' element={<BlindsImage />} />
      <Route path='/curtainsImage' element={<CurtainsImage />} />
      <Route path='/meshImage' element={<MeshImage />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/services' element={<OurService />} />
      <Route path='/booknow' element={<FormSection />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
