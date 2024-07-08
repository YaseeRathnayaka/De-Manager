import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Schedule from './Components/Pages/Schedule/Schedule';
import CalendarView from './Components/Pages/CalenderView/CalenderView';
import ListView from './Components/Pages/ListView/ListView';
import Settings from './Components/Containers/Settings/Settings';
import { AppointmentProvider } from './contexts/AppointmentContext'; 
import { ThemeProvider } from './contexts/ThemeContext'; // Adjust this import based on your project structure
import Requests from './Components/Pages/Requests/Requests';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppointmentProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/schedule-appointment" element={<Schedule />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/listview" element={<ListView />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/requests" element={<Requests />} />
            </Routes>
          </div>
        </AppointmentProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
