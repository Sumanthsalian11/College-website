import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserFaculty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(null);

  // ✅ helper: get photo src correctly
  const getPhotoSrc = (photo) => {
    if (!photo) return null;
    if (photo.startsWith("http")) return photo; // cloud / external URL
    if (photo.startsWith("data:image")) return photo; // already base64 with prefix
    return `data:image/jpeg;base64,${photo}`; // raw base64 string
  };

  useEffect(() => {
    axios
      .get(`/api/faculty/${id}`)
      .then((res) => {
        setFaculty(res.data);

        // ✅ handle resume pdf safely
        if (res.data.resume) {
          try {
            const blob = new Blob(
              [
                Uint8Array.from(
                  atob(res.data.resume.split(",")[1]),
                  (c) => c.charCodeAt(0)
                ),
              ],
              { type: "application/pdf" }
            );
            setResumeUrl(URL.createObjectURL(blob));
          } catch (err) {
            console.error("Invalid resume format:", err);
          }
        }
      })
      .catch((err) => console.error("Error fetching faculty:", err));
  }, [id]);

  if (!faculty) {
    return (
      <p className="text-center text-gray-600 text-lg font-medium mt-10">
        Loading faculty profile...
      </p>
    );
  }

  const goBack = () => navigate(-1);

  return (
    <div className="max-w-5xl mx-auto mt-1 px-6 py-10 font-sans bg-blue-50 border border-black rounded-2xl">
      <h2 className="text-3xl font-bold text-blue-600 text-center mb-8 drop-shadow">
        Faculty Profile
      </h2>

      {/* Profile Card */}
      <div className="flex flex-col md:flex-row items-start gap-8 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all">
        {/* Photo */}
        <div className="flex-shrink-0">
          {getPhotoSrc(faculty.photo) ? (
            <img
              src={getPhotoSrc(faculty.photo)}
              alt={faculty.name}
              className="w-48 h-60 object-cover rounded-lg shadow-md border transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/150x200?text=No+Image";
              }}
            />
          ) : (
            <div className="w-48 h-60 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-500 text-sm">
              No photo available
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-blue-700 mb-2">
            {faculty.name}
          </h3>
          <p className="text-lg font-semibold text-blue-500 mb-4">
            {faculty.department}
          </p>

          <div className="space-y-3 text-gray-700">
            <p>
              <span className="font-semibold">Email:</span> {faculty.email}
            </p>
            <p>
              <span className="font-semibold">Contact:</span>{" "}
              {faculty.contact || "—"}
            </p>
            <p>
              <span className="font-semibold">Qualification:</span>{" "}
              {faculty.qualification || "—"}
            </p>
            <p>
              <span className="font-semibold">Joining Date:</span>{" "}
              {faculty.joiningDate
                ? new Date(faculty.joiningDate).toLocaleDateString()
                : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Resume */}
      {resumeUrl && (
        <div className="mt-8 bg-white rounded-xl shadow-md p-6 text-center max-w-md mx-auto">
          <h3 className="text-lg font-bold text-gray-800 mb-4">
            Additional Information
          </h3>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            View Resume
          </a>
        </div>
      )}

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={goBack}
          className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-900 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
}
