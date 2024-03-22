import React from 'react';
import sanitizeHtml from 'sanitize-html';


type pramType={
  params:{
    id:number
  }
}
const BlogPostPage = async ({params}:pramType) => {
  const dummyBlogPost = {
    title: "First Blog Post",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "March 20, 2024" // Date of the post
  };

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
      <p className="text-gray-500 mb-2">{ new Date(data[0].createdat).toDateString() }</p>
      <h1 className="text-4xl font-bold mb-4 max-w-3xl ">{data[0].title}</h1>
      <div className="prose lg:prose-xl  " dangerouslySetInnerHTML={{ __html: sanitizedHTML }}  >
        
      </div>
    </div>
  );
};

export default BlogPostPage;
