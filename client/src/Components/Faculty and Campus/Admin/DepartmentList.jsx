import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DepartmentList() {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      const res = await axios.get("/api/faculty");
      setFacultyList(res.data);
    } catch (err) {
      console.error("Error fetching faculty list:", err);
    } finally {
      setLoading(false);
    }
  };

  const grouped = facultyList.reduce((acc, fac) => {
    if (fac.department) {
      acc[fac.department] = acc[fac.department] || [];
      acc[fac.department].push(fac);
    }
    return acc;
  }, {});

  const goToMainPage = () => {
    navigate("/dashboard");
  };

  return (
    <div className="mt-12 p-4 border border-black rounded-2xl w-[1300px] mx-auto">
      <h2 className="text-center text-2xl font-bold mb-6">Update Faculty</h2>

      {loading ? (
        <p className="text-center">Loading faculty list...</p>
      ) : Object.keys(grouped).length === 0 ? (
        <p className="text-center">No faculty available.</p>
      ) : (
        <table className="w-full border border-black bg-white">
          <thead>
            <tr>
              <th className="border border-black p-3 text-white text-center bg-gradient-to-r from-[#004080] via-[#0066cc] to-[#0099ff]">
                Department
              </th>
              <th className="border border-black p-3 text-white text-center bg-gradient-to-r from-[#004080] via-[#0066cc] to-[#0099ff]">
                Faculty
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(grouped).map(([dept, faculty]) => (
              <tr key={dept}>
                <td className="border border-black p-3 font-bold text-center text-lg">
                  {dept}
                </td>
                <td className="border border-black p-3 text-left">
                  <ul className="list-disc pl-6 space-y-2">
                    {faculty.map((fac) => (
                      <li
                        key={fac._id}
                        onClick={() => navigate(`/faculty/${fac._id}`)}
                        className="cursor-pointer text-base hover:text-blue-600 hover:underline flex items-center gap-2"
                      >
                        {fac.photo && (
                          <img
                            src={fac.photo}
                            alt=""
                            className="w-8 h-8 rounded-full object-cover"
                          />
                        )}
                        {fac.name}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={goToMainPage}
          className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Mainpage
        </button>
      </div>
    </div>
  );
}
