import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupPage from "./components/SignupPage";
import SigninPage from "./components/Signin";
import AccountSettings from "./components/AccountSettings";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
