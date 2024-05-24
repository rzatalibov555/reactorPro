import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import PageNotFound from './components/NotFound/PageNotFound';
import {Layout} from './components/Layout/Layout'

function App() {
  return (
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index  element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<PageNotFound />}/>
          </Route>
        </Routes>
  );
}

export default App;
