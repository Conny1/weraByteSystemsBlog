"use client";
import { userType } from '@/utils/types';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

type Props ={
  title:string;
  content:string;
  createdat:Date;
  id:number
}

const Post = ({title,content, createdat, id }:Props) => {
  const index1 = content.indexOf('<p>')
  const index2 = content.indexOf('</p>')
  const subTitleindex1 = content.indexOf('<h2>')
  const subTitleindex2 = content.indexOf('</h2>')
  const subtitle =  content.substring(subTitleindex1, subTitleindex2).replace(/<[^>]*>/g, '') ||""
  const description = content.substring(index1, index2).replace(/<[^>]*>/g, '');
  const [userDta, setuserDta] = useState("")


  useEffect(() => {
    const user = localStorage.getItem("bloguser")
   
    if(user){
      let data:userType = JSON.parse(user)
      setuserDta(data.id.toString())
    } 
  
  }, [])
  const deletePost = async()=>{
    

    try {
      const respDta = await fetch(`../api/blogdata/${id}`, {
        method:"DELETE"
      })

      const resp = await respDta.json()
      if(resp.status ===200){
        toast.success("Deleted")
        location.reload()
      }else{
        toast.error("error deleting")
      }
      
    } catch (error) {
      
    }

  }
  
  return (
    <>
      <hr className="mt-10 mb-8  border-t-1 border-gray-400"  />
      <Toaster/>
    <div className='flex flex-col h-52 justify-between gap-3 ' >  
       <div className=' flex justify-between w-full flex-wrap' > <p className='h-fit ' >{new Date(createdat).toDateString()}</p>  
    {userDta &&   <button onClick={deletePost} className='text-red-600' >Delete</button>}
         </div>
        <div className='flex-1  flex flex-col justify-between ' >
        <section className='' >
        <h1 className='font-bold text-2xl' >{title}</h1>
{subtitle ?<p className='text-sm font-bold text-blue-600 ' >{subtitle}</p>:null
}        </section>

        <p>{description}.
</p>

<Link href={`blogs/${id}` }className='text-sm font-bold text-blue-600 ' >Read more →</Link>
        </div>
    </div>
    </>
  )
}

export default Post