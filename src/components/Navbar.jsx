import React from 'react'

export default function Navbar() {
    return (


        <>

            <div className='container  mt-[30px] flex justify-between p-3'>

                <h1 className='text-xl font-[Inter] font-semibold'> Blogy </h1>

                <div className='flex gap-10 items-center'>
                    <ul className='flex gap-6 '>
                        <li> Blog </li>
                        <li> About </li>
                        <li> Newsletter </li>
                        <li> Profile </li>
                    </ul>

                    <button> icon</button>

                </div>

            </div>

        </>
    )
}
