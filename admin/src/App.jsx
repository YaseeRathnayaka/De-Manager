import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Schedule from './Components/Pages/Schedule/Schedule'
import CalenderView from './Components/Pages/CalenderView/CalenderView'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/calendar" element={<CalenderView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
