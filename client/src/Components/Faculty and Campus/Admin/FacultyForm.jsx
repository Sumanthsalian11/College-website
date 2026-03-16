// src/components/FacultyForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FacultyForm = () => {
  const [faculty, setFaculty] = useState({
    name: "",
    department: "",
    email: "",
    contact: "",
    qualification: "",
    joiningDate: "",
    photo: "",
    resume: "",
  });

  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    setFaculty({ ...faculty, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFaculty((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFaculty((prev) => ({ ...prev, resume: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid PDF file");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contactRegex = /^[6-9][0-9]{9}$/;
    if (!contactRegex.test(faculty.contact)) {
      alert("Contact number must be exactly 10 digits and start with 6-9");
      return;
    }

    try {
      await axios.post("/api/faculty", faculty);
      setSaved(true);
      setFaculty({
        name: "",
        department: "",
        email: "",
        contact: "",
        qualification: "",
        joiningDate: "",
        photo: "",
        resume: "",
      });
    } catch (error) {
      console.error("Error saving faculty:", error);
      alert("Failed to save faculty");
    }
  };

  const handleCancel = () => {
    setFaculty({
      name: "",
      department: "",
      email: "",
      contact: "",
      qualification: "",
      joiningDate: "",
      photo: "",
      resume: "",
    });
    setSaved(false);
  };

  const goToMainPage = () => {
    navigate("/dashboard");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Faculty</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={faculty.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-400"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium">Department:</label>
          <select
            name="department"
            value={faculty.department}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-400"
          >
            <option value="">Select Department</option>
            {departments.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={faculty.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-400"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium">Contact Number:</label>
          <input
            type="text"
            name="contact"
            value={faculty.contact}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-400"
          />
        </div>

        {/* Qualification */}
        <div>
          <label className="block text-sm font-medium">Qualification:</label>
          <input
            type="text"
            name="qualification"
            value={faculty.qualification}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-400"
          />
        </div>

        {/* Joining Date */}
        <div>
          <label className="block text-sm font-medium">Joining Date:</label>
          <input
            type="date"
            name="joiningDate"
            value={faculty.joiningDate}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-400"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <h3 className="text-lg font-semibold">Resume Upload (PDF)</h3>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleResumeUpload}
            className="mt-2"
          />
          {faculty.resume && (
            <p className="text-green-600 text-sm mt-1">Resume uploaded ✔</p>
          )}
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium">Faculty Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="mt-2"
          />
          {faculty.photo && (
            <img
              src={faculty.photo}
              alt="Preview"
              className="w-28 mt-3 rounded-lg shadow"
            />
          )}
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Save Faculty
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={goToMainPage}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            MainPage
          </button>
        </div>

        {saved && (
          <p className="text-green-600 font-semibold mt-4 text-center">
            Faculty Saved Successfully 🎉
          </p>
        )}
      </form>
    </div>
  );
};

export default FacultyForm;
