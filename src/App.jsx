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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

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
       <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/my-applications"
  element={
    <ProtectedRoute>
      <MyApplications />
    </ProtectedRoute>
  }
/>

<Route
  path="/saved"
  element={
    <ProtectedRoute>
      <SavedInternships />
    </ProtectedRoute>
  }
/>

<Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/resume"
  element={
    <ProtectedRoute>
      <Resume />
    </ProtectedRoute>
  }
/>
        <Route path="/career" element={<CareerPreparation />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;