import Nav from "./components/Nav";
import Post from "./components/Post";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-12  max-w-5xl mt-0 ">
      {/* <Nav/> */}
      <header  className="w-full   mb-10" >
        <h1 className="text-6xl font-bold " >Latest</h1>
      
      </header>

      <div>
        <Post/>
        <Post/>
        <Post/>
        
      </div>
    </main>
  );
}
