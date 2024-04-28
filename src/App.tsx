import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Recipes from "./pages/Recipes";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./components/Navbar";
import ListItemDetails from "./components/ListItemDetails";
import "./App.css";

const AppLayout: React.FC = () => (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<Recipes />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<ListItemDetails />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </>
);

const App: React.FC = () => {
    return (
        <Router>
            <AppLayout />
        </Router>
    );
};

export default App;
