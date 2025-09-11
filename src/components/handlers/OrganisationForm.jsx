import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const CollaborationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    company: "",
    position: "",
    email: "",
    altEmail: "",
    phone: "",
    orgType: "",
    purpose: "",
    experience: "",
    areasOfInterest: "",
    proposal: "",
    aboutOrg: "",
    contactMethod: "",
    file: null,
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await emailjs.send(
        "service_zmcmnb5", // ✅ replace with your EmailJS service ID
        "template_umzwlrr", // ✅ replace with your EmailJS template ID
        {
          title: formData.title,
          fullName: formData.fullName,
          company: formData.company,
          position: formData.position,
          email: formData.email,
          altEmail: formData.altEmail || "N/A",
          phone: formData.phone,
          orgType: formData.orgType,
          purpose: formData.purpose,
          experience: formData.experience || "N/A",
          areasOfInterest: formData.areasOfInterest || "N/A",
          proposal: formData.proposal || "N/A",
          aboutOrg: formData.aboutOrg,
          contactMethod: formData.contactMethod || "N/A",
          file: formData.file ? formData.file.name : "No file uploaded",
          year: new Date().getFullYear(),
        },
        "z_9GrlytVATVBVnIk" // ✅ replace with your public key
      );

      setStatus("✅ Email sent successfully!");
      setFormData({
        title: "",
        fullName: "",
        company: "",
        position: "",
        email: "",
        altEmail: "",
        phone: "",
        orgType: "",
        purpose: "",
        experience: "",
        areasOfInterest: "",
        proposal: "",
        aboutOrg: "",
        contactMethod: "",
        file: null,
      });
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("❌ Failed to send. Try again later.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-blue-50 shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center">
        Collaboration Form
      </h2>
      <p className="mb-6 text-blue-800 text-center">
        Designed for organizations and institutions seeking collaborations with SPPL.
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

        {/* Company */}
        <div>
          <label className="block font-semibold mb-1">Company / Organisation*</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter Company"
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
          <label className="block font-semibold mb-1">Email*</label>
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

        {/* Alternate Email */}
        <div>
          <label className="block font-semibold mb-1">Alternate Email</label>
          <input
            type="email"
            name="altEmail"
            value={formData.altEmail}
            onChange={handleChange}
            placeholder="Enter Alternate Email"
            className="w-full border border-blue-300 rounded p-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold mb-1">Phone*</label>
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

        {/* Org Type */}
        <div>
          <label className="block font-semibold mb-1">Organization Type*</label>
          <select
            name="orgType"
            value={formData.orgType}
            onChange={handleChange}
            className="w-full border border-blue-300 rounded p-2"
            required
          >
            <option value="">Select</option>
            <option>Government</option>
            <option>NGO</option>
            <option>Private</option>
            <option>Other</option>
          </select>
        </div>

        {/* Purpose */}
        <div>
          <label className="block font-semibold mb-1">Purpose of Collaboration*</label>
          <textarea
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            placeholder="Describe purpose"
            className="w-full border border-blue-300 rounded p-2"
            rows={3}
            required
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block font-semibold mb-1">Past Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Any relevant past experience"
            className="w-full border border-blue-300 rounded p-2"
            rows={2}
          />
        </div>

        {/* Areas of Interest */}
        <div>
          <label className="block font-semibold mb-1">Areas of Interest</label>
          <textarea
            name="areasOfInterest"
            value={formData.areasOfInterest}
            onChange={handleChange}
            placeholder="Research, Projects, etc."
            className="w-full border border-blue-300 rounded p-2"
            rows={2}
          />
        </div>

        {/* Proposal */}
        <div>
          <label className="block font-semibold mb-1">Proposal</label>
          <textarea
            name="proposal"
            value={formData.proposal}
            onChange={handleChange}
            placeholder="Brief proposal (optional)"
            className="w-full border border-blue-300 rounded p-2"
            rows={3}
          />
        </div>

        {/* About Org */}
        <div>
          <label className="block font-semibold mb-1">About Your Organisation*</label>
          <textarea
            name="aboutOrg"
            value={formData.aboutOrg}
            onChange={handleChange}
            placeholder="Brief about your organisation"
            className="w-full border border-blue-300 rounded p-2"
            rows={3}
            required
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

        {/* Upload File */}
        <div>
          <label className="block font-semibold mb-1">Upload File (Optional)</label>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="w-full"
          />
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

export default CollaborationForm;
