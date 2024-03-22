"use client";
import { BlogError } from '@/utils/errorHandlers';
import { userType } from '@/utils/types';
import React, { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const CreateBlogPage = () => {
  const [content, setContent] = useState('');
  const [title, settitle] = useState("")

  const handleContentChange = (newContent:string) => {
    setContent(newContent);
  };

  const submitBlog=async ()=>{
    const writerData = localStorage.getItem('bloguser')
   
    if(!writerData) return toast.error('session expired.Login again')

  const user:userType = JSON.parse(writerData)
     
    if(!content || !title ) return toast.error("Provide content")
    const data = {
  userid:user?.id,
  content,
  title
    }
    
     try {
      const respData = await  fetch('../api/blogdata',{
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const resp = await respData.json()
      const errorMessage = BlogError(resp.status)
      if(errorMessage) return toast(errorMessage)
      if(resp.status ===200){
        toast.success("Blog added")
      }
      
     } catch (error) {
      console.log(error)
      
     }
  }

  return (
    <div className=" w-full flex min-h-screen flex-col  p-4  max-w-5xl mt-0">
     <Toaster/>
      <h1 className=" text-3xl font-bold mb-4">Create Blog</h1>
      <input  onChange={(ev)=>settitle(ev.target.value)} className=' w-full max-w-xl outline outline-1 mb-5 p-3 self-center rounded-lg  ' type="text" placeholder='Blog title' />
      <div className="bg-white p-6 rounded-lg shadow min-h-96  ">
        <ReactQuill
        className='h-80'
          theme="snow"
          value={content}
          onChange={handleContentChange}
          placeholder="Write your blog content here..."
        />
      

      </div>
      <button onClick={submitBlog} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>

      {/* Add form fields for title, categories, etc. */}
    </div>
  );
};

export default CreateBlogPage;
