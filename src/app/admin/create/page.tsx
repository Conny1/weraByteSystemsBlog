"use client";
import React, { useState } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const CreateBlogPage = () => {
  const [content, setContent] = useState('');

  const handleContentChange = (newContent:string) => {
    setContent(newContent);
  };

  return (
    <div className=" w-full flex min-h-screen flex-col  p-4  max-w-5xl mt-0">
      <h1 className="text-3xl font-bold mb-4">Create Blog</h1>
      <div className="bg-white p-6 rounded-lg shadow min-h-96  ">
        <ReactQuill
        className='h-80'
          theme="snow"
          value={content}
          onChange={handleContentChange}
          placeholder="Write your blog content here..."
        />
      

      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>

      {/* Add form fields for title, categories, etc. */}
    </div>
  );
};

export default CreateBlogPage;
