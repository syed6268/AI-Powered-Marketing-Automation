// src/components/BlogGenerator.js
import React from "react";

const BlogGenerator = () => {
  const generateBlog = () => {
    // Logic for generating a blog can be added here.
    alert("Blog generated!"); // This is a placeholder for actual blog generation logic
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Blog Generator</h1>
      <button
        onClick={generateBlog}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500"
      >
        Generate Blog
      </button>
    </div>
  );
};

export default BlogGenerator;
