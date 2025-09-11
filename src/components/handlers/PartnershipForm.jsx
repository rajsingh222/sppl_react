import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    formType: "partnership",
    title: "",
    fullName: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    altEmail: "",
    businessType: "",
    partnershipNature: "",
    products: "",
    collaborationArea: "",
    pastExperience: "",
    query: "",
    contactMethod: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_at454kd", // 🔹 Replace with your EmailJS Service ID
        "template_2gr67a6", // 🔹 Replace with your Template ID
        formData,
        "2F2u4xMYmzJhmmsE-" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Your inquiry has been sent successfully!");
          setFormData({
            formType: "partnership",
            title: "",
            fullName: "",
            company: "",
            position: "",
            email: "",
            phone: "",
            altEmail: "",
            businessType: "",
            partnershipNature: "",
            products: "",
            collaborationArea: "",
            pastExperience: "",
            query: "",
            contactMethod: "",
          });
          e.target.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("❌ Failed to send inquiry. Please try again.");
        }
      );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-blue-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
        Partnership Inquiry Form
      </h2>
      <p className="mb-6 text-blue-800 text-center">
        Designed for government agencies, NGOs, and institutions seeking collaboration with SPPL.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title*</label>
          <select
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded p-2"
            required
          >
            <option value="">Select</option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Dr.</option>
            <option>Prof.</option>
          </select>
        </div>

        {/* Full Name */}
        <div>
          <label className="block font-semibold mb-1">Full Name*</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Company / Organisation */}
        <div>
          <label className="block font-semibold mb-1">Company / Organisation</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company / Organisation"
            className="w-full border border-blue-300 rounded p-2"
          />
        </div>

        {/* Position */}
        <div>
          <label className="block font-semibold mb-1">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            className="w-full border border-blue-300 rounded p-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border border-blue-300 rounded p-2"
          />
        </div>

        {/* Business Type */}
        <div>
          <label className="block font-semibold mb-1">Type of Business</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded p-2"
          >
            <option value="">Select</option>
            <option>Government</option>
            <option>NGO</option>
            <option>Private</option>
            <option>Other</option>
          </select>
        </div>

        {/* Nature of Partnership */}
        <div>
          <label className="block font-semibold mb-1">Nature of Partnership</label>
          <select
            name="partnershipNature"
            value={formData.partnershipNature}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded p-2"
          >
            <option value="">Select</option>
            <option>Research</option>
            <option>Training</option>
            <option>Project Collaboration</option>
            <option>Other</option>
          </select>
        </div>

        {/* Products / Services */}
        <div>
          <label className="block font-semibold mb-1">Products / Services</label>
          <textarea
            name="products"
            value={formData.products}
            onChange={handleChange}
            placeholder="Products or Services offered"
            className="w-full border border-blue-300 rounded p-2"
            rows={2}
          />
        </div>

        {/* Collaboration Area */}
        <div>
          <label className="block font-semibold mb-1">Proposed Collaboration Area</label>
          <textarea
            name="collaborationArea"
            value={formData.collaborationArea}
            onChange={handleChange}
            placeholder="Describe area of collaboration"
            className="w-full border border-blue-300 rounded p-2"
            rows={2}
          />
        </div>

        {/* Past Experience */}
        <div>
          <label className="block font-semibold mb-1">Past Experience</label>
          <textarea
            name="pastExperience"
            value={formData.pastExperience}
            onChange={handleChange}
            placeholder="Past experience with projects"
            className="w-full border border-blue-300 rounded p-2"
            rows={2}
          />
        </div>

        {/* Query */}
        <div>
          <label className="block font-semibold mb-1">Explain Your Query</label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Your query"
            className="w-full border border-blue-300 rounded p-2"
            rows={4}
          />
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label className="block font-semibold mb-1">Preferred Contact Method</label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded p-2"
          >
            <option value="">Select</option>
            <option>Email</option>
            <option>Phone</option>
            <option>Either</option>
          </select>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-blue-700 text-white font-bold px-6 py-2 rounded hover:bg-blue-800 transition w-full"
          >
            Submit Inquiry
          </button>
        </div>
      </form>

      {status && <p className="mt-4 text-blue-900 font-semibold text-center">{status}</p>}
    </div>
  );
};

export default PartnershipForm;
