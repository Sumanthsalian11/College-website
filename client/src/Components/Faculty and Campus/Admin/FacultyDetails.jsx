import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function FacultyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedFaculty, setEditedFaculty] = useState({});

  const departments = [
    "Dept of ComputerScience",
    "Dept of Commerce",
    "Dept. of Economics",
    "Dept. of Botany",
    "Dept. of Zoology",
    "Dept. of Physics",
    "Dept. of Chemistry",
    "Dept. of Mathematics",
    "Dept. of English",
    "Dept. of Hindi",
    "Dept. of History",
    "Dept. of Journalism",
    "Dept. of Political Science",
    "Dept. of Gandhian Studies",
    "Dept. Of Physical Education",
    "Dept. of Library",
  ];

  useEffect(() => {
    axios
      .get(`/api/faculty/${id}`)
      .then((res) => {
        setFaculty(res.data);
        setEditedFaculty(res.data);
      })
      .catch((err) => console.error("Error fetching faculty:", err));
  }, [id]);

  const handleEditChange = (e) => {
    setEditedFaculty({
      ...editedFaculty,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedFaculty((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedFaculty((prev) => ({ ...prev, resume: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  const isValidContact = (number) => /^[6-9]\d{9}$/.test(number);

  const handleSave = async () => {
    if (!isValidContact(editedFaculty.contact)) {
      alert("Contact number must be 10 digits and start with 6, 7, 8, or 9.");
      return;
    }

    try {
      await axios.put(`/api/faculty/${id}`, editedFaculty);
      setFaculty(editedFaculty);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating faculty:", error);
      alert("Failed to update faculty");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this faculty?")) {
      try {
        await axios.delete(`/api/faculty/${id}`);
        alert("Faculty removed successfully");
        navigate("/department-details", {
          replace: true,
          state: { refresh: true },
        });
      } catch (error) {
        console.error("Error deleting faculty:", error);
        alert("Failed to delete faculty");
      }
    }
  };

  const goToMainPage = () => navigate("/dashboard");
  const goBackToDepartmentList = () => navigate("/department-details");

  if (!faculty) return <p className="text-center">Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h2 className="text-2xl font-bold mb-6">Faculty Details</h2>

      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-6 space-y-6">
        {/* 🖼 Photo */}
        <div className="flex justify-center">
          {isEditing ? (
            <div className="flex flex-col items-center space-y-3">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
              />
              {editedFaculty.photo && (
                <img
                  src={editedFaculty.photo}
                  alt="Preview"
                  className="w-40 h-40 object-cover rounded-lg shadow"
                />
              )}
            </div>
          ) : faculty.photo ? (
            <img
              src={faculty.photo.startsWith("data:") ? faculty.photo : `data:image/jpeg;base64,${faculty.photo}`}
              alt="Faculty"
              className="w-40 h-40 object-cover rounded-lg shadow"
            />
          ) : (
            <p className="text-gray-500">No photo</p>
          )}
        </div>

        {/* Fields */}
        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="font-semibold">Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                className="w-full border rounded px-3 py-2 mt-1"
                value={editedFaculty.name || ""}
                onChange={handleEditChange}
              />
            ) : (
              <p>{faculty.name}</p>
            )}
          </div>

          {/* Department */}
          <div>
            <label className="font-semibold">Department:</label>
            {isEditing ? (
              <select
                name="department"
                className="w-full border rounded px-3 py-2 mt-1"
                value={editedFaculty.department || ""}
                onChange={handleEditChange}
              >
                <option value="">Select Department</option>
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
            ) : (
              <p>{faculty.department}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="font-semibold">Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                className="w-full border rounded px-3 py-2 mt-1"
                value={editedFaculty.email || ""}
                onChange={handleEditChange}
              />
            ) : (
              <p>{faculty.email}</p>
            )}
          </div>

          {/* Contact */}
          <div>
            <label className="font-semibold">Contact:</label>
            {isEditing ? (
              <input
                type="text"
                name="contact"
                className="w-full border rounded px-3 py-2 mt-1"
                value={editedFaculty.contact || ""}
                onChange={handleEditChange}
              />
            ) : (
              <p>{faculty.contact}</p>
            )}
          </div>

          {/* Qualification */}
          <div>
            <label className="font-semibold">Qualification:</label>
            {isEditing ? (
              <input
                type="text"
                name="qualification"
                className="w-full border rounded px-3 py-2 mt-1"
                value={editedFaculty.qualification || ""}
                onChange={handleEditChange}
              />
            ) : (
              <p>{faculty.qualification}</p>
            )}
          </div>

          {/* Joining Date */}
          <div>
            <label className="font-semibold">Joining Date:</label>
            {isEditing ? (
              <input
                type="date"
                name="joiningDate"
                className="w-full border rounded px-3 py-2 mt-1"
                value={editedFaculty.joiningDate?.substring(0, 10) || ""}
                onChange={handleEditChange}
              />
            ) : (
              <p>
                {faculty.joiningDate
                  ? new Date(faculty.joiningDate).toLocaleDateString()
                  : ""}
              </p>
            )}
          </div>

          {/* Resume Upload / View */}
          <div>
            <label className="font-semibold">Resume:</label>
            {isEditing ? (
              <div className="space-y-2">
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={handleResumeUpload}
                />
                {editedFaculty.resume && (
                  <p className="text-green-600">PDF uploaded successfully</p>
                )}
              </div>
            ) : faculty.resume ? (
              <div className="mt-3">
                <iframe
                  src={
                    faculty.resume.startsWith("data:")
                      ? faculty.resume
                      : `data:application/pdf;base64,${faculty.resume}`
                  }
                  width="100%"
                  height="500px"
                  title="Resume Preview"
                  className="border rounded-lg"
                />
              </div>
            ) : (
              <p className="text-gray-500">No resume uploaded</p>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center pt-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Remove
              </button>
            </>
          )}
          <button
            onClick={goToMainPage}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Mainpage
          </button>
          <button
            onClick={goBackToDepartmentList}
            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
