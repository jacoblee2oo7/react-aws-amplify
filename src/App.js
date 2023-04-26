import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Services from './components/pages/Services';
import MessageMe from './components/pages/message-me';
import projectmanagement from './components/pages/projectmanagement';
import financialmanagement from './components/pages/financialmanagement';
import safetymanagement from './components/pages/safetymanagement';


function App() {
  return (
    <div className="siteLayer">
      <div className="aboveNav">

      </div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/message-me' component={MessageMe} />
        <Route path='/projectmanagement' component={projectmanagement} />
        <Route path='/financialmanagement' component={financialmanagement} />
        <Route path='/safetymanagement' component={safetymanagement} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;