import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// User Pages
import Home from "./Components/Home & About/Pages/Home.jsx";
import Vision from "./Components/Home & About/Pages/Vision.jsx";
import AmruthaMahotsava from "./Components/Home & About/Pages/Amrutha.jsx";
import Principal from "./Components/Home & About/Pages/Principal.jsx";
import Contact from "./Components/Home & About/Pages/ContactUs.jsx";
import Manage from "./Components/Home & About/Pages/Management.jsx";
import History from "./Components/Home & About/Pages/History.jsx";
import Gallery from "./Components/Home & About/Pages/Gallary.jsx";
import Apply from "./Components/Home & About/Pages/Apply.jsx";
import LogOut from "./Components/Home & About/Pages/LogOut.jsx";
import Rank from "./Components/Home & About/Pages/RankList.jsx";
import Swc from "./Components/Home & About/Pages/Swc25.jsx";

import Facilities from "./Components/Activities/Facilities/Facilities";
import WhatsNew from "./Components/Activities/WhatsNew/WhatsNew";
import Events from "./Components/Activities/Events/Events";
import Sports from "./Components/Activities/Sports/Sports";
import Clubs from "./Components/Activities/Clubs/Clubs";
import Alumni from "./Components/Activities/Alumni/Alumni";
import NccNss from "./Components/Activities/NccNss/NccNss";

import Garden from "./Components/Faculty and Campus/User/Garden.jsx";
import ClubsPage from "./Components/Faculty and Campus/User/CampusCell.jsx";
import Block from "./Components/Faculty and Campus/User/CampusBlock.jsx";
import Museum from "./Components/Faculty and Campus/User/Museum.jsx";
import UserDepartmentList from "./Components/Faculty and Campus/User/DepartmentList.jsx";
import UserFaculty from "./Components/Faculty and Campus/User/UserFaculty.jsx";
import UserLibraryPage from "./Components/Faculty and Campus/User/Library.jsx";

// Admin Pages
import DashBoard from "./Components/Home.jsx";
import FacultyForm from "./Components/Faculty and Campus/Admin/FacultyForm.jsx";
import DepartmentList from "./Components/Faculty and Campus/Admin/DepartmentList.jsx";
import FacultyDetails from "./Components/Faculty and Campus/Admin/FacultyDetails.jsx";

// Common Components
import HeaderSection from "./Components/HeaderNavigation.jsx"; // User navigation
import ScrollToTop from "./Components/SlideTop.jsx";
import ScrollUpButton from "./Components/ScrollUpButton.jsx";
import Foot from "./Components/FooterTab.jsx";

// Simple Admin Header
function AdminHeader() {
  return (
    <header className="bg-gray-800 text-white text-center py-4 shadow-md">
      <h1 className="text-xl font-bold">Admin Panel</h1>
    </header>
  );
}

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  const location = useLocation();

  // Define admin routes
  const adminRoutes = ["/dashboard", "/faculty", "/department-details"];
  const isAdminPage =
    adminRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/faculty/");

  return (
    <>
      {/* Conditionally render Header */}
      {isAdminPage ? <AdminHeader /> : <HeaderSection />}

      <ScrollToTop />

      <Routes>
        {/* User routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/amrutha-mahotsava" element={<AmruthaMahotsava />} />
        <Route path="/vision_mission" element={<Vision />} />
        <Route path="/vision-mission" element={<Vision />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/management" element={<Manage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/history" element={<History />} />
        <Route path="/ranklist" element={<Rank />} />
        <Route path="/logout-event" element={<LogOut />} />
        <Route path="/swc25" element={<Swc />} />
        <Route path="/facilities" element={<Facilities />} />

        <Route path="/cell" element={<ClubsPage />} />
        <Route path="/department" element={<UserDepartmentList />} />
        <Route path="/block" element={<Block />} />
        <Route path="/garden" element={<Garden />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/user-faculty/:id" element={<UserFaculty />} />
        <Route path="/library" element={<UserLibraryPage />} />

        {/* Admin routes */}
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/faculty" element={<FacultyForm />} />
        <Route path="/department-details" element={<DepartmentList />} />
        <Route path="/faculty/:id" element={<FacultyDetails />} />

        {/* Other activities */}
        <Route path="/Alumni/Alumni" element={<Alumni />} />
        <Route path="/NccNss/NccNss" element={<NccNss />} />
        <Route path="/Clubs/Clubs" element={<Clubs />} />
        <Route path="/Sports/Sports" element={<Sports />} />
        <Route path="/whatsnew" element={<WhatsNew />} />

        <Route path="/events/*" element={<Events />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer + Scroll button visible always */}
      <ScrollUpButton />
      <Foot />
    </>
  );
}

export default App;
