import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </>
);

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

