import React, { useState } from "react";

const UploadBolg = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    tags: "",
    content: "",
    coverImage: null,
    additionalImages: [],
    date: "",
    time: ""
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "coverImage") {
      setFormData({ ...formData, coverImage: files[0] });
    } else if (name === "additionalImages") {
      setFormData({ ...formData, additionalImages: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle blog upload logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center px-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10 space-y-6"
      >
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-4">
          Upload New Blog
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Blog Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Author name"
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g. tech, react, tutorial"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Blog Content</label>
          <textarea
            name="content"
            rows="6"
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog content here..."
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Cover Image</label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-2 border border-dashed border-gray-400 rounded-xl bg-white"
            required
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-2">Additional Images</label>
          <input
            type="file"
            name="additionalImages"
            accept="image/*"
            multiple
            onChange={handleChange}
            className="w-full p-2 border border-dashed border-gray-400 rounded-xl bg-white"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg transition"
          >
            Upload Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadBolg;
