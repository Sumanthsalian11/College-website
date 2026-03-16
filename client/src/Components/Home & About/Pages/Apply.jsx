import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Apply.css';

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    motherName: '',
    fatherName: '',
    email: '',
    phone: '',
    otp: '',
    state: '',
    city: '',
    programme: '',
    course: '',
    tenthObtained: '',
    tenthTotal: '',
    tenthPercent: '',
    puObtained: '',
    puTotal: '',
    puPercent: '',
    captcha: ''
  });

  const [captcha, setCaptcha] = useState('');

  const generateCaptcha = () => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedForm = { ...formData, [name]: value };

    if (name === 'tenthObtained' || name === 'tenthTotal') {
      const obtained = parseFloat(updatedForm.tenthObtained);
      const total = parseFloat(updatedForm.tenthTotal);
      updatedForm.tenthPercent = obtained && total ? ((obtained / total) * 100).toFixed(2) : '';
    }

    if (name === 'puObtained' || name === 'puTotal') {
      const obtained = parseFloat(updatedForm.puObtained);
      const total = parseFloat(updatedForm.puTotal);
      updatedForm.puPercent = obtained && total ? ((obtained / total) * 100).toFixed(2) : '';
    }

    setFormData(updatedForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const refreshCaptcha = () => {
    generateCaptcha();
  };

  return (
    <div className="apply-page">
      <div className="apply-container">
        <section className="form-section">
          <div className="form-container">
            <div className="form-header">
              <h1>🎓 Application Form</h1>
              <p>Complete your application for MGM College</p>
            </div>

            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-grid">

                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="name"><span className="label-icon">👤</span> Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="modern-input"
                  />
                </div>

                {/* Mother's Name */}
                <div className="form-group">
                  <label htmlFor="motherName"><span className="label-icon">👩‍👧</span> Mother's Name *</label>
                  <input
                    type="text"
                    id="motherName"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter mother's name"
                    className="modern-input"
                  />
                </div>

                {/* Father's Name */}
                <div className="form-group">
                  <label htmlFor="fatherName"><span className="label-icon">👨‍👧</span> Father's Name *</label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter father's name"
                    className="modern-input"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email"><span className="label-icon">📧</span> Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                    className="modern-input"
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="phone"><span className="label-icon">📱</span> Mobile Number *</label>
                  <div className="phone-input-group">
                    <select className="country-code">
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter mobile number"
                      className="modern-input"
                    />
                  </div>
                </div>

                {/* OTP */}
                <div className="form-group">
                  <label htmlFor="otp"><span className="label-icon">🔐</span> OTP Verification *</label>
                  <div className="otp-input-group">
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={formData.otp}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter 6-digit OTP"
                      className="modern-input"
                      maxLength="6"
                    />
                    <button type="button" className="send-otp-btn">Send OTP</button>
                  </div>
                </div>

                {/* State */}
                <div className="form-group">
                  <label htmlFor="state"><span className="label-icon">🗺️</span> State *</label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="modern-select"
                  >
                    <option value="">Select your state</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="kerala">Kerala</option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    <option value="telangana">Telangana</option>
                  </select>
                </div>

                {/* City */}
                <div className="form-group">
                  <label htmlFor="city"><span className="label-icon">🏙️</span> City *</label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="modern-select"
                  >
                    <option value="">Select your city</option>
                    <option value="bangalore">Bangalore</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="chennai">Chennai</option>
                    <option value="kochi">Kochi</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="pune">Pune</option>
                  </select>
                </div>

                {/* Programme */}
                <div className="form-group">
                  <label htmlFor="programme"><span className="label-icon">🎓</span> Programme Level *</label>
                  <select
                    id="programme"
                    name="programme"
                    value={formData.programme}
                    onChange={handleInputChange}
                    required
                    className="modern-select"
                  >
                    <option value="">Choose programme level</option>
                    <option value="bachelor">Bachelor's Degree</option>
                    <option value="master">Master's Degree</option>
                    <option value="diploma">Diploma</option>
                    <option value="certificate">Certificate Course</option>
                  </select>
                </div>

                {/* Course */}
                <div className="form-group">
                  <label htmlFor="course"><span className="label-icon">📖</span> Course *</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="modern-select"
                  >
                    <option value="">Choose your course</option>
                    <option value="bsc">B.Sc. (Bachelor of Science)</option>
                    <option value="ba">B.A. (Bachelor of Arts)</option>
                    <option value="bcom">B.Com. (Bachelor of Commerce)</option>
                    <option value="bca">B.C.A. (Bachelor of Computer Applications)</option>
                    <option value="msc">M.Sc. (Master of Science)</option>
                  </select>
                </div>

                             {/* 10th Marks */}
                <div className="form-group">
                  <label><span className="label-icon">📘</span> 10th Marks *</label>
                  <div className="marks-group">
                    <input
                      type="number"
                      name="tenthObtained"
                      value={formData.tenthObtained}
                      onChange={handleInputChange}
                      placeholder="Marks Obtained"
                      className="modern-input"
                      min="0"
                    />
                    <input
                      type="number"
                      name="tenthTotal"
                      value={formData.tenthTotal}
                      onChange={handleInputChange}
                      placeholder="Total Marks"
                      className="modern-input"
                      min="0"
                    />
                    <input
                      type="text"
                      name="tenthPercent"
                      value={formData.tenthPercent}
                      readOnly
                      placeholder="Percentage"
                      className="modern-input"
                    />
                  </div>
                </div>

                {/* PU Marks */}
                <div className="form-group">
                  <label><span className="label-icon">📘</span> PU Marks *</label>
                  <div className="marks-group">
                    <input
                      type="number"
                      name="puObtained"
                      value={formData.puObtained}
                      onChange={handleInputChange}
                      placeholder="Marks Obtained"
                      className="modern-input"
                      min="0"
                    />
                    <input
                      type="number"
                      name="puTotal"
                      value={formData.puTotal}
                      onChange={handleInputChange}
                      placeholder="Total Marks"
                      className="modern-input"
                      min="0"
                    />
                    <input
                      type="text"
                      name="puPercent"
                      value={formData.puPercent}
                      readOnly
                      placeholder="Percentage"
                      className="modern-input"
                    />
                  </div>
                </div>

                {/* Captcha */}
                <div className="form-group captcha-group">
                  <label htmlFor="captcha"><span className="label-icon">🔒</span> Security Verification *</label>
                  <div className="captcha-container">
                    <div className="captcha-display">
                      <span className="captcha-text">{captcha}</span>
                      <button 
                        type="button" 
                        className="refresh-captcha-btn"
                        onClick={refreshCaptcha}
                        title="Refresh Captcha"
                      >
                        🔄
                      </button>
                    </div>
                    <input
                      type="text"
                      id="captcha"
                      name="captcha"
                      value={formData.captcha}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter the code above"
                      className="modern-input captcha-input"
                      maxLength="6"
                    />
                  </div>
                </div>
              </div>

              {/* Terms & Conditions */}
              <div className="form-group checkbox-group">
                <label className="modern-checkbox">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  <span className="checkbox-text">
                    I agree to receive information regarding my submitted application and accept the 
                    <Link to="/terms" className="link-highlight"> Terms & Conditions</Link> and 
                    <Link to="/privacy" className="link-highlight"> Privacy Policy</Link> *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  <span>Submit Application</span>
                  <span className="btn-icon">📤</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Apply;
