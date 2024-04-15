'use client'
import React from 'react'
import Logo2 from '../assets/logo.png'
import Image from 'next/image'
import { BsBarChartSteps, BsBookHalf, BsGraphUpArrow, BsPerson, BsPersonFillSlash, BsSunFill, BsWindowSplit } from 'react-icons/bs'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton, } from '@clerk/nextjs';
import { useClerk } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'

const Sidebar = () => {
    const { signOut, user } = useClerk();
    const router = useRouter()
    const SideNavigations = [
        {
            id: 1,
            text: "Dashboard",
            to: "/dashboard",
            icon: <BsWindowSplit
                size={20} />
        },
        {
            id: 2,
            text: "Staff",
            to: "/staff",
            icon: <BsPerson size={20} />
        },
        {
            id: 3,
            text: "Performance",
            to: "/performance",
            icon: <BsPersonFillSlash size={20} />
        },
        {
            id: 4,
            text: "Recruitments",
            to: "/recruitments",
            icon: <AiOutlineUsergroupAdd size={20} />
        },
        {
            id: 5,
            text: "Organization",
            to: "/organization",
            icon: <BsBarChartSteps size={20}
            />
        },
        {
            id: 7,
            text: "Analvtics",
            to: "/analvtics",
            icon: <BsGraphUpArrow size={20}
            />
        },

        {
            id: 9,
            text: "Reports",
            to: "/reports",
            icon: <BsBookHalf size={20} />
        },
        {
            id: 10,
            text: "Dark Mode",
            to: "#",
            icon: <BsSunFill size={20} />
        },

        {
            id: 11,
            text: "",
            to: "/login",
            icon: <nav className=' flex'>
                <SignedIn>
                    <UserButton />
                </SignedIn>

                {user?.firstName &&
                    <button className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 w-full  flex items-center  gap-3'
                        onClick={() => signOut(() => router.push("/"))}>

                        <FaSignOutAlt size={20} />        Sign out

                    </button>}

                <SignedOut>
                    <SignInButton mode='modal'>

                        <Link href={"#"} className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74  flex items-center  gap-3'>
                            <FaSignInAlt size={20} />       Login
                        </Link>

                    </SignInButton>
                </SignedOut>

            </nav>
        },
    ]

    return (
        <div className=' w-full '>
            <div className=' w-full mt-2 flex items-center '>

                <Image className=' h-[4.3rem] my-5 rounded-xl  object-contain ' src={Logo2} alt={"logo"} />
                <h1 className=' text-[1.3em] '> </h1>

            </div>


            <ul className=' border-t-[.1px]'>
                {SideNavigations.map(e => (

                    <Link key={e.id} className=' hover:bg-[#282828] hover:text-[#5099ff] px-2 py-2 text-[14px] rounded-md hover:scale-105 transition-all delay-74 my-5 flex items-center  gap-3' href={`${e.to}`}> {e.icon}
                        {e.text}
                    </Link>



                ))}



            </ul>
        </div>
    )
}

export default Sidebar