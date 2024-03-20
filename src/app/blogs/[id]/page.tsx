import React from 'react';

const BlogPostPage = () => {
  // Dummy blog post data
  const dummyBlogPost = {
    title: "First Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "March 20, 2024" // Date of the post
  };

  return (
    <div className="flex min-h-screen flex-col p-12 max-w-5xl mt-0">
      <p className="text-gray-500 mb-2">{dummyBlogPost.date}</p>
      <h1 className="text-3xl font-bold mb-4">{dummyBlogPost.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-600">{dummyBlogPost.content}</p>
      </div>
    </div>
  );
};

export default BlogPostPage;
