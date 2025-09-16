import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ClientForm() {
  const [formData, setFormData] = useState({
    formType: "client",
    title: "",
    fullName: "",
    company: "",
    position: "",
    email: "",
    phone: "",
    altEmail: "",
    projectType: "",
    serviceInquiry: "",
    projectLocation: "",
    budgetRange: "",
    query: "",
    contactMethod: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_zmcmnb5", // 🔹 Replace with your EmailJS Service ID
        "template_umzwlrr", // 🔹 Replace with your EmailJS Client Template ID
        formData,
        "2F2u4xMYmzJhmmsE-" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("✅ Your inquiry has been sent successfully!");
          setFormData({
            formType: "client",
            title: "",
            fullName: "",
            company: "",
            position: "",
            email: "",
            phone: "",
            altEmail: "",
            projectType: "",
            serviceInquiry: "",
            projectLocation: "",
            budgetRange: "",
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
        Sanrachna Prahari Pvt Ltd Client Query Form
      </h2>
      <p className="mb-6 text-blue-800 text-center">
        Designed for existing or prospective clients to inquire about SPPL’s products, services, and consulting.
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
          <label className="block font-semibold mb-1">Full Name (Block Letters)*</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Company */}
        <div>
          <label className="block font-semibold mb-1">Company / Organisation*</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter Company / Organisation"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Position */}
        <div>
          <label className="block font-semibold mb-1">Position*</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Enter Position"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold mb-1">Email ID*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone No*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Alternate Email */}
        <div>
          <label className="block font-semibold mb-1">Alternate Email ID</label>
          <input
            type="email"
            name="altEmail"
            value={formData.altEmail}
            onChange={handleChange}
            placeholder="Enter Alternate Email"
            className="w-full border border-blue-300 rounded p-2"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block font-semibold mb-1">Type of Project*</label>
          <input
            type="text"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            placeholder="Enter Project Type"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Service Inquiry */}
        <div>
          <label className="block font-semibold mb-1">Service Inquiry*</label>
          <select
            name="serviceInquiry"
            value={formData.serviceInquiry}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded p-2"
            required
          >
            <option value="">Select</option>
            <option>Consulting</option>
            <option>Products</option>
            <option>Research</option>
          </select>
        </div>

        {/* Project Location */}
        <div>
          <label className="block font-semibold mb-1">Project Location*</label>
          <input
            type="text"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            placeholder="Enter Project Location"
            className="w-full border border-blue-300 rounded p-2"
            required
          />
        </div>

        {/* Budget Range */}
        <div>
          <label className="block font-semibold mb-1">Budget Range (Optional)</label>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded p-2"
          >
            <option value="">Select</option>
            <option>Below 1L</option>
            <option>1L-5L</option>
            <option>5L-10L</option>
            <option>Above 10L</option>
          </select>
        </div>

        {/* Query */}
        <div>
          <label className="block font-semibold mb-1">Explain Your Query*</label>
          <textarea
            name="query"
            value={formData.query}
            onChange={handleChange}
            placeholder="Enter your note (up to 1500 words)"
            className="w-full border border-blue-300 rounded p-2"
            rows={4}
            required
          />
        </div>

        {/* Preferred Contact */}
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
}
