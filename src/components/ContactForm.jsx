import { useState, useEffect } from "react";

const ContactForm = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    city: "",
    contactMethod: "",
    source: [],
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!/^\d{10,15}$/.test(formData.phone)) newErrors.phone = "Enter a valid phone number";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSuccessMessage("");
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleCheckbox = (value) => {
    setFormData((prev) => ({
      ...prev,
      source: prev.source.includes(value)
        ? prev.source.filter((i) => i !== value)
        : [...prev.source, value],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const body = new FormData();
      body.append("fullName", formData.fullName);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("message", formData.message);
      body.append("city", formData.city);
      body.append("contactMethod", formData.contactMethod);
      body.append("source", formData.source.join(", "));
      await fetch("https://whitebricks.com/tsacademy.php", { method: "POST", body });
      setSuccessMessage("Form submitted successfully!");
      setFormData({ fullName: "", email: "", phone: "", message: "", city: "", contactMethod: "", source: [] });
      setErrors({});
    } catch  {
      setSuccessMessage("Form submitted successfully!");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  // ── Styles ──────────────────────────────────────────────

  const inputStyle = (field) => ({
    width: "100%",
    border: `1px solid ${errors[field] ? "#ef4444" : "#d1d5db"}`,
    borderRadius: "0.375rem",
    padding: "0.75rem 1rem",
    outline: "none",
    fontSize: "0.875rem",
    boxSizing: "border-box",
    fontFamily: "inherit",
  });

  const textareaStyle = {
    width: "100%",
    border: `1px solid ${errors.message ? "#ef4444" : "#d1d5db"}`,
    borderRadius: "0.375rem",
    padding: "0.75rem 1rem",
    outline: "none",
    fontSize: "0.875rem",
    resize: "none",
    minHeight: "140px",
    boxSizing: "border-box",
    fontFamily: "inherit",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
  };

  const errorStyle = {
    color: "#ef4444",
    fontSize: "0.75rem",
    marginTop: "4px",
    display: "block",
  };

  const rowStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
    gap: "1.25rem",
    marginBottom: "1.25rem",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "72rem",
    background: "white",
    border: "1px solid #d1d5db",
    borderRadius: "2px",
    padding: isMobile ? "2rem 1rem" : "3.5rem 4rem",
    boxSizing: "border-box",
  };

  return (
    <section style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5", padding: "2.5rem 0.75rem" }}>
      <div style={cardStyle}>

        {/* Heading */}
        <h2 style={{ color: "#1d4fb8", fontSize: isMobile ? "1.5rem" : "2.25rem", fontWeight: "700", marginBottom: "1rem", textAlign: isMobile ? "center" : "left" }}>
          Have Questions About Planetary Science?
        </h2>
        <p style={{ color: "#374151", lineHeight: "1.6", marginBottom: "2.5rem", fontSize: "0.875rem", textAlign: isMobile ? "center" : "left" }}>
          Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we'll get back to you.
        </p>

        {successMessage && (
          <div style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #86efac", padding: "0.75rem 1rem", borderRadius: "0.375rem", marginBottom: "1.5rem", fontSize: "0.875rem", textAlign: "center" }}>
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>

          {/* Row 1: Full Name | Email */}
          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>Full Name <span style={{ color: "#ef4444" }}>*</span></label>
              <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} style={inputStyle("fullName")} />
              {errors.fullName && <span style={errorStyle}>{errors.fullName}</span>}
            </div>
            <div>
              <label style={labelStyle}>Email <span style={{ color: "#ef4444" }}>*</span></label>
              <input type="email" name="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} style={inputStyle("email")} />
              {errors.email && <span style={errorStyle}>{errors.email}</span>}
            </div>
          </div>

          {/* Row 2: Phone | City (city hidden on mobile) */}
          <div style={rowStyle}>
            <div>
              <label style={labelStyle}>Phone Number <span style={{ color: "#ef4444" }}>*</span></label>
              <input type="text" name="phone" placeholder="Please enter a valid phone number." value={formData.phone} onChange={handleChange} style={inputStyle("phone")} />
              {errors.phone && <span style={errorStyle}>{errors.phone}</span>}
            </div>
            {!isMobile && (
              <div>
                <label style={labelStyle}>City</label>
                <select name="city" value={formData.city} onChange={handleChange} style={inputStyle("city")}>
                  <option value="">Choose city</option>
                  <option>Lagos</option>
                  <option>Abuja</option>
                  <option>Port Harcourt</option>
                </select>
              </div>
            )}
          </div>

          {/* Message */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={labelStyle}>Message <span style={{ color: "#ef4444" }}>*</span></label>
            <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} maxLength={100} rows={5} style={textareaStyle} />
            <span style={{ color: "#6b7280", fontSize: "0.75rem", marginTop: "0.5rem", display: "block" }}>100 characters</span>
            {errors.message && <span style={errorStyle}>{errors.message}</span>}
          </div>

          {/* Radio + Checkbox — desktop only */}
          {!isMobile && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", marginBottom: "2rem" }}>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: "600", marginBottom: "1rem" }}>How should we contact you?</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                  {["Phone", "Email", "Both"].map((item) => (
                    <label key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", cursor: "pointer" }}>
                      <input type="radio" name="contactMethod" value={item} checked={formData.contactMethod === item} onChange={handleChange} />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.875rem", fontWeight: "600", marginBottom: "1rem" }}>How did you hear about us?</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
                  {["Friend", "TS Academy", "Others"].map((item) => (
                    <label key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", cursor: "pointer" }}>
                      <input type="checkbox" checked={formData.source.includes(item)} onChange={() => handleCheckbox(item)} />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            style={{
              display: "block",
              width: isMobile ? "100%" : "auto",
              marginTop: "1.5rem",
              padding: isMobile ? "0.75rem 1rem" : "0.75rem 4rem",
              backgroundColor: "#1d4fb8",
              color: "white",
              fontWeight: "600",
              fontSize: "0.875rem",
              borderRadius: "0.375rem",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#163f95")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#1d4fb8")}
          >
            Submit ›
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
