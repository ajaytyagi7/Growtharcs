import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-700 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 text-lg">Manage everything from one place</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
        <Link
          to="/UploadBlog"
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-4xl mb-4">📝</span>
          <h3 className="text-xl font-semibold text-indigo-700">Upload Blog</h3>
          <p className="text-sm text-gray-500 mt-2">Create and publish new blog posts</p>
        </Link>

        <Link
          to="/ManageBlog"
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-4xl mb-4">📚</span>
          <h3 className="text-xl font-semibold text-indigo-700">Manage Blogs</h3>
          <p className="text-sm text-gray-500 mt-2">Edit or delete existing blog posts</p>
        </Link>

        <Link
          to="/ManageContact"
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition"
        >
          <span className="text-4xl mb-4">📬</span>
          <h3 className="text-xl font-semibold text-indigo-700">Manage Contacts</h3>
          <p className="text-sm text-gray-500 mt-2">View messages and contact requests</p>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
