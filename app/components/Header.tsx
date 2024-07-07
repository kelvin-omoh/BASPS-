"use client";
import React, { useState } from 'react'
import { BsBell, BsPerson, BsSearch } from 'react-icons/bs'
import { AiFillSetting, AiOutlineUser } from 'react-icons/ai'
import { useStaffStore } from '../Store/Store';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
import logo from "../assets/Bells-University-of-Technology2-removebg-preview (2).png"
import Image from 'next/image';
const Header = () => {

    const [user, loading, error] = useAuthState(auth); // Use useAuthState hook with your Firebase auth instance
    const { isAdmin, setIsAdmin } = useStaffStore((state: any) => state);


    const systemData = useStaffStore((state: any) => state.systemData)
    // const changeName = useStaffStore((state: any) => state.changeName)

    // const [initialName, setInitialName] = useState<any>(name)

    // const changingName = () => {

    //     changeName(initialName)
    // }

    const navigate = useRouter()


    return (
        <div className={` z-[50] shadow-md  fixed flex justify-between items-center top-0 ${user ? 'w-[85%]' : 'w-[100%]'}  px-[3rem] h-[15%] text-white  bg-[#eeeeee]   border-b-[.2px]  border-gray-200`}>



            <div className=' flex items-center text-[#707070]'>



                <div className='  flex items-center'>
                    <Image src={logo} alt='logo' className=' w-[200px] h-[140px] ' width={4000} height={4000} />
                    <p className=' text-[20px]  font-bold '>Bells Appraisal Management System </p>
                </div>

                {
                    isAdmin && user ?
                        <h1 className=' text-[24px]   my-auto ml-[5rem] text-black'>Hello, <span className=' capitalize'>
                            ADMINSTRATOR </span></h1>
                        : <h1 className={` text-[16px] ml-[4rem] my-auto text-black ${systemData?.data?.systemRole !== "USER" && 'hidden'}`}>Hello, <span className=' capitalize'>


                            {user?.displayName ? user?.displayName : "Guest"} </span></h1>

                }

            </div>

            <div className=' flex gap-3 items-center'>
                <button className=' relative bg-gray-700 rounded-full p-3 text-black '>
                    <BsBell className=' text-white' size={20} />
                    <span className=' top-2 right-2 bg-red-700 p-1 rounded-full absolute'></span>
                </button>
                <button className=' relative bg-gray-700 rounded-full p-3 text-black '>
                    <AiFillSetting className=' text-white' size={20} />

                </button>

                {user?.displayName &&
                    <button onClick={() => navigate.push("/profile")} className='  flex gap-2 items-center relative  rounded-full  p-3 selection:text-black '>
                        <BsPerson className=' p-3 bg-gray-600 rounded-full' size={50} />
                        <div className=' flex flex-col  items-start'>
                            <h1 className='  text-black text-[16px] '>{user?.email}</h1>
                            <p className='  text-black text-[12px] '>{systemData?.data?.systemRole}</p>
                        </div>


                    </button>
                }
            </div>

        </div>
    )
}

export default Header