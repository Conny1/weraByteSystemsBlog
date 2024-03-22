import { contentType } from "@/utils/types";
import Post from "../components/Post";


export default async function Blogs() {
 const getBlogs =async()=>{
  const Blogs = await fetch(`${process.env.BASE_URL}api/blogdata` ,{ cache: 'no-store' } )
  const Blogresp = await Blogs.json()

  if(Blogresp.status === 200){
    return Blogresp.data
  }else{
    return []
  }
      
 }
 const data = await getBlogs() 
// console.log(data)  
  return (
    <main className="flex min-h-screen flex-col items-center p-12  max-w-5xl ">
  
      <div>
        {  data.length ===0? <h2>No blog post yet</h2> :
          data.map((item:contentType)=>{
            return <Post key={item.id} {...item}  />
          })
        }
       
        
      </div>
    </main>
  );
}
