"use client";
import React, { useState } from 'react'
import { BsBell, BsPerson, BsSearch } from 'react-icons/bs'
import { AiFillSetting, AiOutlineUser } from 'react-icons/ai'
import { useClerk } from '@clerk/nextjs'
import { useStaffStore } from '../Store/Store';


const Header = () => {

    const clerk = useClerk()


    // const name = useStaffStore((state: any) => state.name)
    // const changeName = useStaffStore((state: any) => state.changeName)

    // const [initialName, setInitialName] = useState<any>(name)

    // const changingName = () => {

    //     changeName(initialName)
    // }


    return (
        <div className=' z-10 fixed flex justify-between items-center top-0 w-[85%] px-[3rem] h-[15%] text-white  bg-[#222831]   border-b-[.2px]  border-gray-200'>



            <div className='text-[#b5b5b5]'>
                <h1 className=' text-[24px] text-white'>Hello, <span className=' capitalize'>{clerk.user ? clerk.user.firstName : "Guest"} </span></h1>
                <p>Welcome Back </p>
            </div>
            <div className=' flex items-center  gap-4 bg-black w-[20rem] text-white h-[3rem] p-3 rounded-full '>
                <BsSearch />
                <input placeholder='search' type="text" className=' w-full bg-[#1a191917] outline-none' />
            </div>
            <div className=' flex gap-3 items-center'>
                <button className=' relative bg-gray-700 rounded-full p-3 text-[#b5b5b5] '>
                    <BsBell size={20} />
                    <span className=' top-2 right-2 bg-red-700 p-1 rounded-full absolute'></span>
                </button>
                <button className=' relative bg-gray-700 rounded-full p-3 text-[#b5b5b5] '>
                    <AiFillSetting size={20} />

                </button>
                <button className='  flex gap-2 items-center relative  rounded-full  p-3 text-[#b5b5b5] '>
                    <BsPerson className=' p-3 bg-gray-600 rounded-full' size={50} />
                    <div className=' flex flex-col  items-start'>
                        <h1 className=' text-[16px] '>Enaikele</h1>
                        <p className=' text-[12px] '>Admin</p>
                    </div>


                </button>
            </div>

        </div>
    )
}

export default Header