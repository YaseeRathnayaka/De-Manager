import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Schedule from './Components/Pages/Schedule/Schedule';
import CalendarView from './Components/Pages/CalenderView/CalenderView';
import ListView from './Components/Pages/ListView/ListView';
import { AppointmentProvider } from './contexts/AppointmentContext'; // Adjust this import based on your project structure

function App() {
  return (
    <Router>
      <AppointmentProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/schedule-appointment" element={<Schedule />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/listview" element={<ListView />} />
          </Routes>
        </div>
      </AppointmentProvider>
    </Router>
  );
}

export default App;
