import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout/SideBar/Page';
import Home from './Home/Page';
import './Style.css';
import ResultPage from './Resultat/Page';


const App = () => {
  return (
    <div className='App_Container'>
      <Router>
        <Layout />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
