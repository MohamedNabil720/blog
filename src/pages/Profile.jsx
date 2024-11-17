import React, { useState } from 'react';
import CreatePostCard from '../components/CreatePostCard';


// let [createPost, setCreatePost] = useState(false)




export default function Profile() {
    return (
        <>
            <div className="container h-[200vh]">
                <div className="relative inline-block">
                    <img
                        className="w-full"
                        src="https://plus.unsplash.com/premium_photo-1661775756810-82dbd209fc95?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                    <div className="bg-white w-[350px] min-h-[400px] absolute border-2 rounded-t-full bottom-[-10%] right-[20%] transform translate-x-[50%] translate-y-[50%]">
                        <div className="text-center flex flex-col gap-3 p-6">
                            <img
                                className="rounded-full w-32 h-32 mx-auto"
                                src="https://r2.erweima.ai/imgcompressed/img/compressed_95f6dc695351dbb5cf511ee473897718.webp"
                                alt=""
                            />
                            <h4 className='text-2xl font-semibold'>Mike Peters</h4>
                            <p className='text-[#544C4C] text-lg'>Interior designer</p>
                            <p className='text-[#544C4C] text-lg'>Lagos, Nigeria</p>


                            <div className="flex justify-evenly my-4 ">
                                <div>
                                    <p className='text-4xl font-semibold'>1,000</p>
                                    <p className='text-[#544C4C] text-lg'>Followers</p>
                                </div>
                                <div>
                                    <p className='text-4xl font-semibold'>100</p>
                                    <p className='text-[#544C4C] text-lg'>Following</p>
                                </div>
                                <div>
                                    <p className='text-4xl font-semibold'>37K</p>
                                    <p className='text-[#544C4C] text-lg'>Likes</p>
                                </div>
                            </div>
                            <div className="flex gap-6  justify-evenly">
                                <button className="bg-[#6941C6] w-full text-white py-2 px-4 rounded-full">
                                    Edit Profile
                                </button>
                                <button onClick={() => setCreatePost(!createPost)} className="bg-[#6941C6] w-full text-white py-2 px-4 rounded-full">
                                    Create Post
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='absolute w-full bg-gray-100 top-[50%] left-[50%] transform -translate-x-[50%] translate-y-[50%]'>
                        <CreatePostCard />
                    </div>

                </div>
            </div>


        </>
    );
}
