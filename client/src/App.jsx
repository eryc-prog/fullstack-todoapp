import { Routes, Route } from "react-router-dom";
import Dashboard from "/src/pages/Dashboard.jsx";
import LandingPage from "/src/pages/LandingPage.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/UserDashboard" element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
