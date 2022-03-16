import React from 'react';
import {BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';
import 'materialize-css';


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
            <Route path="/" element={<TodosPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/*" element={<Navigate replace to="/"/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
