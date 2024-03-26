import { contentType } from "@/utils/types";
import Post from "../components/Post";
const getBlogs =async()=>{
  const Blogs = await fetch(`${process.env.BASE_URL}api/blogdata` ,{ cache: 'no-store' } )
  const Blogresp = await Blogs.json()

  if(Blogresp.status === 200){
    return Blogresp.data
  }else{
    return []
  }
      
 }
 export async function generateMetadata() {
   return getBlogs().then((item:contentType[])=>{
    if (item.length === 0) return
    item.map((blog)=>{
      const index1 = blog.content.indexOf('<p>')
      const index2 = blog.content.indexOf('</p>')
      const desc = blog.content.substring(index1, index2)
      return   {
        title: blog.title,
        description: desc
      };

    })
  
 })

}
 
//  console.log(metaDta)


export default async function Blogs() {
 
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
