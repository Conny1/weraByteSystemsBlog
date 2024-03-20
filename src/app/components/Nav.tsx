import Link from "../../../node_modules/next/link"

const Nav = () => {
  return (
    <div className="w-full p-12  max-w-5xl mb-0  " >
      <nav className="w-full  flex  justify-between " >
        <p className="text-3xl  " ><Link href='/' >weraByte</Link> </p>

        <div className="w-1/2 flex justify-end gap-6 items-center " >
          <Link className="hover:underline transition-transform " href='/blogs' >Blogs</Link>
          <Link className="hover:underline transition-transform " href='/about' >About</Link>
        </div>
      </nav>
    </div>
  )
}
22
export default Nav