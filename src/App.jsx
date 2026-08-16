import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Internships from "./pages/Internships/Internships";
import InternshipDetails from "./pages/InternshipDetails/InternshipDetails";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyApplications from "./pages/MyApplications/MyApplications";
import SavedInternships from "./pages/SavedInternships/SavedInternships";
import Profile from "./pages/Profile/Profile";
import Resume from "./pages/Resume/Resume";
import CareerPreparation from "./pages/CareerPreparation/CareerPreparation";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route
          path="/internship/:id"
          element={<InternshipDetails />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<MyApplications />} />
        <Route path="/saved" element={<SavedInternships />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/career" element={<CareerPreparation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;