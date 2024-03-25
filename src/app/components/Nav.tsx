"use client";
import {  useEffect, useState } from "react";
import Link from "next/link";
import { userType } from "@/utils/types";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";


const Nav = () => {
  const [userDta, setuserDta] = useState("")
  const route = useRouter()
  

  useEffect(() => {
    const user = localStorage.getItem("bloguser")
   
    if(user){
      let data:userType = JSON.parse(user)
      setuserDta(data.id.toString())
    } 
  
  }, [])
  const logout =async ()=>{
    try {
      const respDta = await fetch("../api/logout")
      const resp = await respDta.json()
      if(resp.status === 200){
        toast.success("loggedOut")
        localStorage.removeItem("bloguser")

        setTimeout(()=>{        
          route.push("/login")
       
        }, 2000)
        setTimeout(()=>{        
location.reload()       
        }, 3000)
      } 
      
      
    } catch (error) {
      
    }
  }
  




  return (
    <div className="w-full p-12  max-w-5xl mb-0  " >
      <Toaster/>
      <nav className="w-full  flex  justify-between " >
        <p className="text-3xl  " ><Link href='/' >weraByte</Link> </p>

        <div className="w-1/2 flex justify-end gap-6 items-center " >
     {userDta &&   <Link className="hover:underline transition-transform " href='/admin/create' >Write</Link>}
          <Link className="hover:underline transition-transform " href='/blogs' >Blogs</Link>
          <Link className="hover:underline transition-transform " href='/about' >About</Link>
        {userDta ?
          <button onClick={logout} className=" text-center outline outline-1 w-20 p-2 outline-blue-600 rounded-lg hover:bg-blue-600 hover:text-white " >Log out</button> :  <Link href='/login' className=" text-center outline outline-1 w-20 p-2 outline-blue-600 rounded-lg hover:bg-blue-600 hover:text-white " >Login</Link> }
        </div>
      </nav>
    </div>
  )
}
22
export default Nav