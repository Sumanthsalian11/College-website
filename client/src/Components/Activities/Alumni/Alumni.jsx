import React, { useState, useRef } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const officeBearers = [
  {
    office: "President",
    name: "Prof. Kokkarne Surendranath Shetty",
    mob: "9964498869",
    email: "kokkarneshetty@gmail.com",
  },
  {
    office: "Secretary",
    name: "Dr. M Vishwanath Pai",
    mob: "9008515307",
    email: "vish_pai@yahoo.com",
  },
  {
    office: "Treasurer",
    name: "Mrs. Deepali Kamath",
    mob: "9449388877",
    email: "kamath_deepali@yahoo.com",
  },
];

const SectionTitle = ({ icon, children }) => (
  <h2 className="flex items-center gap-2 text-xl font-semibold text-sky-700 mb-3">
    {icon} {children}
  </h2>
);

export default function Alumni() {
  const [showForm, setShowForm] = useState(false);
  const [formFeedback, setFormFeedback] = useState(null); // success or error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: new Date().getFullYear().toString(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // fake delay
      await new Promise(res => setTimeout(res, 900));
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormFeedback({ type: "success", message: "Thank you for registering as an alumni!" });
      } else {
        setFormFeedback({ type: "error", message: "Error during registration. Please try again." });
      }
      setFormData({ name: "", email: "", phone: "", batch: new Date().getFullYear().toString() });
    } catch (err) {
      setFormFeedback({ type: "error", message: "Network error. Please try again later." });
    }
  };

  return (
    <div className="font-sans bg-gradient-to-b from-sky-50 to-sky-100 min-h-screen relative">
      <div className="max-w-4xl mx-auto p-6 animate-fadeIn">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-10">
          <h1 className="text-3xl font-bold text-sky-700 tracking-tight">
            MGM College Alumni Forum
          </h1>
          <div className="flex gap-3">
            <button
              className="bg-gradient-to-r from-sky-500 to-sky-700 hover:scale-105 hover:shadow-lg transition text-white px-4 py-2 rounded shadow text-sm"
              onClick={() => { setShowForm(true); setFormFeedback(null); }}
            >
              Register Now
            </button>
            <a
              href="/membership-form.pdf"
              download
              className="bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 hover:shadow-lg transition text-white px-4 py-2 rounded shadow text-sm"
            >
              Download Form
            </a>
          </div>
        </header>

        {/* Modal form */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-2xl w-96 animate-fadeIn">
              <h3 className="text-sky-600 text-xl font-bold mb-4 text-center">
                Alumni Registration
              </h3>
              {formFeedback ? (
                <div className={`flex items-center gap-2 py-3 px-2 rounded mb-4 ${formFeedback.type === "success" ? "bg-green-100 text-green-700 border border-green-300" : "bg-red-100 text-red-700 border border-red-300"}`}>
                  {formFeedback.type === "success" ? <FaCheckCircle /> : <FaExclamationTriangle />}
                  <span>{formFeedback.message}</span>
                  <button className="ml-auto text-sky-600 hover:underline" onClick={() => { setShowForm(false); setFormFeedback(null); }}>Close</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-sky-200 px-3 py-2 rounded focus:ring-2 focus:ring-sky-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-sky-200 px-3 py-2 rounded focus:ring-2 focus:ring-sky-400"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-sky-200 px-3 py-2 rounded focus:ring-2 focus:ring-sky-400"
                  />
                  <input
                    type="number"
                    name="batch"
                    min="1950"
                    max={new Date().getFullYear()}
                    placeholder="Batch (Year)"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    className="w-full border border-sky-200 px-3 py-2 rounded focus:ring-2 focus:ring-sky-400"
                  />
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700"
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Sections */}
        <section className="bg-white mb-6 rounded-lg shadow p-6 hover:shadow-lg transition animate-fadeIn">
          <SectionTitle icon="🎯">Objective</SectionTitle>
          <hr className="mb-3 border-gray-200"/>
          <p className="text-gray-600 mb-2">
            Our main objective is to create a strong, vibrant symbiotic alumni
            network that connects departments, current students, past students,
            and society at large.
          </p>
          <p className="text-gray-600">
            We aim to support our Alma Mater effectively and organize meaningful alumni events every year.
          </p>
        </section>

        <section className="bg-white mb-6 rounded-lg shadow p-6 hover:shadow-lg transition animate-fadeIn">
          <SectionTitle icon="📢">An Appeal to All Alumni</SectionTitle>
          <hr className="mb-3 border-gray-200"/>
          <p className="text-gray-600 mb-2">
            Mahatma Gandhi Memorial College is one of the premier institutions in
            Coastal Karnataka...
          </p>
          <p className="text-gray-600 mb-2">
            Each year, conventions and gatherings bring our alumni together...
          </p>
          <p className="text-gray-600">
            Let us join hands to renew and strengthen our alumni network.
          </p>
        </section>

        <section className="bg-white mb-6 rounded-lg shadow p-6 text-gray-600 animate-fadeIn">
          <hr className="mb-3 border-gray-200"/>
          <p>Awaiting your kind response.</p>
          <p className="mt-4 font-semibold">
            — President & Secretary, <br /> MGM College Alumni Forum
          </p>
        </section>

        {/* Office Bearers as Cards */}
        <section>
          <SectionTitle icon="👥">Office Bearers</SectionTitle>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 animate-fadeIn">
            {officeBearers.map((bearer) => (
              <div
                key={bearer.office}
                className="bg-white p-5 rounded-lg shadow hover:shadow-xl transition border-t-4 border-sky-500 hover:scale-105"
              >
                <h3 className="text-lg font-bold text-sky-700 mb-1 flex items-center gap-2">
                  <FaUser className="text-sky-500" /> {bearer.office}
                </h3>
                <p className="text-gray-700 flex items-center gap-2">
                  <FaUser className="text-sky-500" /> {bearer.name}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaPhone className="text-green-600" /> {bearer.mob}
                </p>
                <p className="text-gray-600 flex items-center gap-2">
                  <FaEnvelope className="text-red-500" />
                  <a
                    href={`mailto:${bearer.email}`}
                    className="text-sky-600 hover:underline"
                  >
                    {bearer.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
