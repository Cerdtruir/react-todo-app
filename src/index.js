import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NotMatch from './pages/NotMatch';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<TodoContainer />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
