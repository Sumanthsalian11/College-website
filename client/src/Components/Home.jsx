// src/pages/Home.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">🏫 College</h2>
        <ul className="space-y-4">
          <li
            onClick={() => navigate("/faculty")}
            className="cursor-pointer hover:text-blue-300"
          >
            👨‍🏫 Faculty
          </li>
          <li
            onClick={() => navigate("/department-details")}
            className="cursor-pointer hover:text-blue-300"
          >
            🏛 Departments
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800">
            Admin Dashboard
          </h1>
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          <div
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/faculty")}
          >
            <h2 className="text-lg font-bold mb-2">👨‍🏫 Faculty</h2>
            <p className="text-gray-600">Add faculty information.</p>
          </div>

          <div
            className="bg-white rounded-xl shadow-md p-6 cursor-pointer hover:shadow-lg transition"
            onClick={() => navigate("/department-details")}
          >
            <h2 className="text-lg font-bold mb-2">🏛 Departments</h2>
            <p className="text-gray-600">Update and view Faculty details.</p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
