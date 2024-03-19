import Link from 'next/link'
import React from 'react'

const Post = () => {
  return (
    <>
      <hr className="mt-10 mb-8  border-t-1 border-gray-400"  />
    <div className='flex flex-col h-52 justify-between gap-3 ' >  
        <p className='h-fit ' >August 5, 2023</p>
        <div className='flex-1  flex flex-col justify-between ' >
        <section className='' >
        <h1 className='font-bold text-2xl' >Release of Tailwind Nextjs Starter Blog v2.0</h1>
        <p className='text-sm font-bold text-blue-600 ' >NEXT-JS  TAILWIND  GUIDE  FEATURE</p>
        </section>

        <p>Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.
</p>

<Link href='blog/:id' className='text-sm font-bold text-blue-600 ' >Read more →</Link>
        </div>
    </div>
    </>
  )
}

export default Post