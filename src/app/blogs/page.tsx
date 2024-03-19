import Nav from "../components/Nav";
import Post from "../components/Post";


export default function Blogs() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12  max-w-5xl ">
  
      <div>
        <Post/>
        <Post/>
        <Post/>
        
      </div>
    </main>
  );
}
