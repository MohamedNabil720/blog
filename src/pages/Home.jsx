import React from 'react'
import AllPostsCard from '../components/AllPostsCard'

export default function Home() {


    return (
        <>


            <div className='container mt-[30px]'>

                <h2 className=' text-[72px] md:text-[160px] xl:text-[243px] text-center font-bold border-b-2 border-t-2'>
                    THE BLOG
                </h2>


                {/* All Posts */}

                <div className='mt-[30px]'>
                    <h5 className='text-2xl font-semibold mb-10'>All blog posts</h5>

                    <div className='grid grid-cols-12 gap-8 pb-6  border-b-2'>
                        <AllPostsCard />
                        <AllPostsCard />
                        <AllPostsCard />
                        <AllPostsCard />
                        <AllPostsCard />
                        <AllPostsCard />
                    </div>

                </div>


            </div>

        </>
    )
}
