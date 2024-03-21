import Link from "../../../node_modules/next/link"

const Nav = () => {
  return (
    <div className="w-full p-12  max-w-5xl mb-0  " >
      <nav className="w-full  flex  justify-between " >
        <p className="text-3xl  " ><Link href='/' >weraByte</Link> </p>

        <div className="w-1/2 flex justify-end gap-6 items-center " >
          <Link className="hover:underline transition-transform " href='/blogs' >Blogs</Link>
          <Link className="hover:underline transition-transform " href='/about' >About</Link>
          <Link href='/login' className=" text-center outline outline-1 w-20 p-2 outline-blue-600 rounded-lg hover:bg-blue-600 hover:text-white " >Login</Link> 
        </div>
      </nav>
    </div>
  )
}
22
export default Nav