import React from 'react'
import { MdArrowOutward } from "react-icons/md";

export default function AllPostsCard() {




    return (


        <>

            <div className='col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-4 '>

                <img src="https://esmt.berlin/sites/default/files/styles/400x400/public/2024-10/blended-learning-jouneys.webp?h=999dc75f&itok=lskPITFo" alt="" />

                <p className='text-[#6941C6] text-semibold text-sm'> <span> Alec Whitten </span> • 1 Jan 2023 </p>

                <div className='flex justify-between items-center'>
                    <h6 className='text-2xl text-semibold'> Bill Walsh leadership lessons </h6>
                    <MdArrowOutward className='inline-block text-2xl text-semibold' />
                </div>

                <p className='text-[#667085]'>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
            </div>

        </>
    )
}
