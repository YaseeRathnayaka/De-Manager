import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Schedule from './Components/Pages/Schedule/Schedule'
import CalenderView from './Components/Pages/CalenderView/CalenderView'
import ListView from './Components/Pages/ListView/ListView';
import Login from './Components/Pages/Login/Login';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/calendar" element={<CalenderView />} />
          <Route path="/listview" element={<ListView />} />
          <Route path="login" element={<Login />}  />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
