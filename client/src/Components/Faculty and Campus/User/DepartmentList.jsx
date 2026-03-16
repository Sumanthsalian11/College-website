// src/Components/UserDepartmentList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaUserTie } from "react-icons/fa";
import axios from "axios";

export default function UserDepartmentList() {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedDepartments, setExpandedDepartments] = useState({});
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      const res = await axios.get("/api/faculty"); // adjust if full backend URL
      setFacultyList(res.data);
    } catch (err) {
      console.error("Error fetching faculty list:", err);
      setError("Unable to load faculty data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Group by department
  const grouped = facultyList.reduce((acc, fac) => {
    if (fac.department) {
      acc[fac.department] = acc[fac.department] || [];
      acc[fac.department].push(fac);
    }
    return acc;
  }, {});

  const toggleExpand = (dept) => {
    setExpandedDepartments((prev) => ({
      ...prev,
      [dept]: !prev[dept],
    }));
  };

  // ✅ helper: get photo src correctly
  const getPhotoSrc = (photo) => {
    if (!photo) return null;
    if (photo.startsWith("http")) return photo; // cloud / external URL
    if (photo.startsWith("data:image")) return photo; // already base64 with prefix
    return `data:image/jpeg;base64,${photo}`; // raw base64
  };

  return (
    <div className="max-w-6xl mx-auto mt-1 p-6 bg-white rounded-xl shadow-md overflow-hidden border border-black">
      {/* Top Heading */}
      <h2 className="mt-0 text-center text-3xl font-bold text-white shadow-md rounded-xl py-6 px-8 bg-gradient-to-r from-blue-600 to-cyan-400">
        📚 Departments & Faculty
      </h2>

      <div className="flex flex-col gap-8 bg-gray-100 rounded-xl p-6 mt-10">
        {loading ? (
          <p className="text-center">Loading Department and faculty...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : Object.keys(grouped).length === 0 ? (
          <p className="text-center">No faculty available.</p>
        ) : (
          Object.entries(grouped).map(([dept, faculty]) => {
            const isExpanded = expandedDepartments[dept];
            const displayedFaculty = isExpanded ? faculty : faculty.slice(0, 5);

            return (
              <div
                key={dept}
                className="bg-white p-6 mb-6 rounded-xl shadow-lg"
              >
                {/* Department Title */}
                <h3 className="text-2xl font-semibold text-blue-900 flex items-center justify-center gap-2 mb-4">
                  <FaBuilding /> {dept}
                </h3>

                {/* Faculty Grid */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-6">
                  {displayedFaculty.map((fac) => (
                    <div
                      key={fac._id}
                      onClick={() => navigate(`/user-faculty/${fac._id}`)}
                      className="bg-gray-50 p-4 text-center rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-white flex flex-col items-center"
                    >
                      <div className="mb-3">
                        {getPhotoSrc(fac.photo) ? (
                          <img
                            src={getPhotoSrc(fac.photo)}
                            alt={fac.name}
                            className="w-20 h-20 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://via.placeholder.com/80?text=No+Image";
                            }}
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center text-white text-3xl transition-transform duration-300 hover:scale-110">
                            <FaUserTie />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-center">
                        <h4 className="text-base font-medium text-gray-900">
                          {fac.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {fac.designation || "Lecturer"}
                        </p>
                        <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show More / Show Less */}
                {faculty.length > 5 && (
                  <div className="text-center mt-4">
                    <button
                      onClick={() => toggleExpand(dept)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      {isExpanded
                        ? "Show Less"
                        : `Show More (${faculty.length - 5})`}
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
