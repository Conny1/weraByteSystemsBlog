import { contentType } from '@/utils/types';
import { Metadata } from 'next';
import React from 'react';
import sanitizeHtml from 'sanitize-html';



type pramType={
  params:{
    id:number
  }
}


export async function generateMetadata({ params }: pramType): Promise<Metadata> {
  const getBlogsMetaData =async()=>{
    const Blogs = await fetch(`${process.env.BASE_URL}api/blogdata/${params.id}`,{
      cache:"no-cache" ,   
    })
    const Blogresp = await Blogs.json()
  
    if(Blogresp.status === 200){
      return Blogresp.data
    }else{
      return []
    }
        
   }
  const blogData: Promise<contentType[]> = getBlogsMetaData()
  const blog: contentType[] = await blogData
  if(!blog || blog.length === 0) {
    return{
      title:"WeraByte system blog",
      description:"Explore our products and streamline your business processes."
    }
  }

  const index1 = blog[0].content.indexOf('<p>')
  const index2 = blog[0].content.indexOf('</p>')
  const desc = blog[0].content.substring(index1, index2)

  return {
      title: blog[0].title,
      description: desc
  }

}

const BlogPostPage = async ({params}:pramType) => {
  
  const getBlogs =async()=>{
    const Blogs = await fetch(`${process.env.BASE_URL}api/blogdata/${params.id}`,{
      method:'GET',   
    })
    const Blogresp = await Blogs.json()
  
    if(Blogresp.status === 200){
      return Blogresp.data
    }else{
      return []
    }
        
   }

  
  
   const data = await getBlogs() 
  //  console.log(data)
   if(!data || data.length === 0) return <p>Page not found..</p>
   const content = data[0].content
   function sanitizeHTMLString(data:string) {
    return sanitizeHtml(data);
  }
  const sanitizedHTML = sanitizeHTMLString(content);



  return (
    <div className="flex min-h-screen flex-col p-12 max-w-5xl mt-0">
      {/* <p className="text-gray-500 mb-2">{ new Date(data[0].createdat).toLocaleDateString() }</p> */}
      <h1 className="text-4xl font-bold mb-4 max-w-3xl ">{data[0].title}</h1>
      <div className="prose lg:prose-xl  " dangerouslySetInnerHTML={{ __html: sanitizedHTML }}  >
        
      </div>
    </div>
  );
};

export default BlogPostPage;
