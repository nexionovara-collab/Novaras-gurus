// src/components/ContactForm.jsx

import { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    city: "",
    phone: "",
    message: "",
    contactMethod: "",
    source: [],
  });

  const [errors, setErrors] = useState({});

  // =========================
  // Validation
  // =========================
  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.city) {
      newErrors.city = "Please select a city";
    }

    if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // Handlers
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckbox = (value) => {
    setFormData((prev) => ({
      ...prev,
      source: prev.source.includes(value)
        ? prev.source.filter((item) => item !== value)
        : [...prev.source, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="contact-wrapper">
      <div className="contact-card">
        {/* Heading */}
        <h1 className="contact-title">
          Have Questions About Planetary Science?
        </h1>

        <p className="contact-description">
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed?
          <br />
          Reach out and we'll get back to you.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Top Grid */}
          <div className="form-grid">
            {/* Full Name */}
            <div>
              <label className="form-label">
                Full Name<span>*</span>
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className={`form-input ${
                  errors.fullName ? "input-error" : ""
                }`}
              />

              {errors.fullName && (
                <p className="error-text">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="form-label">
                Email<span>*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${
                  errors.email ? "input-error" : ""
                }`}
              />

              {errors.email && (
                <p className="error-text">{errors.email}</p>
              )}
            </div>

            {/* City */}
            <div>
              <label className="form-label">
                City<span>*</span>
              </label>

              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`form-input ${
                  errors.city ? "input-error" : ""
                }`}
              >
                <option value="">Choose city</option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Port Harcourt</option>
              </select>

              {errors.city && (
                <p className="error-text">{errors.city}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="form-label">
                Phone Number<span>*</span>
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Please enter a valid phone number."
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${
                  errors.phone ? "input-error" : ""
                }`}
              />

              {errors.phone && (
                <p className="error-text">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="bottom-grid">
            {/* Message */}
            <div>
              <label className="form-label">
                Message<span>*</span>
              </label>

              <textarea
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                maxLength={100}
                className={`message-box ${
                  errors.message ? "input-error" : ""
                }`}
              />

              <p className="char-count">100 characters</p>

              {errors.message && (
                <p className="error-text">{errors.message}</p>
              )}
            </div>

            {/* Right Side */}
            <div className="options-wrapper">
              {/* Contact Method */}
              <div className="option-group">
                <h3 className="option-title">
                  How should we contact you?
                </h3>

                <div className="option-row">
                  {["Phone", "Email", "Both"].map((item) => (
                    <label key={item} className="option-label">
                      <input
                        type="radio"
                        name="contactMethod"
                        value={item}
                        checked={formData.contactMethod === item}
                        onChange={handleChange}
                      />

                      {item}
                    </label>
                  ))}
                </div>
              </div>

              {/* Source */}
              <div className="option-group">
                <h3 className="option-title">
                  How did you hear about us?
                </h3>

                <div className="option-row">
                  {["Friend", "TS Academy", "Others"].map((item) => (
                    <label key={item} className="option-label">
                      <input
                        type="checkbox"
                        checked={formData.source.includes(item)}
                        onChange={() => handleCheckbox(item)}
                      />

                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="submit-btn">
            Submit →
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;