import React, { useState } from "react";

export default function ClientForm() {
  const [status, setStatus] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Prepare data for backend
    const data = {
      formType: "Client Query",
      title: formData.get("title"),
      fullName: formData.get("fullName"),
      company: formData.get("company"),
      position: formData.get("position"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      altEmail: formData.get("altEmail"),
      projectType: formData.get("projectType"),
      serviceInquiry: formData.get("serviceInquiry"),
      projectLocation: formData.get("projectLocation"),
      budgetRange: formData.get("budgetRange"),
      query: formData.get("query"),
      contactMethod: formData.get("contactMethod"),
      fileName: selectedFile ? selectedFile.name : null,
    };

    try {
      const response = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        e.target.reset();
        setSelectedFile(null);
      } else setStatus("ERROR");
    } catch (err) {
      console.error(err);
      setStatus("ERROR");
    }
  };

  return (
    <div className="flex justify-center py-10 bg-blue-50 min-h-screen">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Sanrachna Prahari Pvt Ltd Client Query Form
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Designed for existing or prospective clients to inquire about SPPL’s
          products, services, and consulting.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-700 mb-1">Title *</label>
            <select
              name="title"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Dr.">Dr.</option>
              <option value="Prof.">Prof.</option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">
              Full Name (Block Letters) *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Company / Organisation */}
          <div>
            <label className="block text-gray-700 mb-1">Company / Organisation *</label>
            <input
              type="text"
              name="company"
              placeholder="Enter Company / Organisation"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Position */}
          <div>
            <label className="block text-gray-700 mb-1">Position *</label>
            <input
              type="text"
              name="position"
              placeholder="Enter Your Position"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-gray-700 mb-1">Email ID *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone No */}
          <div>
            <label className="block text-gray-700 mb-1">Phone No *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Alternate Email */}
          <div>
            <label className="block text-gray-700 mb-1">Alternate Email ID</label>
            <input
              type="email"
              name="altEmail"
              placeholder="Enter Alternate Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Type of Project */}
          <div>
            <label className="block text-gray-700 mb-1">Type of Project *</label>
            <input
              type="text"
              name="projectType"
              placeholder="Enter Project Type"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Service Inquiry */}
          <div>
            <label className="block text-gray-700 mb-1">Service Inquiry *</label>
            <select
              name="serviceInquiry"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Consulting">Consulting</option>
              <option value="Products">Products</option>
              <option value="Research">Research</option>
            </select>
          </div>

          {/* Project Location */}
          <div>
            <label className="block text-gray-700 mb-1">Project Location *</label>
            <input
              type="text"
              name="projectLocation"
              placeholder="Enter Project Location"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Budget Range */}
          <div>
            <label className="block text-gray-700 mb-1">Budget Range (Optional)</label>
            <select
              name="budgetRange"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Below 1L">Below 1L</option>
              <option value="1L-5L">1L-5L</option>
              <option value="5L-10L">5L-10L</option>
              <option value="Above 10L">Above 10L</option>
            </select>
          </div>

          {/* Explain Your Query */}
          <div>
            <label className="block text-gray-700 mb-1">Explain Your Query *</label>
            <textarea
              name="query"
              placeholder="Enter your note (up to 1500 words)"
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Preferred Contact Method */}
          <div>
            <label className="block text-gray-700 mb-1">Preferred Contact Method</label>
            <select
              name="contactMethod"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
            </select>
          </div>

          {/* Upload Document */}
          <div>
            <label className="block text-gray-700 mb-1">Upload Document (Optional)</label>
            <input
              type="file"
              name="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Query
          </button>
        </form>

        {/* Status Messages */}
        {status === "SUCCESS" && (
          <p className="mt-4 text-green-600 text-center">
            ✅ Your query has been submitted successfully!
          </p>
        )}
        {status === "ERROR" && (
          <p className="mt-4 text-red-600 text-center">
            ❌ Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  );
}
